import React from 'react'
import { NavLink } from 'react-router'
import './Footer.css'
import Logo2 from '../../image/logo2.svg'
import Twitter from '../../image/twitter.svg'
import Facebook from '../../image/facebook.svg'
import Tiktok from '../../image/tiktok.svg'
import Instagram from '../../image/instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer__container'>
        <div className='footer__content'>
          <div className='footer__block'>
            <img src={Logo2} alt="" />
            <p className='footer__descraption'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>
          <ul className='footer__list'>
            <li className='footer__item'>
              <h2 className='footer__title'>Services</h2>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Bonus program</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Gift cards</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Credit and payment</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Service contracts</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Non-cash account</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Payment</NavLink>
            </li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__item'>
              <h2 className='footer__title'>Assistance to the buyer</h2>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Find an order</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Terms of delivery</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Exchange and return of goods</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Guarantee</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Frequently asked questions</NavLink>
            </li>
            <li className='footer__item'>
              <NavLink to='' className='footer__link'>Terms of use of the site</NavLink>
            </li>
          </ul>
        </div>
        <div className='footer__image'>
          <NavLink to='/twitter' className='footer__icon'><img src={Twitter} alt="" /></NavLink>
          <NavLink to='/facebook' className='footer__icon'><img src={Facebook} alt="" /></NavLink>
          <NavLink to='/tiktok' className='footer__icon'><img src={Tiktok} alt="" /></NavLink>
          <NavLink to='/instagram' className='footer__icon'><img src={Instagram} alt="" /></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
