
import React from "react";
import style from "./socbutton.scss";

const SocButton = () => {
    return (
        <div className='socicons'>
            <a
                className='socicons__icon socicons__icon--linkedin'
                href='https://www.linkedin.com/company/uma-tech/'
                rel='noopener noreferrer'
                target='_blank'>
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a
                className='socicons__icon socicons__icon--fb'
                href='https://www.facebook.com/UmaTech-417633509056962/'
                rel='noopener noreferrer'
                target='_blank'>
                <i className="fab fa-facebook-f"></i>
            </a>
            <a
                className='socicons__icon socicons__icon--vk'
                href='https://vk.com/uma.tech'
                rel='noopener noreferrer'
                target='_blank'>
                <i className="fab fa-vk"></i>
            </a>
        </div>
    );
};

export default SocButton;