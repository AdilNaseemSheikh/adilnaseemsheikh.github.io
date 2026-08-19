import React, { useEffect, useRef } from "react";
import style from "./experience.module.css";
import vsImage from "./viral.jpeg";
import gosign from "./gosign.jpeg";
import lyftyfy from "./ly-sm.jpeg";
import uos from "./uos.jpeg";
import senew from "./senew.png";

const expArr = [
  {
    position: "left",
    title: "Graduated",
    institute: "University of Sargodha",
    desc: "After studying 4 years at university of Sargodha, I graduated as a Software Engineer from univeristy of Sargodha in 2022",
    img: uos,
    link: "https://www.su.edu.pk/",
  },
  {
    position: "right",
    title: "React Developer",
    institute: "lyftyfy GmbH",
    desc: "Post-graduation, I quickly landed a job as a React Developer, dedicating 18 months to mastering the technology and enhancing my professional growth through diverse projects. My experience in this role significantly deepened my technical expertise in React.",
    img: lyftyfy,
    link: "https://www.lyftyfy.com/",
  },
  {
    position: "left",
    title: "Frontend Javascript Developer (typo3)",
    institute: "Gosign GmbH",
    desc: "At Gosign longtail Advertisement, linked to Lyftyfy's second branch, I enhanced my frontend skills by working on JavaScript projects within Typo3. This role broadened my programming knowledge and gave me insight into the fast-paced ad tech sector.",
    img: gosign,
    link: "https://www.gosign.de/",
  },
  {
    position: "right",
    title: "React JS Developer",
    institute: "Viral Square",
    desc: "Starting as a React.js developer, I grew into a Full Stack Developer, mastering Redux, Material UI, and state management with Redux Toolkit and Saga. My skill set now includes Node.js and Express.js, enabling me to create and sustain complex web applications.",
    img: vsImage,
    link: "https://viralsquare.org/",
  },
  {
    position: "left",
    title: "MERN Stack Developer",
    institute: "Senew Tech",
    desc: "Currently working as a MERN Stack Developer, I handle end-to-end development—building scalable frontends with React.js and Tailwind CSS, integrating RESTful APIs, managing authentication and authorization, and developing robust backend services using Node.js, Express, and MongoDB.",
    img: senew,
    link: "https://senewtech.com/",
  },
];

function Experience() {
  const expRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };
    function callback(enteries, observer) {
      if (enteries[0].isIntersecting) {
        expRef.current.classList.remove("section--hidden");
        observer.unobserve(expRef.current);
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(expRef.current);
  }, []);

  return (
    <div
      ref={expRef}
      id="experience"
      className="container--transparent section--hidden"
    >
      <h2 className="heading-secondary">My Experience</h2>
      <div className={style.timeline}>
        {expArr.map((item, i) => (
          <div
            key={i}
            className={`${style.timeline__tile} ${
              style[`timeline__tile--${item.position}`]
            }`}
          >
            <div className={style.content}>
              <h3 className={`${style.title} mb-sm`}>{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`${style.institute} mb-sm`}
              >
                <img src={item.img} alt="" />
                <h4 className={style.location}>{item.institute}</h4>
              </a>
              <p className={style.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
