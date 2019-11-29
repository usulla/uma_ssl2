import React from "react";
import Link from "next/link";
import NavLink from "next/link";
import { withRouter } from "next/router";
import "./nav.scss";
import logo from "../../images/logo_umatech.svg";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx.js.js";
import UmaChallenge from "../UmaChallenge/UmaChallenge.jsx.js.js";

const Nav = ({ list, isMobile, location, router }) => {
  if (!isMobile) {
    return (
      <header className="menu nav">
        <div className="container">
          <div className="nav__wrap">
            <div className="nav__left">
              <Link href="/">
                <a href="/" className="logo">
                  <img src={logo} alt="Uma.Tech" />
                </a>
              </Link>

              <a
                href="https://challenge.uma.tech"
                target="_blank"
                className={`challenge-btn inner-page ${
                  router.pathname == "/" ? "hide" : ""
                }`}
              >
                Uma.Challenge
              </a>
              {router.pathname == "/" && (
                <a
                  href="https://challenge.uma.tech"
                  target="_blank"
                  className="challenge-btn home"
                >
                  Uma.Challenge
                </a>
              )}
            </div>

            <nav className="nav__right" aria-label="primary">
              <ul className="nav__list">
                {list.map((li, index) => (
                  <li
                    key={index}
                    data-index={index + 2}
                    className={`menu-ul__li menu-ul__li-${li.src}`}
                  >
                    <NavLink href={li.src}>
                      <a
                        href={li.src}
                        className="menu-ul__li"
                        activeClassName="active"
                      >
                        {li.title}
                      </a>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="menu nav">
      <div className="container">
        <div className="nav__wrap">
          <div className="nav__left">
            <Link href="/">
              <a href="/" className="logo">
                <img src={logo} alt="Uma.Tech" />
              </a>
            </Link>
            <UmaChallenge />
          </div>
          <ToggleMenu />
        </div>
      </div>
    </header>
  );
};

export default withRouter(Nav);
