import "./AboutMe.css";
import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: `WORK, LEARN, CONTRIBUTE AND GROW ----- Passionate about front-end technology, especially React and JavaScript, I specialize in leveraging these tools for efficient development. With strong skills in HTML, CSS, and JavaScript.  I develop user-friendly web applications and seamlessly integrate various libraries and frameworks.  Choose me for a developer who combines passion with technical proficiency and practical experience to deliver exceptional web solutions.`,
    highlights: {
      bullets: [
        "Front End Developer",
        "Interactive Front End as per design",
        "React Js",
        "Responsive Web Design",
        "RESTful API Integration",
        "Unit Testing (Jest, Mocha)",
        "Version Control (Git, BitBucket)",
        "Agile Development Practices",
      ],
      heading: "Here are few highlights : ",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => {
      return (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  console.log(renderHighlights());

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="finalResume.pdf" download="Prathamesh_Nadhe_Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
