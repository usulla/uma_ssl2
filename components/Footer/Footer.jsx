import React, { Component } from "react";
import Link from "next/link";
import style from "./footer.scss";
import SocButton from "../SocButton/SocButton.jsx";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handlePopupShowChange = this.handlePopupShowChange.bind(this);
  }
  handlePopupShowChange(e) {
    this.props.onPopupShowChange(true, this.props.dataPopupCookie);
  }

  render() {
    const { list, isMobile } = this.props;
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__block">
            {!isMobile && (
              <nav className="footer__nav footer__row">
                <ul className="nav__list">
                  {list.map((li, index) => (
                    <li
                      key={index}
                      data-index={index + 2}
                      className={`menu-ul__li menu-ul__li-${li.src}`}
                    >
                      <Link href={li.src}>
                        <a className="menu-ul__li">{li.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <nav className="footer__row">
              <SocButton />
            </nav>
            <div className="footer__license footer__row">
              <div className="footer__item">© ООО «Ума.Тех» 2019</div>
              <div className="footer__item">Все права защищены</div>
              <div
                className="footer__item"
                onClick={this.handlePopupShowChange}
              >
                <span className="cookie_rules">
                  Политика использования файлов cookie
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
