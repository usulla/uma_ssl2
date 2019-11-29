import React from 'react';
import style from './togglemenu.scss';

const ToggleMenu = () => {
    //open mobile menu
    function handleClick() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.add('mobile-menu--is-active');
    }
    return(
        <div className="toggle-menu" onClick={handleClick}>
            <div className="toggle-menu__inner">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default ToggleMenu;