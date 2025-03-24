import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';
import Logo from '../../image/logo.svg';
import Search from '../../image/search.svg';
import Favorite from '../../image/favorite.svg';
import Cart from '../../image/cart.svg';
import User from '../../image/user.svg';

const Header = ({ setSearchQuery }) => {
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header__input">
          <img src={Search} alt="Search" />
          <input
            type="text"
            placeholder="search"
            onChange={handleSearchInputChange}
          />
        </div>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/" className="header__link">Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/about" className="header__link">About</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/contact" className="header__link">Contact</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/blog" className="header__link">Blog</NavLink>
          </li>
        </ul>
        <div className="header__icon">
          <NavLink to="/favorite" className="header__link">
            <img src={Favorite} alt="Favorite" />
          </NavLink>
          <NavLink to="/cart" className="header__link">
            <img src={Cart} alt="Cart" />
          </NavLink>
          <NavLink to="/user" className="header__link">
            <img src={User} alt="User" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
