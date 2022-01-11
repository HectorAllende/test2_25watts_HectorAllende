import React from 'react';

const Services = () => {
    return ( 

        <section className='services'>
            <div className='services_text'>
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
            </div>    
            <div className='services_card container'>
                <div className=' card'>
                    <img src="img/mundo.svg" alt="" />
                    <p>Stet clita kasd gubergren</p>
                </div>
                <div className=' card'>
                    <img src="img/arriba.svg" alt="" />
                    <p>At vero eos et accusam</p>
                </div>
                <div className='card'>
                    <img src="img/llamar.svg" alt="" />
                    <p>Sed ut perspiciatis unde</p>
                </div>
                <div className='card'>
                    <img src="img/participar.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>
     );
}
 
export default Services;