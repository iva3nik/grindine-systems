import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

import s from "./Gallery.module.scss";

import customData from "../../const/flights.json";

const Gallery = () => {
  const [listFlights, setListFlights] = useState(customData.result.flights);

  console.log(listFlights[0].flight.legs[0].segments[0]);

  return (
    <section className={s.gallery}>
      {listFlights.map((flight) => (
        <div className={s.gallery__card} key={flight.flightToken}>
          <Card flight={flight.flight} />
        </div>
      ))}
      {/* <Card flight={listFlights[0].flight} /> */}
      <div className={s.gallery__button}>
        <Button type="button">Показать еще</Button>
      </div>
    </section>
  );
};

export default Gallery;
