import React, { useEffect, useRef } from "react";
import style from "./typewriter.module.css";

function Typewriter() {
  const heading = useRef();
  useEffect(() => {
    const dynamicText = heading.current;
    const words = [
      "Adil Naseem",
      "a Software Engineer",
      "a Programmer",
      "a Software Developer",
      "a Coder",
    ];

    let wordIndex = 0;
    let charIndex = 11;
    let isDeleting = true;

    const typeEffect = function () {
      let currentWord = words[wordIndex];
      let currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        isDeleting
          ? setTimeout(typeEffect, 2100)
          : setTimeout(typeEffect, 1000);
      }
    };

    setTimeout(() => {
      typeEffect();
    }, 2000);
  }, []);

  return (
    <div className={style.outer}>
      <h1 className={style["heading-primary"]}>
        I am <span ref={heading}>Adil Naseem</span>
      </h1>
    </div>
  );
}

export default Typewriter;
