import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { customProjects } from "../../shared/customProjects";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <style>{`
          .custom-project-btn {
            transition: all 0.2s;
          }
          .custom-project-btn.demo {
            background: ${theme.headerColor};
            color: ${theme.body};
            border: none;
          }
          .custom-project-btn.demo:hover {
            background: ${theme.body};
            color: ${theme.headerColor};
            border: 2px solid ${theme.headerColor};
          }
          .custom-project-btn.code {
            background: transparent;
            color: ${theme.headerColor};
            border: 2px solid ${theme.headerColor};
          }
          .custom-project-btn.code:hover {
            background: ${theme.headerColor};
            color: #fff;
            border: 2px solid ${theme.headerColor};
          }
          .custom-projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            justify-items: center;
            margin: 40px 0;
          }
          .custom-project-card {
            background: ${theme.body};
            border-radius: 10px;
            box-shadow: 4px 3px 20px -2px grey;
            width: 400px;
            height: 420px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .custom-project-card img {
            width: 100%;
            height: 180px;
            object-fit: contain;
            background: #fff;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            margin: 0;
            display: block;
          }
          .custom-project-card-content {
            padding: 24px;
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .custom-project-card-content p {
            color: ${theme.secondaryText};
            min-height: 48px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            max-width: 100%;
          }
          @media (max-width: 1200px) {
            .custom-projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 900px) {
            .custom-projects-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        <div className="custom-projects-grid">
          {customProjects.map((project, idx) => (
            <div className="custom-project-card" key={idx}>
              <img
                src={require(`../../assets/images/${project.image}`)}
                alt={project.title}
              />
              <div className="custom-project-card-content">
                <div>
                  <h3 style={{ color: theme.text, fontWeight: 700, marginTop: 0, textAlign: 'center' }}>{project.title}</h3>
                  <p style={{ color: theme.secondaryText, minHeight: 48, textAlign: 'center' }}>{project.description}</p>
                </div>
                <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="custom-project-btn code" style={{
                      borderRadius: 6,
                      padding: '8px 20px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: 16
                    }}>Source Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
