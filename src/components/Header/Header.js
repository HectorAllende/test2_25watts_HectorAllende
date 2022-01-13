import React, { useState } from 'react';
import Slider from './slider';
import "./header.css"
import { FiMenu, FiX } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [navBar, setNavBar] = useState(false)



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
                        <img src="img/logo.svg" alt="logo" onClick={scrollToTop} />
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

                        <Link
                            onClick={scrollToTop}
                            className={navBar ? 'enlace2 navbar__link ' : 'enlace navbar__link'}>Home</Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'}  >About us</Link>
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={navBar ? 'enlace2 navbar__link ' : 'enlace navbar__link'} >Services</Link>
                        <Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'} >Products</Link>
                        <Link activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                            className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'}>Details</Link>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={navBar ? 'enlace2 navbar__link' : 'enlace navbar__link'} >Contact</Link>
                    </div>
                </section>
            </nav>
            <Slider />
        </header>

    );
}

export default Header;