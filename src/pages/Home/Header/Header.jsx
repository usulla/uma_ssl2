import React from "react";
import style from "./header.scss";
import Branchs from "./Branchs/Branchs.jsx";

const Header = ({ isMobile, title }) => {
  return (
    <section className="section header">
      <div className="bg">
        <div className="content">
          <div className="container content__wrapper">
            <div className="content__top">
              <p>{title}</p>
            </div>
          </div>
        </div>
        <Branchs isMobile={isMobile} />
      </div>
    </section>
  );
};
export default Header;
