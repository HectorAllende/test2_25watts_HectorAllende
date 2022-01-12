import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const Slider = () => {
    const [datos, setDatos]= useState([])

    useEffect(() => {
 
        const consultarApi = async ()=>{
            const url = 'http://localhost:8000/header'
            const resultado = await axios.get(url)
            setDatos(resultado.data[0])
        }
        consultarApi()
    }, [])

    const {titulo1, parrafo1, img1, titulo2, parrafo2, img2, titulo3, parrafo3, img3 } = datos
 
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
                                <img src={img1}className="d-block w-100" alt="slider1" />
                                <div className="carousel-caption container">
                                    <h5>{titulo1}</h5>
                                    <p>{parrafo1}</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img2} className="d-block w-100" alt="slider2" />
                                <div className="carousel-caption  container">
                                    <h5>{titulo2}</h5>
                                    <p>{parrafo2}</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img3} className="d-block w-100" alt="slider3" />
                                <div className="carousel-caption container">
                                    <h5>{titulo3}</h5>
                                    <p>{parrafo3}</p>
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