import { NavLink } from "react-router-dom";
import MyCv from "../assets/myCV.json";
import "../Cv.css";

export default function Cv() {
  const handlePrint = () => {
    console.log("Print called");
    window.print();
  };

  return (
    <main>
      <div className="cv-main">
        <header>
          <h1>{MyCv.FullName}</h1>
          <p>{MyCv.Title}</p>
        </header>

        <section id="about">
          <h2>About Me</h2>
          <p>{MyCv.About}</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            {MyCv.TechStack[0].Languages.map((language, index) => (
              <li key={`language-${index}`}>{language}</li>
            ))}
            {MyCv.TechStack[0].FrontEndFrameworks.map((framework, index) => (
              <li key={`framework-${index}`}>{framework}</li>
            ))}
            {MyCv.TechStack[0].BackEndFrameworks.map((framework, index) => (
              <li key={`backend-framework-${index}`}>{framework}</li>
            ))}
            {MyCv.TechStack[0].Databases.map((database, index) => (
              <li key={`database-${index}`}>{database}</li>
            ))}
            {MyCv.TechStack[0].VersionControl.map((version, index) => (
              <li key={`version-control-${index}`}>{version}</li>
            ))}
            {MyCv.TechStack[0].DevOpsTools.map((tool, index) => (
              <li key={`devops-tool-${index}`}>{tool}</li>
            ))}
            {MyCv.TechStack[0].CloudServices.map((service, index) => (
              <li key={`cloud-service-${index}`}>{service}</li>
            ))}
            {MyCv.TechStack[0].OtherTools.map((tool, index) => (
              <li key={`other-tool-${index}`}>{tool}</li>
            ))}
            {MyCv.TechStack[0].TestingFrameworks.map((framework, index) => (
              <li key={`testing-framework-${index}`}>{framework}</li>
            ))}
          </ul>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul>
            {MyCv.Education.map((edu, index) => (
              <li key={`education-${index}`}>
                <span className="italic">{edu.School}</span> - {edu.Course} (
                {edu.Dates})
                <br />
                {edu.Location}
              </li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul>
            {MyCv.Experience.map((exp, index) => (
              <li key={`experience-${index}`}>
                <span className="italic">
                  {exp.Title} - {exp.Company}
                  <br /> {exp.Location} ({exp.Dates})
                </span>
                <ul>
                  {exp.Highlights.map((highlight, hIndex) => (
                    <li key={`highlight-${hIndex}`}> - {highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="socials-contact">
          <h2>Socials & Contact</h2>
          <ul>
            <li key={MyCv.ContactInfo[0].PhoneNumber}>
              <strong>Phone:</strong> {MyCv.ContactInfo[0].PhoneNumber}
            </li>
            <li key={MyCv.ContactInfo[0].Location}>
              <strong>Location:</strong> {MyCv.ContactInfo[0].Location}
            </li>
            <li key={MyCv.ContactInfo[0].GitHub}>
              <strong>GitHub: </strong>
              <a href={MyCv.ContactInfo[0].GitHub}>
                {MyCv.ContactInfo[0].GitHub}
              </a>
            </li>
            <li key={MyCv.ContactInfo[0].LinkedIn}>
              <strong>LinkedIn: </strong>
              <a href={MyCv.ContactInfo[0].LinkedIn}>
                {MyCv.ContactInfo[0].LinkedIn}
              </a>
            </li>
            <li key={MyCv.ContactInfo[0].Email}>
              <strong>Email: </strong>
              <a href={`mailto:${MyCv.ContactInfo[0].Email}`}>
                {MyCv.ContactInfo[0].Email}
              </a>
            </li>
            <li key={MyCv.ContactInfo[0].Portfolio}>
              <strong>Portfolio: </strong>
              <a href={MyCv.ContactInfo[0].Portfolio}>
                {MyCv.ContactInfo[0].Portfolio}
              </a>
            </li>
          </ul>
        </section>

        <section id="print-section">
          <NavLink to="/Contact" className="button">
            Contact Me
          </NavLink>
          <a onClick={handlePrint} className="button">
            Print CV
          </a>
        </section>
      </div>
    </main>
  );
}
