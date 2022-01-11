import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Slider = () => {
    return (

        <>
            <section className='banner'>
                <div className='imagenes'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="indicador active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='indicador' aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='indicador' aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="img/slide1.png" className="d-block w-100" alt="slider1" />
                                <div className="carousel-caption container">
                                    <h5>Sed ut perspiciatis unde omnis iste natus</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="img/slide2.png" className="d-block w-100" alt="slider2" />
                                <div className="carousel-caption  container">
                                    <h5>Proin elementum massa et felis</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="img/slide3.png" className="d-block w-100" alt="slider3" />
                                <div className="carousel-caption container">
                                    <h5>Nulla rhoncus vulputate congue</h5>
                                    <p>Aenean rutrum eros nec lacus vehicula, sempler euismod dui</p>

                                    <a href="#">Read more</a>
                                </div>
                            </div>
                        </div>
               
                    </div>
                </div>
            </section>

        </>
    );
}

export default Slider;