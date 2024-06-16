import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../../pages/buyers/context/ShopContext'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmt } = useContext(ShopContext);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const sendMail = async () => {
    // console.log(cartItems)
    // const items = []
    // for(const key of cartItems) {
    //   if(cartItems[key] > 0) {
    //     all_product.filter
    //     items.push({id: key, quantity: cartItems[key],  })
    //   } 
    // }
    // const items = cartItems.map((item) => {
    //   return {
    //     imageurl: item.image,
    //     name: item.name,
    //     quantity: 10,
    //     id: item
    //   }
    // })
    const items = [
      {
        id: 1,
        quantity: 300,
        imageurl: 'https://gachwala.in/wp-content/uploads/2023/04/1680605263445-scaled.jpg',
        name: 'Product 1'
      }
    ]
    const response = await emailjs.send('service_4wgpwvi', 'template_g3l2pt7', {
      from: email,
      items: items
    }, 'xZCtiwA8cgDYVGFXG');
    console.log(response.text);
  }

  let message = "Email Sent"
  return (
    <div className="cart-items mt-26">
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
          <input type="email" placeholder='name@example.com' onChange={handleChange} />
          <button onClick={() => sendMail()}>Send Email</button>
        </div>

      </div>
    </div>
  )
}

export default CartItems