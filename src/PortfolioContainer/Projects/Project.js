import React from "react";
import foodie from "../../images/foodie.png";
import parikrama from "../../images/parikrama.png";
import parikrama1 from "../../images/parikrama1.png";
import Shout from "../../images/shout.jpg";
import ScreenHeading from "./../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "./../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projects = [
    {
      title: "Parikrama Tours",
      description: "A Tour booking platform Frontend",
      githubLink: "https://github.com/prathameshnadhe/Parikrama_Tours_Frontend",
      deployedLink: "https://parikrama-tours.netlify.app/",
      image: parikrama,
    },
    {
      title: "Foodies",
      description: "Food delivery app with Swiggy's live API",
      githubLink: "https://github.com/prathameshnadhe/Foodies",
      deployedLink: "",
      image: foodie,
    },
    {
      title: "Parikrama Tours",
      description: "A Tour booking platform Backend",
      githubLink: "https://github.com/prathameshnadhe/Parikrama_Tours_Backend",
      deployedLink: "https://parikrama-tours.netlify.app/",
      image: parikrama1,
    },
    {
      title: "Shout",
      description: "A social network web application",
      githubLink: "https://github.com/prathameshnadhe/ShoutBox-Major-Project",
      deployedLink: "",
      image: Shout,
    },
  ];

  function ProjectView({ project }) {
    return (
      <>
        <div className="project-container">
          <div className="card">
            <img className="card-img-top" src={project.image} alt="error" />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="btn-container">
                <a
                  href={project.githubLink}
                  class="btn btn-primary"
                  target="_blank"
                >
                  Code
                </a>
                {project.deployedLink != "" ? (
                  <a
                    href={project.deployedLink}
                    class="btn btn-primary"
                    target="_blank"
                  >
                    Visit site
                  </a>
                ) : (
                  <button disabled class="btn btn-secondary">
                    Not deployed
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"All the projects that I have completed"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {projects.map((project) => {
              return (
                <div className="col-12 col-sm-12 col-xs-12 mt-4 col-lg-6 view">
                  <ProjectView project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
