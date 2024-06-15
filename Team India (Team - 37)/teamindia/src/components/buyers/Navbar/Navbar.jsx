import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../pages/buyers/context/ShopContext'


function Navbar() {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/14063/14063185.png" className="shop-logo" /></Link>
        <span>SHOPPER</span>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/customer/product'>Shop</Link>{menu == "shop" ? <hr /> : <></>}</li>
        
      </ul>
      <div className="nav-login-cart">
        {/* <Link to='/user-login'><button>Login</button></Link> */}
        <Link to='/customer/checkout-items'><i className="bi bi-cart3 cart-icon"></i></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar