import React, { useState} from 'react';
import Slider from './slider';
import "./header.css"
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };




    const [navBar, setNavBar] = useState(false)


    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 80,
        })
    }

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header>
            <nav className={navBar ? 'nav active' : 'nav'}>
                <section className='container nav'>

                    <div className='logo'>
                        <a href="#">
                            <img src="img/logo.svg" alt="logo" />
                        </a>
                    </div>

                    {menuClicked ? (
                        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
                    ) : (
                        <FiMenu
                            size={25}
                            className={"navbar__menu"}
                            onClick={toggleMenuClick}
                        />
                    )}


                    <div className={
          menuClicked ? "navbar__list navbar__list--active enlaces-header enlaces" : "navbar__list enlaces-header enlaces"
        } id="enlaces">

                        <a href="#" className={navBar ? 'enlace2 navbar__link ' : 'enlace navbar__link'}>Home</a>
                        <a href="#about" className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'} onClick={handleClick} >About us</a>
                        <a href="#services" className={navBar ? 'enlace2 navbar__link ' : 'enlace navbar__link'} onClick={handleClick}>Services</a>
                        <a href="#products" className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'} onClick={handleClick}>Products</a>
                        <a href="#details" className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'} onClick={handleClick}>Details</a>
                        <a href="#contact" className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'} onClick={handleClick}>Contact</a>
                    </div>
                </section>
            </nav>
            <Slider />
        </header>

    );
}

export default Header;