import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../../pages/buyers/context/ShopContext';

const Item = (props) => {
  const { product } = props;

  const {addToCart} = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/customer/product/${props.id}`}><img className="item-img" onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
    </div>
  )
}

export default Item