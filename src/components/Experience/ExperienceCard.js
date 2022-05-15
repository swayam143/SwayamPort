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

  return (
    <Fade bottom>
      <div
        key={id}
        className={`experience-card card_ed ${classes.experienceCard}`}
      >
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img src={experience} alt="" />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
          <ul>
            {Detail.map((data, i) => (
              <li style={{ marginLeft: "-30px" }} key={i}>
                <p className="job_description">{data.details}</p>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
