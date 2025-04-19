import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I Do</span>
      <span className="skillDescription">
        I help businesses and individuals bring their ideas to life through
        beautifully designed, user-friendly websites. My services are tailored
        to meet the unique needs of each client, using modern frontend tools to
        deliver fast, responsive, and visually stunning websites.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Clean, modern, and responsive designs that look great on all
              devices.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Landing Pages</h2>
            <p>
              High-converting landing pages for products, services, or events.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Porfolio Sites</h2>
            <p>Custom portfolio designs to showcase your work with style.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
