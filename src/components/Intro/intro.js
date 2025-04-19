import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import image from "../../assets/image1.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Kaviya</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating
          <br /> visually appealing websites using Front-end tools.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <span className="material-symbols-outlined btnIcon">work</span>
            Hire Me
          </button>
        </Link>
      </div>
      <img src={image} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
