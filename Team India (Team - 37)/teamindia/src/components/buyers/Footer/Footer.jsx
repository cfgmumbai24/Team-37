import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/14063/14063185.png" className="shop-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <i className="bi bi-instagram"></i>
        </div>
        <div className="footer-icons-container">
          <i className="bi bi-pinterest"></i>
        </div>
        <div className="footer-icons-container">
          <i className="bi bi-whatsapp"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 Shopper Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer