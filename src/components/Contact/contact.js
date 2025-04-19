import React, { useRef } from "react";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstaIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jmycf3e",
        "template_4kfyruu",
        form.current,
        "3UJsql2VsmBzMoyeb0kpV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="contactContainer">
        <h1 className="contactPageTitle">My Clients</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss about the opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="submitBtn">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstaIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
