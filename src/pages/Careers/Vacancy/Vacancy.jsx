import React, { Component } from "react";
import "./vacancy.scss";
import Popup from "../../../../components/Popup/Popup.jsx";
import Page404 from "../../../pages/Page404/Page404.jsx";

class Vacancy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      vacancy: {},
      showPopup: false
    };

    this.handlePopupShowChange = this.handlePopupShowChange.bind(this);
  }

  handlePopupShowChange(mailTitle) {
    const dataPopupVacancies = this.props.dataPopupVacancies;
    dataPopupVacancies.mailTitle = mailTitle;
    this.props.onPopupShowChange(true, dataPopupVacancies);
  }
  componentDidMount() {
    var numberVacancy2 = window.location.href.indexOf("careers/");
    var x = window.location.href.slice(numberVacancy2 + 8);
    const url = `https://uma.tech/api/vacancy/${x}`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            vacancy: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, vacancy } = this.state;
    const sectionToName = {
      tasks: "Задачи",
      requirements: "Требования",
      technologies: "Технологический стэк"
    };

    if (error) {
      return <Page404 />;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <article className="page vacancies">
          <div className="post container">
            <div className="post__wrap">
              <div className="post__top">
                <h1 className="typography typography--post">
                  {vacancy.profession}
                  <br />
                  <span>{vacancy.city}</span>
                </h1>
              </div>
              <div className="post__text">
                <span
                  className="typography typography--postbasic"
                  dangerouslySetInnerHTML={{
                    __html: vacancy.description
                  }}
                ></span>
              </div>
              {Object.keys(vacancy.details)
                .filter(section => vacancy.details[section].length)
                .map(section => (
                  <div key={section}>
                    <h3 className="typography typography--postmiddle">
                      {sectionToName[section]}
                    </h3>
                    <div className="post__list">
                      <ul className="enumeration">
                        {vacancy.details[section].map((item, i) => {
                          return (
                            <li
                              key={item}
                              className={`item ${
                                i !== 2 ? "enumeration__item" : ""
                              }`}
                            >
                              <span className="typography typography--posttext">
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>

            <div className="post__bottom">
              <div className="conditions">
                <div className="conditions__item conditions__item--group">
                  <span className="typography typography--posttext">
                    Уникальные проекты и команда
                    <br /> профессионалов
                  </span>
                </div>

                <div className="conditions__item conditions__item--desc">
                  <span className="typography typography--posttext">
                    Стильный и комфортный офис
                    <br /> в историческом центре Москвы
                  </span>
                </div>

                <div className="conditions__item conditions__item--ball">
                  <span className="typography typography--posttext">
                    Активная корпоративная жизнь <br /> и широкие возможности
                    для <br /> профессионального развития
                  </span>
                </div>
                <div className="conditions__item conditions__item--paper">
                  <span className="typography typography--posttext">
                    Официальное
                    <br /> трудоустройство, ДМС
                  </span>
                </div>
              </div>
            </div>

            <div className="post__contacts">
              <div className="post__contacts-top">
                <div className="post__contacts-item">
                  <span className="typography typography--postcontacts">
                    Контакты
                  </span>
                </div>
                <div className="post__contacts-item">
                  <a
                    href="mailto:talents@uma.tech"
                    target="_blank"
                    className="typography typography--postlink"
                  >
                    talents@uma.tech
                  </a>
                </div>
              </div>
              <div
                className="post__button post__button--blue"
                onClick={() => this.handlePopupShowChange(vacancy.profession)}
              >
                Отправить резюме
              </div>
            </div>

            <div className="post__button-wrap">
              <a href="/careers" className="post__button">
                Назад к вакансиям
              </a>
            </div>
          </div>
        </article>
      );
    }
  }
}
export default Vacancy;
