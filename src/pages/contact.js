import React, { useRef, useState } from "react";
import style from "./contact.module.css";
import emailjs from "emailjs-com";
import Modal from "../components/modal/modal";
import Loading from "../components/loading/Loading";

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    let errors = {};
    e.preventDefault();

    if (!name) {
      errors.name = "This field is required";
    }

    if (!email) {
      errors.email = "This field is required";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Please Enter a valid email address";
    }

    setError((err) => ({ ...err, ...errors }));

    if (errors.email || errors.name) {
      return;
    }
    // dummy Promise
    
    // function yes() {
    //   console.log("yes");
    // }
    // function no() {
    //   console.log("no");
    // }
    // const prom = new Promise((yes, no) => {
    //   if (true)
    //     setTimeout(() => {
    //       yes();
    //     }, 1000);
    // });
    // setIsLoading(true);
    // prom.then((res) => {
    //   setIsLoading(false);
    //   setModal(true);
    // });

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_kbwjws8",
        "template_2anka1l",
        form.current,
        "user_XE55ndEbi2T7IVofF1zN8"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setModal(true);
        },
        (error) => {
          alert("Something went wrong :( Please Try again later");
        }
      );
  };

  return (
    <div className="container--transparent">
      {isLoading && <Loading />}
      {modal && <Modal />}
      <form ref={form} className={style.form} action="#" method="POST">
        <div className={style.contact__form}>
          <h2 className="heading-secondary">Contact Me</h2>
          <div className={style.input}>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError((err) => ({ ...err, name: "" }));
              }}
              type="text"
              placeholder="Full Name"
              name="user_name"
            />
            {error.name && <p className={style.error}>{error.name}</p>}
          </div>
          <div className={style.input}>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError((err) => ({ ...err, email: "" }));
              }}
              type="email"
              placeholder="Email Address"
              name="user_email"
            />
            {error.email && <p className={style.error}>{error.email}</p>}
          </div>
          <div className={style.input}>
            <textarea
              name="message"
              className={style.message}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="cta" type="submit" onClick={sendEmail}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
