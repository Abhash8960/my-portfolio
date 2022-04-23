import React from "react";
import "./About.css";
import abh from "../../img/abh.jpg";
import Resume from "../../img/Resume.pdf";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={abh} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          An experienced web developer with a strong interest in projects that
          require both conceptual and analytical thinking. Fully-committed to
          designing and developing innovative web-based materials that users
          will love. Always eager to learn new technologies being introduced in
          the market.
        </p>

        <div className="a-award">
          <a
            href="https://www.facebook.com/abhash.pandey.583/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="a-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhash-pandey-731066199/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="a-icon" />
          </a>
          <a
            href="https://github.com/Abhash8960/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="a-icon git" />
          </a>
          <a
            href="https://www.instagram.com/abhash752/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram className="a-icon insta" />
          </a>
          &nbsp; &nbsp;
          <a href={Resume} download="Abhash Resume">
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
