import React from 'react'
import './Hero.css'
import Phone from '../../image/phone.png'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container hero__container'>
                <div className='hero__content'>
                    <h3 className='hero__title'>Pro.Beyond.</h3>
                    <h2 className='hero__name'>IPhone 14 Pro</h2>
                    <p className='hero__descraption'>Created to change everything for the better. For everyone</p>
                    <button className='hero__button'>Shop now</button>
                </div>
                <img className='hero__image' src={Phone} alt="" />
            </div>
        </section>
    )
}

export default Hero
