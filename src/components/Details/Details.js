import React from 'react';


const Details = () => {
    return (
        <section className='details'>
            <div className='details_text'>
                <h1>More details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
            </div>
            <div className='details_cards container'>
                <div className='card'>
                    <img src="img/ancla.svg" alt="" />
                    <p>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
                </div>
                <div className='card'>
                    <img src="img/campana.svg" alt="" />
                    <p>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
                </div>
                <div className='card'>
                    <img src="img/marcador.svg" alt="" />
                    <p>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
                </div>
                <div className='card'>
                    <img src="img/rectangulo.svg" alt="" />
                    <p>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
                </div>
                <div className='card'>
                    <img src="img/pincel.svg" alt="" />
                    <p>Donec egestas tortor quis turpis finibus.</p>
                </div>
                <div className='card'>
                    <img src="img/caja.svg" alt="" />
                    <p>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
                </div>
            </div>
        </section>
    );
}

export default Details;