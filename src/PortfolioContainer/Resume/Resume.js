import React, { useState } from "react";
import ScreenHeading from "./../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "./../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    // { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "HTML5, CSS3", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "MongoDB", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "GraphQL", ratingPercentage: 65 },
  ];

  const projectDetails = [
    {
      title: "Foodie",
      duration: { fromDate: "April'2024", toDate: "Present" },
      description: "Food delivery app with Swiggy's live API",
      subHeading: "Technologies used: React Js",
    },
    {
      title: "Parikrama Tours",
      duration: { fromDate: "May'2023", toDate: "Jan'2024" },
      description: "A Tour booking platform",
      subHeading: "Technologies used: React Js, Node JS, MongoDB",
    },
    {
      title: "Shout",
      duration: { fromDate: "Feb'2022", toDate: "May'2022" },
      description: "A social network web application like Twitter",
      subHeading: "Technologies used: React Js",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"PG Diploma in Advance Computing (CDAC)"}
        subHeading={"Sunbeam Institute Information Technology, Pune"}
        fromDate={"May'2021"}
        toDate={"Sep'2021"}
      />
      <ResumeHeading
        heading={"Master of Science - M.Sc. (Mathematics)"}
        subHeading={"Modern College of Arts, Science and Commerce, Pune"}
        fromDate={"2018"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Bachelor of Science - B.Sc. (Mathematics)"}
        subHeading={
          "S.N Arts, D.J.Malpani Commerce and B.N.Sarda Science College,Sangamner"
        }
        fromDate={"2015"}
        toDate={"2018"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Cybage Software Pvt. Ltd."}
        subHeading={"Software Engineer"}
        fromDate={"Jan'2022"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          In Cybage, I am involved in the Classy_dev project, a platform
          fostering connections between nonprofits and supporters through
          innovative online fundraising experiences. Specializing in React with
          TypeScript, I contribute by integrating server-side functionalities
          and translating Figma designs into responsive interfaces. I've notably
          enhanced the Admin Dashboard, utilizing my expertise to optimize
          performance and usability, thereby driving the project's success.
        </span>
      </div>
      {/* <div className="experience-description">
        <span className="resume-description-text">
          - Here I have to write about what work you were doing in company
        </span>
        <br />
        <span className="resume-description-text">
          - What you have done so far and what u got from company
        </span>
        <br />
        <span className="resume-description-text">
          - What you have done so far and what u got from company
        </span>
      </div> */}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => {
        return (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        );
      })}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => {
        return (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        );
      })}
    </div>,
    // <div className="resume-screen-container" key="interests">
    //   <ResumeHeading heading="Coding" description="I like to play with code " />
    //   <ResumeHeading
    //     heading="Chess"
    //     description="I like to play chess in free time, won some prices in college time"
    //   />
    // </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      return (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="oops... no internet connection"
            className="bullet-logo"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffsetStyle.style}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
