import React from "react";

import cn from "classnames";

import s from "./Checkbox.module.scss";

const Checkbox = ({ checkbox }) => {
  return (
    <div className={s.checkbox}>
      <h2 className={s.checkbox__title}>{checkbox.title}</h2>
      {checkbox.inputs.map((input, index) => (
        <div
          className={cn(s.checkbox__content, {
            [s.checkbox__content_reverse]: checkbox.type === "number",
          })}
          key={`${checkbox.id}-${index + 1}`}
        >
          <input
            className={s.checkbox__input}
            type={checkbox.type}
            id={`${checkbox.id}-${index + 1}`}
            name={checkbox.name}
            value={input.value}
            placeholder={checkbox.type === "number" ? input.point : null}
          />
          <label
            className={s.checkbox__text}
            htmlFor={`${checkbox.id}-${index + 1}`}
          >
            {checkbox.type === "number" ? input.label : input.point}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
