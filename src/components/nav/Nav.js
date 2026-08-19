import React from "react";
import style from "./nav.module.css";
// import sprite from "./symbol-defs.svg";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout, FcContacts } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects, GrUserExpert } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";

function Nav() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/">
            <span
              className="nav__iconnav__icon"
              style={{ marginBottom: "2px" }}
            >
              <FaHome />
            </span>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <a href="#about">
            <span className="nav__icon">
              <FcAbout />
            </span>
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span className="nav__icon nav__icon--skills">
              <GiSkills />
            </span>
            <p>Skills</p>
          </a>
        </li>
        <li>
          <a href="#experience">
            <span className="nav__icon">
              <GrUserExpert />
            </span>
            <p>Experience</p>
          </a>
        </li>
        <li>
          <a href="#projects">
            <span className="nav__icon">
              <GrProjects />
            </span>
            <p>Projects</p>
          </a>
        </li>
        <li>
          <NavLink to="/contact">
            <span className="nav__icon">
              <FcContacts />
            </span>
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
