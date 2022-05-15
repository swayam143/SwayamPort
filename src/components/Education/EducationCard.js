import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";
import education from "../../assets/images/education.gif";
import "./Education.css";

function EducationCard({ id, institution, course, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    educationCard: {
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
        className={`education-card card_ed ${classes.educationCard}`}
      >
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img src={education} alt="" />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
