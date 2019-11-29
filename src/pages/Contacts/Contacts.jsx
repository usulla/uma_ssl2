import React from "react";
import "./contacts.scss";

const Contacts = ({ isMobile }) => {
  return (
    <article className="page contacts__wrap container_big">
      <div className="contacts__content">
        <h1 className="typography typography--header container">
          <span>| </span>Контакты
        </h1>
        <div className="contacts__items">
          <div className="contacts__item--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.424613531884!2d37.59128301617445!3d55.76849689824864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a39610985a7%3A0x4dfe0610d883ff91!2z0JHQvtC70YzRiNCw0Y8g0KHQsNC00L7QstCw0Y8g0YPQuy4sIDUsINCc0L7RgdC60LLQsCwgMTI1MDQ3!5e0!3m2!1sru!2sru!4v1570705245467!5m2!1sru!2sru"
              width={!isMobile ? "140%" : "100%"}
              height={!isMobile ? "100%" : "150%"}
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="contacts__item--grayblock">
            <div className="contacts__item--data">
              <div className="contacts__data-row">
                <p>Адрес</p>
                <p>Большая Садовая ул., 5, Москва, 123001</p>
              </div>
              <div className="contacts__data-row">
                <p>Телефон</p>
                <p>+7 (495) 357-33-01</p>
              </div>
              <div className="contacts__data-row">
                <p>Общая информация</p>
                <p>info@uma.tech</p>
              </div>
              <div className="contacts__data-row">
                <p>Вопросы трудоустройства</p>
                <p>talents@uma.tech</p>
              </div>
              <div className="contacts__data-row contact-us">
                <p>Свяжитесь с нами </p>
                <p>Оставьте сообщение в форме и мы Вам обязательно ответим.</p>
              </div>
              <a
                className="button button-mail"
                href="mailto:info@uma.tech?subject=Uma.Tech"
                target="_blank"
              >
                Написать
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Contacts;
