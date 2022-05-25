import React from "react";

import Button from "../Button/Button";

import s from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <div className={s.gallery__button}>
        <Button type="button">Показать еще</Button>
      </div>
    </section>
  );
};

export default Gallery;
