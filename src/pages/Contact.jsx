import { useState } from "react";

export default function Contact() {
  // State to store form inputs and errors
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear previous errors
    setErrors({
      email: "",
      message: "",
    });

    // Validation flags
    let isValid = true;
    const newErrors = {
      email: "",
      message: "",
    };

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Message validation
    if (message === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    // Set the error messages in state
    setErrors(newErrors);

    // If form is valid, proceed (simulate form submission)
    if (isValid) {
      alert(
        "Doesn't have a backend to actually send the message but.. it was sent :)"
      );
      setEmail("");
      setMessage("");
      // use API here to actually Send the mail. it's TODO once I learn it.
    }
  };

  return (
    <main>
      <section className="contact-form-container">
        <h2>Contact Me</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              required
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state on textarea change
              required
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
