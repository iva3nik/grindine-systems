import React from "react";

import Checkbox from "../Checkbox/Checkbox";

import { listCheckboxes } from "./const";

import s from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      {listCheckboxes &&
        listCheckboxes.map((checkbox) => (
          <div className={s.sidebar__point} key={checkbox.id}>
            <Checkbox checkbox={checkbox} />
          </div>
        ))}
    </aside>
  );
};

export default Sidebar;
