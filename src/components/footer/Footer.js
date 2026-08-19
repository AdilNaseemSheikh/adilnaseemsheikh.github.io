import React, { useEffect, useRef } from "react";
import style from "./footer.module.css";
// import sprite from "./symbol-defs.svg";
import { NavLink } from "react-router-dom";
import resume from "./resume.pdf";
import {
  LiaLinkedin,
  LiaStackOverflow,
  LiaGithub,
  LiaTwitter,
  LiaInstagram,
} from "react-icons/lia";

const iconArr = [
  {
    link: "https://www.linkedin.com/in/adil-naseem-419905209/",
    icon: <LiaLinkedin color="#0077b5"/>,
  },
  {
    link: "https://stackoverflow.com/users/16793736/adil-naseem",
    icon: <LiaStackOverflow color="#c26016"  />,
  },
  {
    link: "https://github.com/adilnaseemsheikh",
    icon: <LiaGithub color="#e6edf3" />,
  },
  {
    link: "https://www.instagram.com/adilnaseemsheikh",
    icon: <LiaInstagram color="#e4405f"  />,
  },
  {
    link: "https://twitter.com/Adilnaseemshekh",
    icon: <LiaTwitter color="#1da1f3" />,
  },
];
function Footer() {
  const footerRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };
    function callback(enteries, observer) {
      if (enteries[0].isIntersecting) {
        footerRef.current.classList.remove("section--hidden");
        observer.unobserve(footerRef.current);
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(footerRef.current);
  }, []);
  return (
    <footer>
      <div className="container--transparent section--hidden" ref={footerRef}>
        <h2 className="heading-secondary mb-lg">Reach out to me</h2>
        <ul className="mb-lg">
          {iconArr.map((icon, i) => (
            <li key={i} className="overview__icon">
              <a href={icon.link} target="_blank" rel="noreferrer">
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className={`${style["contact-me"]} mb-lg`}>
          <h2 className="heading-tertiary mb-sm">
            Interested in working together?
          </h2>
          <br />
          <div className={`${style["footer__actions"]}`}>
            <NavLink
              to="/contact"
              className="cta mb-md"
              style={{ display: "inline-block" }}
            >
              Contact Me
            </NavLink>
            <a
              className="cta btn-secondary mb-md"
              style={{ display: "inline-block" }}
              href={resume}
              download="resume"
            >
              Download Resume
            </a>
          </div>
          <br />
        </div>
        <div className={`${style["copyright-notice"]} mb-md`}>
          <p>
            Created with ❣️ by Adil Naseem &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
