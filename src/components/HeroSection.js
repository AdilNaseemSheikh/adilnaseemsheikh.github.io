import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
// import sprite from "./symbol-defs.svg";
import Typewriter from "./typewriter/Typewriter";
import { SiExpress, SiMongodb, SiReactrouter, SiRedux, SiTailwindcss, SiJavascript, SiMui, SiAntdesign, SiNextdotjs } from "react-icons/si";

import { GrReactjs } from "react-icons/gr";
import { FaGithub, FaNodeJs } from "react-icons/fa";

import { DiSass } from "react-icons/di";

function HeroSection() {
  useEffect(() => {
    const floatingClass = styles["floating-box"];
    const parallax = function (e) {
      document.querySelectorAll(`.${floatingClass}`).forEach((layer, i) => {
        const speed = layer.getAttribute("data-speed");

        const x = ((e.pageX - window.innerWidth / 2) * speed) / 100;
        const y = ((e.pageY - window.innerHeight / 2) * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    const header = document.querySelector("#header");
    const nav = document.querySelector("nav");
    [header, nav].forEach((el) => el.addEventListener("mousemove", parallax));
  }, []);

  return (
    <section className={styles.hero} id='header'>
      <Typewriter />
      <div data-speed='25' className={`${styles["floating-box"]} ${styles["floating-box-01"]} ${styles["floating-box--primary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiRedux color='#764abc' />
        </div>
      </div>
      <div data-speed='25' className={`${styles["floating-box"]} ${styles["floating-box-02"]} ${styles["floating-box--primary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiTailwindcss color='#38b2ac' />
        </div>
      </div>
      <div data-speed='15' className={`${styles["floating-box"]} ${styles["floating-box-03"]} ${styles["floating-box--secondary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiReactrouter color='#ca4245' />
        </div>
      </div>
      <div data-speed='25' className={`${styles["floating-box"]} ${styles["floating-box-04"]} ${styles["floating-box--primary"]}`}>
        <div className={styles["overview__icon"]}>
          <FaNodeJs color='#82ce29' />
        </div>
      </div>
      <div data-speed='10' className={`${styles["floating-box"]} ${styles["floating-box-05"]} ${styles["floating-box--outlined"]}`}></div>
      <div data-speed='10' className={`${styles["floating-box"]} ${styles["floating-box-06"]} ${styles["floating-box--outlined"]}`}></div>
      <div data-speed='25' className={`${styles["floating-box"]} ${styles["floating-box-07"]} ${styles["floating-box--primary"]}`}>
        <div className={styles["overview__icon"]}>
          <GrReactjs color='#06d7f4' />
        </div>
      </div>
      <div data-speed='15' className={`${styles["floating-box"]} ${styles["floating-box-08"]} ${styles["floating-box--secondary"]}`}>
        <div className={styles["overview__icon"]} style={{ fill: "#e6edf3" }}>
          <FaGithub />
        </div>
      </div>
      <div data-speed='15' className={`${styles["floating-box"]} ${styles["floating-box-09"]} ${styles["floating-box--secondary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiExpress />
        </div>
      </div>
      <div data-speed='15' className={`${styles["floating-box"]} floating-box-3 ${styles["floating-box-10"]} ${styles["floating-box--secondary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiMongodb color='#53b341' />
        </div>
      </div>
      <div data-speed='15' className={`${styles["floating-box"]} ${styles["floating-box-11"]} ${styles["floating-box--secondary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiMui color='#007bf7' />
        </div>
      </div>
      <div data-speed='15' className={`${styles["floating-box"]} ${styles["floating-box-12"]} ${styles["floating-box--secondary"]}`}>
        <div className={styles["overview__icon"]}>
          <SiJavascript color='#f7df1e' />
        </div>
      </div>
      <div data-speed='25' className={`${styles["floating-box"]} ${styles["floating-box-13"]} ${styles["floating-box--primary"]}`}>
        <div className={styles["overview__icon"]}>
          <DiSass color='#cc6699' />
        </div>
      </div>
      <div data-speed='10' className={`${styles["floating-box"]} ${styles["floating-box-14"]} ${styles["floating-box--outlined"]} sm-hidden`}></div>
      <div data-speed='10' className={`${styles["floating-box"]} ${styles["floating-box-15"]} ${styles["floating-box--outlined"]}`}></div>
      <div data-speed='10' className={`${styles["floating-box"]} ${styles["floating-box-16"]} ${styles["floating-box--outlined"]}`}></div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-17"]} ${styles["floating-box--empty"]}`}></div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-18"]} ${styles["floating-box--empty"]} sm-hidden`}></div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-19"]} ${styles["floating-box--empty"]} sm-hidden`}>
        <SiAntdesign size='120' color='#f19199' />
      </div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-20"]} ${styles["floating-box--empty"]} sm-hidden`}></div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-21"]} ${styles["floating-box--primary"]}`}>
        <div className={styles["overview__icon"]} style={{  }}>
          <SiNextdotjs />
        </div>
      </div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-22"]} ${styles["floating-box--empty"]}`}></div>

      <div data-speed='12' className={`${styles["floating-box"]} ${styles["floating-box-23"]} ${styles["floating-box--empty"]} sm-hidden`}></div>
    </section>
  );
}

export default HeroSection;
