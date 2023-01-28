import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./index.module.scss";
const Navigation = () => {
  const [active, setActive] = useState({
    list: s.disabled,
    isOpen: s.none,
  });
  const burgerToggle = () => {
    if (active.list == s.disabled) {
      setActive({ ...active, list: s.list, isOpen: s.open });
    } else {
      setActive({ ...active, list: s.disabled, isOpen: s.none });
    }
  };
  return (
    <div className={s.root}>
      <div
        className={
          s.burger +
          "  " +
          s.burger_arrow +
          " " +
          s.burger_down +
          " " +
          active.isOpen
        }
        onClick={() => burgerToggle()}
      >
        <div className={s.burger_lines}></div>
      </div>
      <ul className={active.list}>
        <li>
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/tasks"}>Schedule</NavLink>
        </li>
        <li>
          <NavLink to={"/boards"}>My Boards</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
