import React from 'react';


const About = () => {
    return (  
        <>
        <section className='about-us' id='about'>
            <div className='container after about'>
                <img src="img/about.png" alt="about" />
                <div className='textos_about'>
                    <h5 className='principal'>About us</h5>
                    <h5 className='secundario'>We Help Businesses</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

                    <a href="#">More info</a>
                </div>
            </div>
        </section>
        </>

    );
}
 
export default About;