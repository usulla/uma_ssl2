import React, { Component } from "react";
import "./products.scss";

class Products extends Component {
  constructor(props) {
    super();
  }
  render() {
    const dataProducts = this.props.dataProducts;
    return (
      <article className="page products__wrap container_big">
        <div className="products__content">
          <h1 className="typography typography--header container">
            <span>| </span>Продукты
          </h1>
          <div className="products__items">
            <div className="products__item products__item-1">
              {!this.props.isMobile ? (
                <React.Fragment>
                  <div className="products__item--left">
                    <img
                      className="pass-media_bg"
                      src="/images/products_page/bg_pass_media@2x.png"
                      alt="pass.media"
                    />
                  </div>

                  <div className="products__item--right">
                    <img
                      className="pass-media_logo product-logo"
                      src="/images/products_page/pass_media_logo.svg"
                      alt="pass.media"
                    />
                    <div className="products__description">
                      {dataProducts[0].items.map((item, index) => {
                        return (
                          <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <img
                    className="pass-media_logo product-logo"
                    src="/images/products_page/pass_media_logo.svg"
                    alt="pass.media"
                  />
                  <div className="products__item--left">
                    <img
                      className="pass-media_bg"
                      src="/images/products_page/bg_pass_media@2x.png"
                      alt="pass.media"
                    />
                  </div>

                  <div className="products__item--right">
                    <div className="products__description">
                      {dataProducts[0].items.map((item, index) => {
                        return (
                          <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
            {/* 2 */}

            <div className="products__item products__item-2">
              {!this.props.isMobile ? (
                <React.Fragment>
                  <div className="products__item--left">
                    <img
                      className="pass-media_bg"
                      src="/images/products_page/bg_uma@2x.png"
                      alt="pass.media"
                    />
                  </div>

                  <div className="products__item--right">
                    <img
                      className="pass-media_logo product-logo"
                      src="/images/products_page/uma_logo.svg"
                      alt="pass.media"
                    />
                    <div className="products__description">
                      {dataProducts[1].items.map((item, index) => {
                        return (
                          <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <img
                    className="uma_logo product-logo"
                    src="/images/products_page/uma_logo.svg"
                    alt="pass.media"
                  />
                  <div className="products__item--left">
                    <img
                      className="uma_bg"
                      src="/images/products_page/bg_uma@2x.png"
                      alt="uma.tech"
                    />
                  </div>
                  <div className="products__item--right">
                    <div className="products__description">
                      {dataProducts[1].items.map((item, index) => {
                        return (
                          <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
            {/* 3 */}
            <div className="products__item products__item-3">
              <div className="products__item--left">
                <img
                  className="trex_media_bg"
                  src="/images/products_page/trex_media_logo.svg"
                  alt="trex.media"
                />
              </div>

              <div className="products__item--right">
                <div className="products__description">
                  {dataProducts[2].items.map((item, index) => {
                    return (
                      <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="products__item products__item-4">
              <div className="products__item--left">
                <img
                  className="cdn_bg"
                  src="/images/products_page/cdn_logo.svg"
                  alt="cdn"
                />
              </div>

              <div className="products__item--right">
                <div className="products__description">
                  {dataProducts[3].items.map((item, index) => {
                    return (
                      <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
export default Products;
