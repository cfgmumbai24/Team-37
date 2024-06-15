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
      <div className='product-name'>{props.name}</div>
      <div className="product-desc">{props.desc}</div>
      <div className='product-color'><span>Color: </span> {props.color}</div>
      <span className="product-category">#{props.category}</span>
    </div>
  )
}

export default Item