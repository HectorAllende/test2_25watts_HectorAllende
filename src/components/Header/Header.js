import React, { useState, useEffect } from 'react';
import Slider from './slider';
import scrollTop from '../utils/scrollTop'



const Header = () => {

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

    const changeBackground = ()=>{
        if(window.scrollY >=100){
            setNavBar(true)
        }else{
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
                    <div className='enlaces-header enlaces' id="enlaces">
                        <a href="#" className={navBar ? 'enlace2' : 'enlace'}>Home</a>
                        <a href="#about" className={navBar ? 'enlace2' : 'enlace'} onClick={handleClick} >About us</a>
                        <a href="#services" className={navBar ? 'enlace2' : 'enlace'} onClick={handleClick}>Services</a>
                        <a href="#products" className={navBar ? 'enlace2' : 'enlace'} onClick={handleClick}>Products</a>
                        <a href="#details" className={navBar ? 'enlace2' : 'enlace'} onClick={handleClick}>Details</a>
                        <a href="#contact" className={navBar ? 'enlace2' : 'enlace'} onClick={handleClick}>Contact</a>
                    </div>
                </section>
            </nav>
            <Slider />
        </header>

    );
}

export default Header;