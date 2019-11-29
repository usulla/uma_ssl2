import React from "react";
import SlideDownItem from "../../components/SlideDownItem/SlideDownItem.jsx";
import "./competencies.scss";

const Competencies = ({ isMobile, dataCompetencies }) => {
  var item1 = {
    title: dataCompetencies[2].item_2,
    description: dataCompetencies[2].item_1.concat(dataCompetencies[2].item_3)
  };
  return (
    <article className="page competences__wrap">
      <div className="competences__content">
        <h1 className="typography typography--header container">
          <span>| </span>Компетенции
        </h1>

        <div className="competences__items">
          {/* 1 */}
          <div
            id="highload"
            className="competences__item container competences__item-1 competences__item--white"
          >
            <h2>{dataCompetencies[0].title1}</h2>
            <div className="competences__item--content">
              <div className="competences__item--left">
                <h3>{dataCompetencies[0].title2}</h3>
                <p>{dataCompetencies[0].item_1}</p>
              </div>
              {!isMobile && (
                <div className="competences__item--right">
                  <p>
                    <span className="title">
                      {dataCompetencies[0].item_2.title}
                    </span>
                    <span>{dataCompetencies[0].item_2.description}</span>
                  </p>
                  <p>
                    <span className="title">
                      {dataCompetencies[0].item_3.title}
                    </span>
                    {dataCompetencies[0].item_3.description}
                  </p>
                </div>
              )}
              {isMobile && (
                <SlideDownItem
                  items={[
                    dataCompetencies[0].item_2,
                    dataCompetencies[0].item_3
                  ]}
                />
              )}
            </div>
          </div>
          {/* 2 */}
          <div
            id="management"
            className="competences__item competences__item-2 competences__item--blue"
          >
            <div className="container">
              <h2>{dataCompetencies[1].title1}</h2>
              <h3>{dataCompetencies[1].title2}</h3>
              {!isMobile && (
                <div className="competences__item--content">
                  <div className="competences__item--left">
                    <span className="title col-1">
                      {dataCompetencies[1].item_1}
                    </span>
                    <span
                      className="col-2"
                      dangerouslySetInnerHTML={{
                        __html: dataCompetencies[1].item_2
                      }}
                    ></span>
                  </div>
                  <div className="competences__item--right">
                    <span
                      className="col-1"
                      dangerouslySetInnerHTML={{
                        __html: dataCompetencies[1].item_3
                      }}
                    ></span>
                  </div>
                </div>
              )}
              {isMobile && (
                <div className="competences__item--content">
                  <div className="competences__item--top">
                    <span className="title col-1">
                      {dataCompetencies[1].item_1}
                    </span>
                    <span className="col-1">{dataCompetencies[1].item_2}</span>
                  </div>
                  <div className="competences__item--down">
                    <span
                      className="col-2"
                      dangerouslySetInnerHTML={{
                        __html: dataCompetencies[1].item_3
                      }}
                    ></span>
                    <span className="col-2">{dataCompetencies[1].item_4}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="competition__image">
            {!isMobile && (
              <img src="images/competition_page/competition_bg@2x.jpg" />
            )}
            {isMobile && (
              <img src="images/competition_page/competition_bg-mob@2x.jpg" />
            )}
          </div>
          {/* 3 */}
          <div
            id="machine-learning"
            className="competences__item competences__item-3 competences__item--white"
          >
            <div className="container">
              <h2>{dataCompetencies[2].title1}</h2>

              {!isMobile && (
                <div className="competences__item--content">
                  <div className="competences__item--top">
                    <h3 className="col-1">{dataCompetencies[2].title2}</h3>

                    <p className="title2 col-2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dataCompetencies[2].item_2
                        }}
                      ></span>
                    </p>
                  </div>
                  <div className="competences__item--down">
                    <p className="col-1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dataCompetencies[2].item_1
                        }}
                      ></span>
                    </p>
                    <p className="col-2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: dataCompetencies[2].item_3
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              )}
              {isMobile && <SlideDownItem items={[item1]} />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Competencies;
