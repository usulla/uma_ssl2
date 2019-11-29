import React from "react";
import { Link } from "react-router-dom";
import "./mobilemenu.scss";
import UmaChallenge from "../UmaChallenge/UmaChallenge.jsx";

const MobileMenu = ({ list }) => {
  //close mobile menu
  function handleClick(e) {
    const fullMobileMenu = document.querySelector(".mobile-menu");
    fullMobileMenu.classList.remove("mobile-menu--is-active");
    if (document.querySelector(".mobile-title-page.show")) {
      document.querySelector(".mobile-title-page.show").style.opacity = "";
    }
  }
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-inner">
        <div className="logos-block">
          <Link to="/uma_tech/" className="logo">
            <img
              src='/images/logo_umatech.svg'
              alt="Uma.Tech"
              className="logo-uma"
              onClick={handleClick}
            />
          </Link>
          <UmaChallenge />
        </div>

        <ul>
          {list.map((li, index) => (
            <li key={index} onClick={handleClick}>
              <Link to={li.src}>{li.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__close" onClick={handleClick}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
