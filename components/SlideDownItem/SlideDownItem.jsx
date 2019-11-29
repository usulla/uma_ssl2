import React from "react";
import "./slide_down_item.scss";
import arrow_light from "../../images/arrow_light.svg";

const SlideDownItem = ({ isMobile, items }) => {
  function handleClick(e) {
    const self = e.currentTarget;
    const descriptionEl = self.parentNode.previousSibling.querySelector(
      ".slide-down__description"
    );
    var descriptionHeight = descriptionEl.querySelector(".description-content")
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
    <div className="slide-down__content">
      {items.map((item, index) => {
        return (
          <div className="slide-down__item">
            <div className="slide-down__data">
              <div className="slide-down__title">{item.title}</div>
              <div className="slide-down__description">
                <div
                  className="description-content"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
            <div className="slide-down__handle">
              <img
                src={arrow_light}
                className="arrow-light"
                alt=""
                onClick={handleClick}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SlideDownItem;
