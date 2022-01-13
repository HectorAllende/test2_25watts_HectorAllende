import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Details = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {

        const consultarApi = async () => {
            const url = 'http://localhost:8000/details'
            const resultado = await axios.get(url)
            setDatos(resultado.data[0])
        }
        consultarApi()
    }, [])

    const { titulo, subtitulo, img1, parrafo1, img2, parrafo2, img3, parrafo3, img4, parrafo4, img5, parrafo5, img6, parrafo6 } = datos

    return (
        <section className='details'>
            <div className='details_text'>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
            <div className='details_cards container'>
                <div className='card'>
                    <img src={img1} alt="details" />
                    <p>{parrafo1}</p>
                </div>
                <div className='card'>
                    <img src={img2} alt="details" />
                    <p>{parrafo2}</p>
                </div>
                <div className='card'>
                    <img src={img3} alt="details" />
                    <p>{parrafo3}</p>
                </div>
                <div className='card'>
                    <img src={img4} alt="details" />
                    <p>{parrafo4}</p>
                </div>
                <div className='card'>
                    <img src={img5} alt="details" />
                    <p>{parrafo5}</p>
                </div>
                <div className='card'>
                    <img src={img6} alt="details" />
                    <p>{parrafo6}</p>
                </div>
            </div>
        </section>
    );
}

export default Details;