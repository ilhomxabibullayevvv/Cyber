import React from 'react';
import { useSelector } from 'react-redux';
import './Favorite.css';

const Favorite = () => {
    const favorites = useSelector((state) => state.favorite.favorites);

    return (
        <div className='favorite'>
            <div className='container favorite__container'>
                {favorites.length > 0 ? (
                    favorites.map((product) => (
                        <div key={product.id} className="favorite__card">
                            <img className='favorite__image' src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No favorites yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorite;
