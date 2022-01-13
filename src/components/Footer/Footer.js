import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (

        <footer id='footer'>
            <section className='footer container'>
                <div className='footer_logo'>
                    <div className='footer_img'>

                        <img src="img/logo_footer.svg" alt="logo" onClick={scrollToTop} />

                    </div>
                    <p>2020 © All rights reserved.</p>
                </div>

                <div className='footer_link'>
                    <div className='link1'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                        >About</Link>
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Services</Link>
                        <Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Products</Link>
                    </div>
                    <div className='link2'>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}

                        >Details</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link>
                    </div>
                </div>

                <div className='footer_redes'>
                    <h1>Follow us</h1>
                    <div className='footer_iconos'>
                        <img src="img/instagram.svg" alt="instagram" />
                        <img src="img/facebook.svg" alt="facebook" />
                        <img src="img/twitter.svg" alt="twitter" />
                        <img src="img/youtube.svg" alt="youtube" />
                        <img src="img/linkedin.svg" alt="linkedin" />
                    </div>
                </div>

            </section>

        </footer>

    );
}

export default Footer;