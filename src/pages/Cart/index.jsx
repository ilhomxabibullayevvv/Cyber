import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions';
import './Cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart">
      <div className='container cart__container'>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart__card">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button onClick={() => handleRemove(product)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;

