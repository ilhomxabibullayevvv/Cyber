import React from 'react'
import './Smaller2.css'
import Technique from '../../image/technique.png'
import Technique2 from '../../image/technique2.png'
import Technique3 from '../../image/technique3.png'
import Technique4 from '../../image/technique4.png'

const Smaller2 = () => {
    return (
        <section className='smaller'>
            <div className='smaller__card'>
                <img className='smaller__image' src={Technique} alt="" />
                <h2 className='smaller__name'>Popular Products</h2>
                <p className='smaller__descraption'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='smaller__btn'>Shop Now</button>
            </div>
            <div className='smaller__card2'>
                <img className='smaller__image' src={Technique2} alt="" />
                <h2 className='smaller__name'>Ipad Pro</h2>
                <p className='smaller__descraption'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='smaller__btn'>Shop Now</button>
            </div>
            <div className='smaller__card3'>
                <img className='smaller__image' src={Technique3} alt="" />
                <h2 className='smaller__name'>Samsung Galaxy </h2>
                <p className='smaller__descraption'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='smaller__btn'>Shop Now</button>
            </div>
            <div className='smaller__card4'>
                <img className='smaller__image' src={Technique4} alt="" />
                <h2 className='smaller2__name'>Macbook Pro</h2>
                <p className='smaller2__descraption'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='smaller2__btn'>Shop Now</button>
            </div>
        </section>
    )
}

export default Smaller2
