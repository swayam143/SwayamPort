import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { MdTrendingFlat } from "react-icons/md";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
    drawerItem: {
      display: "flex",
      alignItems: "center",
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      //   width: "50%",
      fontSize: "1.3rem",
      fontWeight: 600,
      [t.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
    drawerIcon: {
      fontSize: "1.6rem",
      marginLeft: "10px",
      [t.breakpoints.down("sm")]: {
        fontSize: "1.385rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div
            style={{ marginTop: "20px", height: "100%" }}
            className="projects--body"
          >
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 2).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  cts
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}

              <div className="projects--viewAll mt_0">
                <a
                  href="https://github.com/swayam143"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="glow-on-hover w_100" type="button">
                    <div className={classes.drawerItem}>
                      <span className={classes.drawerLinks}>
                        {" "}
                        View&nbsp;More
                      </span>{" "}
                      <MdTrendingFlat className={classes.drawerIcon} />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
