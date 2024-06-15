import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../../pages/buyers/context/ShopContext'
import { useState } from 'react'

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmt } = useContext(ShopContext);
  const [cart, setCart] = useState([]);

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const sendMail = (email) => {

  }

  let message = "Email Sent"
  return (
    <div className="cart-items">
      <div className="cart-content">
        <div className="cart-item-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        {/* <hr /> */}
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (<div>
              <hr />
              <div className="cart-items-format cart-item-format-main">
                <img className="cart-icon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <h1 className='cart-items-quantity'>{cartItems[e.id]}</h1>
                <i className="bi bi-trash3-fill cart-items-remove-icon" onClick={() => { removeFromCart(e.id) }}></i>
              </div>
            </div>)
          }
          return (null);
        })}
      </div>


      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Send an enquiry</h1>
          <p>Your selected items will be sent to us via mail. We will contact you for further procedure.</p>
          <input type="email" placeholder='name@example.com' onChange={handleChange}/>
          <button onClick={() => sendMail()}>Send Email</button>
        </div>
        
      </div>
    </div>
  )
}

export default CartItems