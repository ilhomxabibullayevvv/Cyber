import React from 'react'
import './Category.css'
import Leftbtn from '../../image/leftbtn.svg'
import Rightbtn from '../../image/rightbtn.svg'
import Icon from '../../image/icon.svg'
import Icon2 from '../../image/icon2.svg'
import Icon3 from '../../image/icon3.svg'
import Icon4 from '../../image/icon4.svg'
import Icon5 from '../../image/icon5.svg'
import Icon6 from '../../image/icon6.svg'

const Category = () => {
    return (
        <section className='category'>
            <div className='container category__container'>
                <div className='category__content'>
                    <h3 className='category__title'>Browse By Category</h3>
                    <div className='catigory__button'>
                        <button className='category__btn'><img src={Leftbtn} alt="" /></button>
                        <button className='category__btn'><img src={Rightbtn} alt="" /></button>
                    </div>
                </div>
                <div className='category__content'>
                    <div className='category__card'>
                        <img src={Icon} alt="" />
                        <h3 className='category__name'>Phones</h3>
                    </div>
                    <div className='category__card'>
                        <img src={Icon2} alt="" />
                        <h3 className='category__name'>Smart Watches</h3>
                    </div>
                    <div className='category__card'>
                        <img src={Icon3} alt="" />
                        <h3 className='category__name'>Cameras</h3>
                    </div>
                    <div className='category__card'>
                        <img src={Icon4} alt="" />
                        <h3 className='category__name'>Headphones</h3>
                    </div>
                    <div className='category__card'>
                        <img src={Icon5} alt="" />
                        <h3 className='category__name'>Computers</h3>
                    </div>
                    <div className='category__card'>
                        <img src={Icon6} alt="" />
                        <h3 className='category__name'>Gaming</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
