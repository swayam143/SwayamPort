import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import "./SingleProject.css";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));
  const classes = useStyles();
  return (
    <Fade bottom>
      <div key={id} className="p_20">
        <div className="card card_ed">
          <div className="image-box">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h4 className="pr_name">{name}</h4>

              <div className="data">
                <h3 className="desc_data">{desc}</h3>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-labelledby={`${name
                    .replace(" ", "-")
                    .toLowerCase()} ${name
                    .replace(" ", "-")
                    .toLowerCase()}-demo`}
                >
                  <button href={code} className="glow-on-hover " type="button">
                    <div className={classes.drawerItem}>
                      <span className={classes.drawerLinks}> Details</span>{" "}
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <img src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Demo'
                            />
                        </a>
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div> */}
      </div>
    </Fade>
  );
}

export default SingleProject;
