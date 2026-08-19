import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const list = [
  `I am a proficient and comprehensive MERN Stack developer 💫.`,
  `I use Redux frequently to manage state in complex applications 🚀.`,
  `Equipped with React Query, I have been tackling server-state management issues head on 🌟.`,
  `Managing and optimizing navigation in all my React applications has become second nature thanks to my expertise in React Router 😎.`,
  `Fluent in Material-UI, I design visually appealing and responsive user interfaces with a consistent look and feel 🎨.`,
  `Beyond being proficient in React JS, my expertise includes Node JS, Express JS, MongoDB and Mongoose skills 🛠️.`,
  `I’ve also worked with Next.js, building SEO-friendly and performance-optimized web apps ⚡.`,
];
const skills = [
  { title: "React JS" },
  { title: "Next JS" },
  { title: "Redux" },
  { title: "REST APIs" },
  { title: "Context Api", class: "sm-hidden" },
  { title: "Tanstack Query", class: "sm-hidden" },
  { title: "Custom Hooks", class: "sm-hidden" },
  { title: "JavaScript" },
  { title: "ES6+" },
  { title: "Async Programming", class: "sm-hidden" },
  { title: "Tailwind css" },
  { title: "Sass" },
  { title: "CSS Modules" },
  { title: "Styled Components", class: "sm-hidden" },
  { title: "Thunks" },
  { title: "React Router", class: "sm-hidden" },
  { title: "Vite" },
  { title: "Firebase" },
  { title: "Supabase" },
  { title: "Github" },
  { title: "Node JS" },
  { title: "Express JS" },
  { title: "Mongoose" },
  { title: "MongoDB" },
  { title: "Material UI", class: "sm-hidden" },
  { title: "Redux Saga" },
  { title: "Stripe" },
  { title: "Node Mailer", class: "sm-hidden" },
  { title: "Sockets.io" },
  { title: "Pug Templates", class: "sm-hidden" },
];

function Skills() {
  const skillsboxRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };
    function callback(enteries, observer) {
      if (enteries[0].isIntersecting) {
        skillsboxRef.current.classList.remove("section--hidden");
        observer.unobserve(skillsboxRef.current);
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(skillsboxRef.current);
  }, []);
  return (
    <div ref={skillsboxRef} id='skills' className='container section--hidden'>
      <h2 className='heading-secondary mb-md'>Skills Overview</h2>
      <div className={styles.skillbox}>
        <div className={styles.skillbox__content}>
          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillbox__keywords}>
          {skills.map((skill, i) => (
            <div key={i} className={`${styles.skillsbox__item} ${skill.class ? skill.class : ""}`}>
              <span className={styles.circle}></span> <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
