import React from "react";
import "./competence.scss";

const Competence = ({ isMobile, dataNews }) => {
  return (
    <section className="section">
      <div className="competence">
        <div className="competence__top">
          <div className="competence__text container">
            <h2 className="typography typography--header">
              Наши уникальные компетенции
            </h2>
            <p className="typography">
              Создание высоконадежных и быстрорастущих сервисов, накопление,
              обогащение и анализ Big Data, AI & Machine Learning, разработка
              программного обеспечения для всех видов платформ, эксплуатация
              распределенной инфраструктуры, способной работать под высокими
              нагрузками – основные направления, где мы обладаем уникальными
              компетенциями на рынке.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Competence;
