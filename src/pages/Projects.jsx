import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "../Projects.css"; // Your existing styles

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/mattiasastrom/repos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProjects(data);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <section>
          <h1>Mina projekt!</h1>
          <PacmanLoader color="#fffd12" />
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h1>Mina projekt!</h1>
        <div className="project-section">
          {projects.map((project, index) => {
            return (
              <div key={project.id} className="project-container">
                <img
                  src="https://picsum.photos/200/300"
                  alt={`Project image for ${project.name}`}
                />
                <section className="content">
                  <h1>{project.name}</h1>
                  <p>Language: {project.language || "Unknown"}</p>

                  {/* Modal Toggle */}
                  <input
                    type="checkbox"
                    id={`read-more-toggle-${index}`}
                    className="read-more-toggle"
                  />
                  <section className="modal">
                    <div className="modal-content">
                      <label
                        htmlFor={`read-more-toggle-${index}`}
                        className="modal-close"
                      >
                        &times;
                      </label>
                      <h2>{project.name}</h2>
                      <img
                        src="https://picsum.photos/200/300"
                        alt={`Modal image for ${project.name}`}
                      />
                      <p>Language: {project.language || "Unknown"}</p>
                      <p>
                        {/* Add additional content to the modal here */}
                        More details about {project.name} project.
                      </p>
                      <a
                        href={project.svn_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </section>
                  {/* Button to trigger the modal */}
                  <label
                    htmlFor={`read-more-toggle-${index}`}
                    className="button"
                  >
                    Read More
                  </label>
                </section>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
