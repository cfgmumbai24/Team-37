import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../../pages/buyers/context/ShopContext';


const ProductDisplay = (props) => {
  const { product } = props;

  const {addToCart} = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <p>(121)</p>
        </div>
        
        <div className="product-display-right-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae assumenda quod neque ipsum consequuntur? Totam culpa iusto delectus aut voluptatem natus? Eos saepe recusandae eum iusto quam repellendus modi enim.
        </div>
        <div className="product-display-right-size">
          <h1>Select Color:</h1>
          <div className="product-display-right-sizes">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDisplay