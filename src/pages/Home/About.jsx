import React, { Component } from "react";
import "./about.scss";
import "./pagination.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = ({ slider_list }) => {
  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 600,
    autoplaySpeed: 10000,
    dotsClass: "pagination"
  };
  return (
    <section className="section">
      <div className="about container_big">
        <div className="about__image">
          <img src="/images/group.jpg" alt="Uma.Tech" />
        </div>
        <div className="about__right">
          <div className="about__header">
            <h1 className="typography typography--header">
              <span>| </span>О нас
            </h1>
          </div>
          <Slider {...settings} className="about__text">
            {slider_list.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className="typography typography--headersm">
                    {item.title}
                  </h3>
                  <p className="typography typography--text">{item.text}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;
