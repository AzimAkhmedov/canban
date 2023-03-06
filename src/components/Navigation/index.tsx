import { log } from "console";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./index.module.scss";
const Navigation = () => {
  const [active, setActive] = useState<boolean>(false);
  const burgerToggle = () => {
    setActive(!active);
  };
  return (
    <div className={s.root}>
      <div className={s.sidebar + " " + (active ? s.active : s.disabled)}>
        <ul>
          <li>
            <NavLink to={"/schedule"}>Schedule</NavLink>
          </li>
          <li>
            <NavLink to={"/board"}></NavLink>
          </li>
          <li>
            <NavLink to={""}></NavLink>
          </li>
        </ul>
      </div>
      <button className={s.burger} onClick={burgerToggle}></button>
    </div>
  );
};

export default Navigation;
