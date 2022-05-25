import React from "react";

import s from "./Button.module.scss";

const Button = ({ type, children }) => {
  return (
    <button className={s.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
