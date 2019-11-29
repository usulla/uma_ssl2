import React from "react";
import style from "./branchs.scss";
import Link from "next/link";
// import { HashLink as Link } from "react-router-hash-link";

const Branchs = ({ isMobile }) => {
  return (
    <div className="bottom">
      <div className="container">
        <div className="bottom__wrap">
          <div className="bottom__right">
            <div className="bottom__item">
              <span>
                <Link href="/competencies#highload">
                  <a href="/competencies#highload">Highload</a>
                </Link>
              </span>
            </div>
            <div className="bottom__item">
              <span>
                {!isMobile && (
                  <Link href="/competencies#management">
                    <a href="/competencies#management">
                      Управление
                      <br /> IT-инфраструктурой
                    </a>
                  </Link>
                )}

                {isMobile && (
                  <Link href="/competencies#management">
                    <a href="/competencies#management">
                      Управление IT-инфраструктурой
                    </a>
                  </Link>
                )}
              </span>
            </div>
            <div className="bottom__item">
              <span>
                {!isMobile && (
                  <Link href="/competencies#machine-learning">
                    <a href="/competencies#machine-learning">
                      Машинное <br /> обучение
                    </a>
                  </Link>
                )}
                {isMobile && (
                  <Link href="/competencies#machine-learning">
                    <a href="/competencies#machine-learning">
                      Машинное обучение
                    </a>
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Branchs;
