import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./careers.scss";
import VacancyList from "./VacancyList/VacancyList.jsx";

const Careers = ({ dataVacancy }) => {
  return (
    <article className="page vacancies">
      <div className="vacancies__content container">
        <h1 className="typography typography--header typography--vacancies">
          <span>| </span>Вакансии
        </h1>
        <div className="vacancies__text">
          Uma.Tech всегда находится в&nbsp;поиске талантливых
          и&nbsp;целеустремленных сотрудников, которые станут членами дружной
          команды и&nbsp;большой IT-семьи, в&nbsp;которой мы&nbsp;вместе сможем
          развивать наше общее дело. Мы&nbsp;верим в&nbsp;людей и&nbsp;считаем
          каждого важной частью&nbsp;команды. Мы&nbsp;ищем лучших кандидатов
          на&nbsp;открытые позиции, которые вы&nbsp;можете&nbsp;увидеть ниже.
        </div>
      </div>
      <div className="vacancies__items bg bg-vacancies">
        <div className="container">
          <p className="typography typography--list">Условия</p>
          <ul className="list">
            <li className="list__item list__item--group">
              Уникальные проекты и команда
              <br />
              профессионалов
            </li>
            <li className="list__item list__item--desc">
              Стильный и комфортный офис
              <br />в историческом центре Москвы
            </li>
            <li className="list__item list__item--ball">
              Активная корпоративная жизнь и широкие
              <br /> возможности для профессионального развития
            </li>
            <li className="list__item list__item--paper">
              Официальное трудоустройство, ДМС
            </li>
          </ul>
        </div>
        <div className="vacancies__img">
          <img src="/images/bg/bg_vacancies_mob_4.png" alt="bg" />
        </div>
      </div>
      <VacancyList title="Все наши вакансии" />
    </article>
  );
};

export default Careers;
