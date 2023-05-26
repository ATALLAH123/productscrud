import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';


const Cart = () => {
  const cart = useSelector(state => state.handleCart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch({ type: 'DELITEM', payload: product });
  };
  const handleadd = (product) => {
    dispatch({ type: 'ADDITEM', payload: product });
  };

  useEffect(() => {
    console.log(cart);
  }, [])

  return (
    <div>
      <h2>Shopping Cart</h2>
      {!cart || cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div className='col-md-4'>
                <img src={product.image} alt={product.title} width="300px" />
              </div>
              <div className='col-md-4'>
                <h3>{product.title}</h3>
                <p className='lead fw-bold'> {product.qty} X ${product.price} =${product.qty * product.price}</p>
                <button  class="btn btn-outline-dark ms-2" onClick={() => handleRemove(product)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

};

export default Cart;
