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
    description: `At Cybage Software, our team leverages my expertise in React.js to create dynamic web applications that enhance user experience. Adept in mathematics and advanced computing, I apply analytical rigor to solve complex problems, ensuring our software solutions are both innovative and reliable.

    /n My educational foundation in mathematics, fortified with a PG Diploma in advanced computing, underpins my technical competencies. We've successfully deployed a Tour Booking application and Foodies application, showcasing my capability to translate intricate requirements into user-centric software features.`,
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
              {SCREEN_CONSTANTS.description.split("/n").map((text, index) => (
                <p key={index}>{text}</p>
              ))}
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
