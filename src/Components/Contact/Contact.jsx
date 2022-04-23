import { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../Context";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Resume from "../../img/Resume.pdf";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j0r5en8",
        "template_irgz0jb",
        formRef.current,
        "eKv1PXK4Xge-ABV2I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Us</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8210112005
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              abhashpandey8960@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kargali Bazar New Shiv Mandir Bermo Bokaro Jharkhand India
            </div>
            <div className="c-link">
              <a
                href="https://www.facebook.com/abhash.pandey.583/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook className="c-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhash-pandey-731066199/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="c-icon" />
              </a>
              <a
                href="https://github.com/Abhash8960/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="c-icon git" />
              </a>
              <a
                href="https://www.instagram.com/abhash752/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="c-icon insta" />
              </a>
            </div>
            <br />
            <div>
              <a href={Resume} download="Abhash Resume">
                <button>Download Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
