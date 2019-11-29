import React from "react";
import { Parallax, Background } from "react-parallax";
import "./news.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 600,
  autoplaySpeed: 10000,
  dotsClass: "pagination pagination2"
};
const News = ({ isMobile, dataNews }) => {
  if (!isMobile) {
    return (
      <section className="section">
        <Parallax strength={1500}>
          <Background className="custom-bg">
            <img src="/images/bg/bg4.jpg" />
            
          </Background>
          <div className="news__top">
            <div className="news__text container">
              <h2 className="typography typography--header">Новости</h2>
            </div>
          </div>

          <div className="news__wrap container">
            <div className="news__content">
              {dataNews.map((item, index) => {
                return (
                  <div className="news__item" key={index}>
                    <p className="hashtag">
                      <b>{item.hashtag}</b>
                    </p>
                    <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.text
                      }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
  return (
    <section className="section news">
      <div className="news__top">
        <div className="news__text container">
          <h2 className="typography typography--header">Новости</h2>
        </div>
      </div>
      <div className="news__wrap">
        <Slider {...settings} className="news__content">
          {dataNews.map((item, index) => {
            return (
              <div className="news__item" key={index}>
                <p className="hashtag">
                  <b>{item.hashtag}</b>
                </p>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.text
                  }}
                ></p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
export default News;
