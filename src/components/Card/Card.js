import React from "react";

import logo_lot from "../../assets/img/logo_lot.png";

import Button from "../Button/Button";

import s from "./Card.module.scss";

const Card = () => {
  return (
    <section className={s.card}>
      <div className={s.card__header}>
        <img className={s.card__logo} src={logo_lot} alt="logo lot" />
        <div className={s.card__column}>
          <p className={s.card__price}>21049 ₽</p>
          <p className={s.card__note}>
            Стоимость для одного взрослого пассажира
          </p>
        </div>
      </div>
      <div className={s.card__content}>
        <div className={s.info}>
          <div className={s.info__header}>
            <p className={s.info__destination}>
              Москва, Шереметьево<span>(SVO) &rarr;</span>
            </p>
            <p className={s.info__destination}>
              ЛОНДОН, Лондон, Зитроу<span>(LHR)</span>
            </p>
          </div>
          <div className={s.info__line}>
            <p>
              20:40 <span>18.авг вт</span>
            </p>
            <p>14 ч 45 мин</p>
            <p>
              <span>19 авг. ср</span> 09:25
            </p>
          </div>
          <div className={s.info__stripe}>
            <hr />
            <p>1 пересадка</p>
            <hr />
          </div>
          <h3 className={s.info__company}>
            Рейс выполняет: LOT Polish Airlines
          </h3>
          <hr className={s.info__swath} />
          <div className={s.info__header}>
            <p className={s.info__destination}>
              Москва, Шереметьево<span>(SVO) &rarr;</span>
            </p>
            <p className={s.info__destination}>ЛОНДОН, Лондон, Зитроу(LHR)</p>
          </div>
          <div className={s.info__line}>
            <p>
              20:40 <span>18.авг вт</span>
            </p>
            <p>14 ч 45 мин</p>
            <p>
              <span>19 авг. ср</span> 09:25
            </p>
          </div>
          <div className={s.info__stripe}>
            <hr />
            <p>1 пересадка</p>
            <hr />
          </div>
          <h3 className={s.info__company}>
            Рейс выполняет: LOT Polish Airlines
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
