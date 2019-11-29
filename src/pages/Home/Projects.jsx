import React, { Component } from "react";
import "./projects.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../images/arrow.svg";
import project_1_hover from "../../images/logos/logo-1_hover.png";
import project_2_hover from "../../images/logos/logo-2_hover.png";
import project_3_hover from "../../images/logos/logo-3_hover.png";
import project_4_hover from "../../images/logos/logo-4_hover.png";
import project_5_hover from "../../images/logos/logo-5_hover.png";
import project_6_hover from "../../images/logos/logo-6_hover.png";
import project_7_hover from "../../images/logos/logo-7_hover_2.png";
// import project_8_hover from "../../images/logos/logo-8_hover.png";
import project_9_hover from "../../images/logos/logo-9_hover.png";
import project_10_hover from "../../images/logos/logo-10_hover.png";
import project_11_hover from "../../images/logos/logo-11_hover_2.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className="next-slick slick-arrow" src={arrow} onClick={onClick} />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className="prev-slick slick-arrow" src={arrow} onClick={onClick} />
  );
}
class Projects extends Component {
  constructor(props) {
    super();
  }
  render() {
    var settings = {
      arrows: true,
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1200,
      arrowsClass: "pagination pagination2",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <section className="section">
          <div className="project">
            <div className="project__header container">
              {!this.props.isMobile ? (
                <span>
                  На нашей инфраструктуре и технической платформе <br />
                  работают такие проекты как:
                </span>
              ) : (
                <span>
                  На нашей инфраструктуре и технической платформе работают такие проекты как:
                </span>
              )}
            </div>
            <div className="project__cont">
              {!this.props.isMobile ? (
                <div className="project__logos">
                  <a
                    className="logo-item"
                    href="http://tnt-online.ru/"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-1_hover.png' alt="" className="tnt hide" />
                  </a>
                  <a
                    className="logo-item"
                    href="https://tv3.ru"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-2_hover.png' alt="" className="tv3 hide" />
                  </a>
                  <a
                    className="logo-item"
                    href="https://friday.ru/"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-3_hover.png'} alt="" className="pyatnica hide" />
                  </a>
                  <a
                    className="logo-item"
                    href="https://2x2tv.ru"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-4_hover.png' alt="" className="dvax2 hide" />
                  </a>
                  <a
                    className="logo-item"
                    href="https://tnt4.ru"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-5_hover.png' alt="" className="tnt4 hide" />
                  </a>
                  <a
                    className="logo-item"
                    href="https://superkanal.ru/"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-6_hover.png' alt="" className="super hide" />
                  </a>
                  <a
                    className="logo-item"
                    href="https://matchtv.ru/"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-7_hover.png' alt="" className="match hide" />
                  </a>
                  {/* <a
                    className="logo-item"
                    href="https://premier.one/"
                    target="_blank"
                  >
                    <img src={project_8_hover} alt="" className="premier hide" />
                  </a> */}
                  <a
                    className="logo-item"
                    href="https://match-club.ru/download"
                    target="_blank"
                  >
                    <img
                      src='/images/logos/logo-11_hover.png'
                      alt=""
                      className="match_club hide"
                    />
                  </a>
                  <a
                    className="logo-item"
                    href="https://matchpremier.ru/"
                    target="_blank"
                  >
                    <img
                      src='/images/logos/logo-9_hover.png'
                      alt=""
                      className="match_premier hide"
                    />
                  </a>
                  <a
                    className="logo-item"
                    href="https://news.sportbox.ru"
                    target="_blank"
                  >
                    <img src='/images/logos/logo-10_hover.png' alt="" className="sportbox hide" />
                  </a>
                </div>
              ) : (
                <Slider {...settings} className="carousel-logo">
                  <a href="http://tnt-online.ru/" target="_blank">
                    <img src='/images/logos/logo-1_hover.png' alt="" />
                  </a>
                  <a href="https://tv3.ru" target="_blank">
                    <img src='/images/logos/logo-2_hover.png' alt="" />
                  </a>
                  <a href="https://friday.ru/" target="_blank">
                    <img src='/images/logos/logo-3_hover.png' alt="" />
                  </a>
                  <a href="https://2x2tv.ru" target="_blank">
                    <img src='/images/logos/logo-4_hover.png' alt="" />
                  </a>
                  <a href="https://tnt4.ru" target="_blank">
                    {" "}
                    <img src='/images/logos/logo-5_hover.png' alt="" />
                  </a>
                  <a href="https://superkanal.ru/" target="_blank">
                    <img src='/images/logos/logo-6_hover.png' alt="" />
                  </a>
                  <a href="https://matchtv.ru/" target="_blank">
                    <img src='/images/logos/logo-7_hover.png' alt="" />
                  </a>
                  {/* <a href="ttps://premier.one/" target="_blank">
                    <img src={project_8_hover} alt="" />
                  </a> */}
                  <a href="https://match-club.ru/download" target="_blank">
                    <img src='/images/logos/logo-11_hover.png' alt="" />
                  </a>
                  <a href="https://matchpremier.ru/" target="_blank">
                    <img src='/images/logos/logo-9_hover.png' alt="" />
                  </a>
                  <a href="https://news.sportbox.ru" target="_blank">
                    <img src='/images/logos/logo-10_hover.png' alt="" />
                  </a>
                </Slider>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
