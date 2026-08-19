import React from "react";
import style from "./modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h3>Thank you for showing interest</h3>
        <p>
          I've received your message and will get back to you within 24 hours
        </p>
        <button
          className="cta btn-secondary"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default Modal;
