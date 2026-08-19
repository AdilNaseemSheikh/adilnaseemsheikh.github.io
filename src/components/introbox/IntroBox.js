import React, { useEffect, useRef } from "react";
import styles from "./IntroBox.module.css";
import profile from "./profile.jpeg";

function IntroBox() {
  const introboxRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };
    function callback(enteries, observer) {
      if (enteries[0].isIntersecting) {
        introboxRef.current.classList.remove("section--hidden");
        observer.unobserve(introboxRef.current);
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(introboxRef.current);
  }, []);

  return (
    <div ref={introboxRef} className='container section--hidden' id='about'>
      <h3 className='heading-secondary mb-md'>About Me</h3>
      <figure className={styles.introbox}>
        <div className={styles.introbox__image}>
          <img src={profile} alt='profile' />
          <figcaption>Adil Naseem</figcaption>
        </div>
        <div>
          <blockquote>
            <h2 className="mb-md">Hello World 👋</h2>
            <p className='mb-md'>
              I'm Adil Naseem, a passionate software engineer from Pakistan, focused on Frontend and Full Stack web development. I specialize in
              JavaScript, React, and have hands-on experience with Next.js for building modern, high-performance web apps. Alongside frontend work,
              I’ve also developed backend systems using Node.js and Express.
            </p>
            <p className='mb-md'>
              Since graduating from Sargodha University in 2022, I’ve been sharpening my skills and growing professionally. Over the past two years,
              I’ve built responsive and user-friendly web interfaces, integrated APIs, and taken on full-stack tasks to deliver complete web
              solutions.
            </p>
            <p className='sm-hidden'>
              I love learning and improving, and I’ve completed advanced courses on JavaScript, Sass, React, and Node.js through platforms like Udemy.
              This portfolio showcases the projects I’ve built and the journey I’m on in the world of code.
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
}

export default IntroBox;
