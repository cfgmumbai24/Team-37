import React, { useContext, useEffect, useState } from 'react'
import './Products.css'
import { ShopContext } from '../../pages/buyers/context/ShopContext'
import Item from '../../../src/components/buyers/Item/Item'
import Navbar from '../../components/buyers/Navbar/Navbar'
import { fetchProducts } from '../../services/apiProducts'

const Products = (props) => {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const[loading, setLoading] = useState(null);
  const[error, setError] = useState(null);

  // console.log(products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shop-category mt-20">
      <img className="shop-category-banner"src={props.banner} alt="" />
      <div className="shopcategory-products">
        {products.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.imgUrl
          } category={item.category} color={item.color} desc={item.description}/>
        })}
      </div>
    </div>
  )
}

export default Products