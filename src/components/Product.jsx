import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { addToCart, toggleFavorite } from '../redux/actions';
import './Product.css';
import Like from '../image/like.svg';
import Liked from '../image/liked.svg';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorite.favorites);

    const isFavorite = favorites.some(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(product));
    };

    return (
        <div className='product'>
            <div className='container product__container'>
            <div className='product__card'>
                    <div className='product__block'>
                        <img
                            className='product__image'
                            src={isFavorite ? Liked : Like}
                            alt="Like"
                            onClick={handleToggleFavorite}
                        />
                    </div>
                    <img className='product__image2' src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <Link className='product__btn' to={'/product-details/' + product.id}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
