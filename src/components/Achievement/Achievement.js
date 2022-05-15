import React, { useContext } from "react";

import "./Achievement.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";

function Achievement() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <div
          className="achievement"
          id="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="achievement-body">
            <h1 style={{ color: theme.primary }}>Achievements</h1>
            <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
          </div>
          <div className="achievement-cards"></div>
        </div>
      )}
    </>
  );
}

export default Achievement;
