import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../pages/buyers/context/ShopContext'
import logo from '../../../components/buyers/assets/logo-ngo.jpeg'

function Navbar() {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to='/'><img src={logo} className="shop-logo" /></Link>
      </div>
      
      <div className="nav-login-cart">
        {/* <Link to='/user-login'><button>Login</button></Link> */}
        <Link to='/customer/checkout-items'><i className="bi bi-cart3 cart-icon"></i></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar