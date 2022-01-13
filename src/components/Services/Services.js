import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Services = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {

        const consultarApi = async () => {
            const url = 'http://localhost:8000/services'
            const resultado = await axios.get(url)
            setDatos(resultado.data[0])
        }
        consultarApi()
    }, [])

    const { principal, secundario, img1, parrafo1, img2, parrafo2, img3, parrafo3, img4, parrafo4 } = datos

    return (

        <section className='services'>
            <div className='services_text'>
                <h1>{principal}</h1>
                <p>{secundario}</p>
            </div>
            <div className='services_card container'>
                <div className=' card'>
                    <img src={img1} alt="services" />
                    <p>{parrafo1}</p>
                </div>
                <div className='card'>
                    <img src={img2} alt="services" />
                    <p>{parrafo2}</p>
                </div>
                <div className='card'>
                    <img src={img3} alt="services" />
                    <p>{parrafo3}</p>
                </div>
                <div className='card'>
                    <img src={img4} alt="services" />
                    <p>{parrafo4}</p>
                </div>
            </div>
        </section>
    );
}

export default Services;