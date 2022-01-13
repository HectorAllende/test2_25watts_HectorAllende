import React,{useState, useEffect} from 'react';
import axios from 'axios'

const About = () => {

    const [datos, setDatos]= useState([])

    useEffect(() => {
 
        const consultarApi = async ()=>{
            const url = 'http://localhost:8000/about'
            const resultado = await axios.get(url)
            setDatos(resultado.data[0])
        }
        consultarApi()
    }, [])

    const {principal, secundario, parrafo, boton, img}= datos

    return (  
        <>
        <section className='about-us' id='about'>
            <div className='container after about'>
                <img src={img} alt="about" className='img-fluid'/>
                <div className='textos_about'>
                    <h5 className='principal'>{principal}</h5>
                    <h5 className='secundario'>{secundario}</h5>
                    <p>{parrafo}</p>
                    <a href='#'>{boton}</a>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default About;