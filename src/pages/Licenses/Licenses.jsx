import React from "react";
import "./licenses.scss";
import arrow_light from "../../images/arrow_light.svg";

const Licenses = ({ isMobile, dataLicenses }) => {
  function handleClick(e) {
    e.currentTarget.parentNode.previousElementSibling
      .querySelector(".props")
      .classList.toggle("active");
    e.currentTarget.classList.toggle("active");
  }
  function handleArrowClick(e) {
    const self = e.currentTarget;
    const descriptionEl = self.parentNode.previousSibling.querySelector(
      ".props"
    );
    var descriptionHeight = descriptionEl.querySelector(".props-content")
      .offsetHeight;
    if (!descriptionEl.classList.contains("active")) {
      descriptionEl.style.height = `${descriptionHeight}px`;
    } else {
      descriptionEl.style.height = "";
    }

    descriptionEl.classList.toggle("active");
    self.classList.toggle("active");
  }
  return (
    <article className="page licenses__wrap container">
      <div className="licenses__content">
        <h1 className="typography typography--header">
          <span>| </span>Лицензии
        </h1>
        <div className="license__items">
          {dataLicenses.map((item, index) => {
            return (
              <div className="license__item">
                <div className="license__item--left">
                  <h3 className="title">{item.title}</h3>
                  <div className="props">
                    <div className="props-content">
                      <div className="prop prop-1">
                        <div className="prop-title">{item.props[0].title}</div>
                        <div className="prop-data">{item.props[0].data}</div>
                      </div>
                      <div className="prop prop-2">
                        <div className="prop-title">{item.props[1].title}</div>
                        <div className="prop-data">{item.props[1].data}</div>
                      </div>
                      <div className="prop prop-3">
                        <div className="prop-title">{item.props[2].title}</div>
                        <div className="prop-data">{item.props[2].data}</div>
                      </div>
                      <div className="prop prop-4">
                        <div className="prop-title">{item.props[3].title}</div>
                        <div className="prop-data">{item.props[3].data}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="license__item--right">
                  <img
                    src={arrow_light}
                    className="arrow-light"
                    alt=""
                    onClick={handleArrowClick}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
export default Licenses;
