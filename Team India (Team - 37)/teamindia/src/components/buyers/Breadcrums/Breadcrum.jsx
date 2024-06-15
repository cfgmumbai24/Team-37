import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <i className="bi bi-chevron-right"></i> Shop <i className="bi bi-chevron-right"></i> {product.category} <i className="bi bi-chevron-right"></i> {product.name}
    </div>
  )
}

export default Breadcrum