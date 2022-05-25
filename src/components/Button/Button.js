import React from "react";

import cn from "classnames";

import s from "./Button.module.scss";

const Button = ({
  type = "button",
  children,
  border = true,
  color = false,
}) => {
  return (
    <button
      className={cn(s.button, {
        [s.button_border]: border,
        [s.button_color_red]: color,
      })}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
