import React, { useEffect, useRef, useState } from "react";
import styles from "./projects.module.css";
import easycoach from "./img/ecc.png";
import commonplace from "./img/cp.png";
import sieck from "./img/sieck.png";
import review from "./img/dashboard.png";
import peasomy from "./img/peasomy.png";
import cardcafe from "./img/cardcafe.png";
import enterai from "./img/enterai.png";
import total from "./img/total.png";
import stranger from "./img/stranger.png";
import wild from "./img/wild.png";
import start from "./img/start.png";
import terp from "./img/terp.png";

const projectsArr = [
  {
    img: peasomy,
    title: "Peasomy",
    keywords: ["React.js", "Leaflet", "Node.js", "Express.js", "Node Mailer", "Stripe", "MongoDB"],
    demo: "https://pf.workbrink.com/",
    code: null,
    position: "center",
  },
  {
    img: stranger,
    title: "Stranger Space",
    keywords: ["React.js", "Firebase", "Chat application", "realtime DB", "Firestore"],
    demo: "https://strangerspace.com/",
    code: null,
    position: "left",
  },
  {
    img: total,
    title: "Total Studios",
    keywords: ["React.js", "Swiper.js", "Multi Slider Controllers", "Node.js", "Node Mailer"],
    demo: "https://totalstudios.com/",
    code: null,
    position: "left",
  },
  {
    img: commonplace,
    title: "Commons Place",
    keywords: ["Redux Toolkit", "Ant design", "React Hook Form", "Payment Gateway", "Class based components"],
    demo: "https://commonsplace.de/",
    code: null,
    position: "left",
  },
  {
    img: easycoach,
    title: "Easy Coach Club",
    keywords: ["React.js", "Redux SAGA", "MUI", "Ant Design", "Recharts"],
    code: null,
    demo: "https://puebla.easycoach.club/",
    position: "left",
  },

  {
    img: start,
    title: "Thera Start",
    keywords: ["Next.js", "Tailwind", "Node.js", "Stripe", "App Router", "Multi step Form"],
    demo: "https://stf.workbrink.com/",
    code: null,
    position: "left",
  },

  {
    img: terp,
    title: "Terpwatch",
    keywords: ["React.js", "Tailwind", "Node", "Stripe", "Redux Toolkit"],
    demo: "https://terpwatch.com/",
    code: null,
    position: "left",
  },
  {
    img: cardcafe,
    title: "Card Cafe",
    keywords: ["React.js", "React Router", "Tanstack Query", "Recharts", "Supabase", "Styled Components"],
    demo: "https://www.cardcafe.com/",
    position: "center",
  },

  {
    img: enterai,
    title: "Enter AI",
    keywords: ["React.js", "Tailwind", "ChatGPT", "IFrame", "Web Sockets"],
    demo: "https://www.enter-ai.de/",
    code: null,
    position: "left",
  },

  {
    img: review,
    title: "Review Tool",
    keywords: ["JavaScript", "Intersection Observer API", "Event Delegation", "Ace Editor", "Google Reviews"],
    demo: "https://dashboard.gosign.de/review/",
    code: null,
    position: "left",
  },
  {
    img: sieck,
    title: "Sieck",
    keywords: ["JavaScript", "SASS", "Fetch API", "OOP", "DOM Manipulation"],
    demo: "https://www.sieck-diekueche.de/",
    code: null,
    position: "left",
  },
  {
    img: wild,
    title: "The Wild Oasis",
    keywords: ["Next.js", "Tailwind", "Next Auth", "App Router"],
    demo: "https://the-wild-oasis-website.vercel.app/",
    code: null,
    position: "left",
  },
];

function Projects() {
  const [currentCount, setCurrentCount] = useState(6);

  const projectsRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };
    function callback(enteries, observer) {
      if (enteries[0].isIntersecting) {
        projectsRef.current.classList.remove("section--hidden");
        observer.unobserve(projectsRef.current);
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(projectsRef.current);
  }, []);

  return (
    <div ref={projectsRef} id='projects' className={"container--bg section--hidden"}>
      <h2 className={"heading-secondary mb-md"}>My Projects</h2>
      <div className={styles.projects}>
        {projectsArr.slice(0, currentCount).map((item, i) => (
          <div key={i} className={styles.project__card}>
            <figure>
              <div className={styles.project__image}>
                <img src={item.img} alt='' />
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
            <hr />
            <div className={styles.project__keywords}>
              {item.keywords.map((key, i) => (
                <span key={i}>{key}</span>
              ))}
            </div>
            <hr />
            <div className={styles.actions}>
              <a className='btn-sm' href={item.demo} rel='noreferrer' target='_blank'>
                Live Demo
              </a>
              <a className='btn-sm' href={item.code} style={{ cursor: item.code ? "pointer" : "not-allowed" }} rel='noreferrer' target='_blank'>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {currentCount < projectsArr.length && (
        <div className={`${styles["button--view-more"]}`}>
          <button className={`cta btn-secondary`} onClick={() => setCurrentCount((prev) => prev + 3)}>
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
