import React from 'react';


const Footer = () => {
    return (

        <footer id='footer'>
            <section className='footer container'>

                <div className='footer_logo'>
                    <div className='footer_img'>
                        <img src="img/logo_footer.svg" alt="logo" />
                    </div>
                    <p>2020 © All rights reserved.</p>
                </div>

                <div className='footer_link'>
                    <div className='link1'>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#products">Products</a>
                    </div>
                    <div className='link2'>
                        <a href="#details">Details</a>
                        <a href="#contact">Contact</a>

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