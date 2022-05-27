import React from "react";

import logo_lot from "../../assets/img/logo_lot.png";

import Button from "../Button/Button";

import s from "./Card.module.scss";

const Card = ({ flight }) => {
  console.log(flight);

  const options = {
    day: "numeric",
    month: "short",
    weekday: "short",
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
  };

  const getTime = (str) => {
    const date = new Date(str);
    return date.toLocaleString("ru", optionsTime);
  };

  const getDate = (str) => {
    const date = new Date(str);
    return date.toLocaleString("ru", options);
  };

  const getDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours} ч ${minutes} мин`;
  };

  const getEndings = (number) => {
    if (
      number === 0 ||
      number === 5 ||
      number % 10 === 0 ||
      number % 10 === 5
    ) {
      return number + " пересадок";
    } else if (number === 1 || number % 10 === 1) {
      return number + " пересадка";
    } else {
      return number + " пересадки";
    }
  };

  return (
    <section className={s.card}>
      <div className={s.card__header}>
        {/* <img className={s.card__logo} src={logo_lot} alt="logo lot" /> */}
        <p>{flight.carrier.caption}</p>
        <div className={s.card__column}>
          <p className={s.card__price}>{flight.price.total.amount} ₽</p>
          <p className={s.card__note}>
            Стоимость для одного взрослого пассажира
          </p>
        </div>
      </div>
      <div className={s.card__content}>
        <div className={s.info}>
          <div className={s.info__header}>
            <p className={s.info__destination}>
              {flight.legs[0].segments[0].departureCity.caption},{" "}
              {flight.legs[0].segments[0].departureAirport.caption}
              <span>
                ({flight.legs[0].segments[0].departureAirport.uid}) &rarr;
              </span>
            </p>
            <p className={s.info__destination}>
              {flight.legs[0].segments[0].arrivalAirport.caption},{" "}
              {flight.legs[0].segments[0].arrivalCity.caption}
              <span>({flight.legs[0].segments[0].arrivalAirport.uid})</span>
            </p>
          </div>
          <div className={s.info__line}>
            <p>
              {getTime(flight.legs[0].segments[0].departureDate)}{" "}
              <span>{getDate(flight.legs[0].segments[0].departureDate)}</span>
            </p>
            <p>{getDuration(flight.legs[0].segments[0].travelDuration)}</p>
            <p>
              <span>{getDate(flight.legs[0].segments[0].arrivalDate)}</span>{" "}
              {getTime(flight.legs[0].segments[0].arrivalDate)}
            </p>
          </div>
          <div className={s.info__stripe}>
            <hr />
            <p>{getEndings(flight.legs[0].segments[0].stops)}</p>
            <hr />
          </div>
          <h3 className={s.info__company}>
            Рейс выполняет: {flight.carrier.caption}
          </h3>
          <hr className={s.info__swath} />
          <div className={s.info__header}>
            <p className={s.info__destination}>
              {flight.legs[0].segments[0].departureCity.caption},{" "}
              {flight.legs[0].segments[0].departureAirport.caption}
              <span>
                ({flight.legs[0].segments[0].departureAirport.uid}) &rarr;
              </span>
            </p>
            <p className={s.info__destination}>
              {flight.legs[0].segments[0].arrivalAirport.caption},{" "}
              {flight.legs[0].segments[0].arrivalCity.caption}
              <span>({flight.legs[0].segments[0].arrivalAirport.uid})</span>
            </p>
          </div>
          <div className={s.info__line}>
            <p>
              {getTime(flight.legs[0].segments[0].departureDate)}{" "}
              <span>{getDate(flight.legs[0].segments[0].departureDate)}</span>
            </p>
            <p>{getDuration(flight.legs[0].segments[0].travelDuration)}</p>
            <p>
              <span>{getDate(flight.legs[0].segments[0].arrivalDate)}</span>{" "}
              {getTime(flight.legs[0].segments[0].arrivalDate)}
            </p>
          </div>
          <div className={s.info__stripe}>
            <hr />
            <p>{getEndings(flight.legs[0].segments[0].stops)}</p>
            <hr />
          </div>
          <h3 className={s.info__company}>
            Рейс выполняет: {flight.carrier.caption}
          </h3>
        </div>
      </div>
      <Button color={true} border={false}>
        Выбрать
      </Button>
    </section>
  );
};

export default Card;
