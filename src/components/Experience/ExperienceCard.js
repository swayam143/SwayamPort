import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";
import experience from "../../assets/images/experience.gif";

import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear, Detail }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  const myExperience = [
    {
      date: "APR 2023 - PRESENT",
      profile: "Senior React JS Developer",
      company: "Facillima Software Pvt Ltd",
      details: [
        "Led and mentored a team of React JS developers, fostering a collaborative environment and encouraging skill development",
        "Extensive experience in building robust and scalable applications using React JS framework",
        "Proficient in developing efficient React JS components, ensuring optimal performance and maintainability",
        "Skilled in creating intuitive user interfaces with HTML, CSS, and JavaScript libraries like Bootstrap",
        "Proven ability to analyze user interactions and implement responsive UI components to enhance user experience",
        "Adept at translating design specifications into functional code, delivering high-quality solutions aligned with project requirements",
        "Played a pivotal role in conducting knowledge sharing sessions and performing thorough code reviews to uphold coding standards",

        "Possess over 4 years of hands-on experience in React JS development, consistently delivering impactful solutions for diverse projects",
      ],
    },
    {
      date: "DEC 2020-APR 2023",
      profile: "React js Developer",
      company: "Mobitplus Technologies",
      details: [
        "Comprehensive knowledge of React JS platform and core concepts",
        "Command over developing React JS components, Virtual DOM, and workflows",
        "User interface design and development using HTML, CSS, Bootstrap, JavaScript, and other design tools",
        "Identified web-based user interactions and developed highly responsive user interface components via React concepts",
        "Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript following React.js workflows",
        "Conducted regular knowledge transfer sessions and code reviews to maintain high standards of coding practices within the team",
        "Took a leadership role in guiding and mentoring fellow React JS developers, fostering an environment of collaboration and knowledge sharing",
      ],
    },
  ];

  return (
    <>
      {myExperience?.map((item, i) => (
        <Fade bottom key={i}>
          <div
            key={id}
            className={`experience-card card_ed ${classes.experienceCard}`}
          >
            <div
              className="expcard-img"
              style={{ backgroundColor: theme.primary }}
            >
              <img src={experience} alt="" />
            </div>
            <div className="experience-details">
              <h6 style={{ color: theme.tertiary }}>{item.date}</h6>
              <h4 style={{ color: theme.tertiary }}>{item.profile}</h4>
              <h5 style={{ color: theme.tertiary80 }}>{item.company}</h5>
              <ul>
                {item?.details.map((data, i) => (
                  <li style={{ marginLeft: "-30px" }} key={i}>
                    <p className="job_description">{data}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
}

export default ExperienceCard;
