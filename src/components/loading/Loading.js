import React from "react";
import style from "./Loading.module.css";

function Loading() {
  return (
    <div className={style.overlay}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loading;
