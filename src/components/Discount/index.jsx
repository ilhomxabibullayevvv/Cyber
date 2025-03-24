import React from 'react'
import './Discount.css'
import like from '../../image/like.svg'
import Iphone from '../../image/iphone.png'
import Iphone3 from '../../image/iphone3.png'
import Iphone4 from '../../image/iphone4.png'

const Discount = () => {
  return (
    <div className='discount'>
      <div className='container discount__container'>
        <h2 className='discount__title'>Discounts up to -50%</h2>
        <div className='discount__contenet'>
          <div className='discount__card'>
            <div className='discount__block'>
              <img src={like} alt="" />
            </div>
            <img className='discount__image' src={Iphone} alt="" />
            <h3 className='discount__name'>Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
            <p className='discount__price'>$1437</p>
            <button className='discount__btn'>Buy Now</button>
          </div>
          <div className='discount__card'>
            <div className='discount__block'>
              <img src={like} alt="" />
            </div>
            <img className='discount__image' src={Iphone3} alt="" />
            <h3 className='discount__name'>Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
            <p className='discount__price'>$1437</p>
            <button className='discount__btn'>Buy Now</button>
          </div>
          <div className='discount__card'>
            <div className='discount__block'>
              <img src={like} alt="" />
            </div>
            <img className='discount__image' src={Iphone4} alt="" />
            <h3 className='discount__name'>Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
            <p className='discount__price'>$1437</p>
            <button className='discount__btn'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
