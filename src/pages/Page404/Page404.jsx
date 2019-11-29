import React, { Component } from "react";
import "./page404.scss";
import logo from "../../images/logo_umatech.svg";
import page404_bg from "../../images/bg/page404_bg.svg";

class Page404 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".footer").classList.add("page404");
  }
  render() {
    return (
      <article className="page page404__wrap">
        <div className="page404__content container">
          <a class="logo" href="/">
            <img src={logo} />
          </a>
          <h1 className="typography typography--header">
            <span>404</span> Not found
          </h1>
          <a class="button button-mail" href="/">
            На главную
          </a>
          {this.props.isMobile ? <div className="page404__bg"></div> : null}
        </div>
      </article>
    );
  }
}
export default Page404;
