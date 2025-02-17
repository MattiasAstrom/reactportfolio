import React, { useState, useEffect, useRef } from "react";
import "../EasterEgg.css";

export default function EasterEggs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [keySequence, setKeySequence] = useState("");
  const rainbowColors = [
    "rgba(0, 0, 0, 0.6)",
    "rgba(255, 0, 0, 0.6)",
    "rgba(255, 127, 0, 0.6)",
    "rgba(255, 255, 0, 0.6)",
    "rgba(0, 255, 0, 0.6)",
    "rgba(0, 0, 255, 0.6)",
    "rgba(75, 0, 130, 0.6)",
    "rgba(238, 130, 238, 0.6)",
    "rgba(255, 255, 255, 0.6)",
  ];

  const secretCode = "hej";
  let currentIndex = 0;
  let speed = 200;
  let animationFrameId = useRef(null);

  const handleKeydown = (event) => {
    setKeySequence((prev) => {
      const newSequence = prev + event.key;
      console.log(newSequence);
      if (newSequence.length > secretCode.length) {
        return newSequence.slice(1);
      }
      return newSequence;
    });
  };

  useEffect(() => {
    if (keySequence === secretCode) {
      console.log("Correct code");
      setModalVisible(true);
    } else {
      console.log("wrong code");
    }
  }, [keySequence]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const cycleColors = () => {
    const body = document.querySelector("main");
    let nextIndex = (currentIndex + 1) % rainbowColors.length;
    let currentColor = rainbowColors[currentIndex];
    let nextColor = rainbowColors[nextIndex];
    let startTime = null;

    const animateColorTransition = (timestamp) => {
      if (!startTime) startTime = timestamp;

      if (speed >= 1000) {
        speed -= 10;
      }

      const progress = (timestamp - startTime) / speed;
      const lerpedColor = lerpColor(
        currentColor,
        nextColor,
        Math.min(progress, 1)
      );

      body.style.setProperty("--overlay-color", lerpedColor);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(
          animateColorTransition
        );
      } else {
        currentIndex = nextIndex;
        setTimeout(cycleColors, 1);
      }
    };

    animationFrameId.current = requestAnimationFrame(animateColorTransition);
  };

  const resetAnimation = () => {
    const body = document.querySelector("main");
    body.style.setProperty("--overlay-color", "rgba(65, 195, 235, 0.438)");
    currentIndex = 0;
    speed = 200;
  };

  const lerpColor = (color1, color2, t) => {
    const rgba1 = color1.match(/[\d\.]+/g).map(Number);
    const rgba2 = color2.match(/[\d\.]+/g).map(Number);
    const r = Math.round(rgba1[0] + (rgba2[0] - rgba1[0]) * t);
    const g = Math.round(rgba1[1] + (rgba2[1] - rgba1[1]) * t);
    const b = Math.round(rgba1[2] + (rgba2[2] - rgba1[2]) * t);
    const a = (rgba1[3] + (rgba2[3] - rgba1[3]) * t).toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const toggleBackground = () => {
    if (isPlaying) {
      cancelAnimationFrame(animationFrameId.current);
      resetAnimation();
    } else {
      cycleColors();
    }
    setIsPlaying(!isPlaying);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <button onClick={toggleBackground} className="hidden-button">
        {isPlaying ? "Stop Color Cycle" : "Start Color Cycle"}
      </button>

      {modalVisible && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            border: "2px solid #000",
            zIndex: 1000,
            padding: "20px",
            textAlign: "center",
            display: "block",
          }}
          onClick={closeModal}
        >
          <h2>Congratulations, you found the Easter egg!</h2>
          <p>Press anywhere to close</p>
        </div>
      )}
    </>
  );
}
