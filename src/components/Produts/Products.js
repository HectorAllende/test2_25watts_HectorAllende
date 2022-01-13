import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Products = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {

        const consultarApi = async () => {
            const url = 'http://localhost:8000/products'
            const resultado = await axios.get(url)
            setDatos(resultado.data[0])
        }
        consultarApi()
    }, [])


    const { principal, secundario, titulo1, lista1, lista2, lista3, lista4 } = datos


    return (
        <section className='products'>

            <div className='container products_textos'>
                <h1>{principal}</h1>
                <p>{secundario}</p>
            </div>
            <div className='products_card'>
                <div className='card container'>
                    <h1>{titulo1}</h1>
                    <ul>
                        <li>{lista1}</li>
                        <li>{lista2}</li>
                        <li>{lista3}</li>
                        <li>{lista4}</li>
                    </ul>
                </div>
                <div className='card container'>
                    <h1>{titulo1}</h1>
                    <ul>
                        <li>{lista1}</li>
                        <li>{lista2}</li>
                        <li>{lista3}</li>
                        <li>{lista4}</li>
                    </ul>
                </div>
                <div className='card container'>
                    <h1>{titulo1}</h1>
                    <ul>
                        <li>{lista1}</li>
                        <li>{lista2}</li>
                        <li>{lista3}</li>
                        <li>{lista4}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Products;