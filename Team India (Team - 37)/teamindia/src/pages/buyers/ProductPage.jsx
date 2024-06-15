import React, { useContext } from 'react'
import { ShopContext } from '../../pages/buyers/context/ShopContext'
import { useParams } from 'react-router-dom';
// import Breadcrum from '../../components/buyers/Breadcrums/Breadcrum';
import ProductDisplay from '../../components/buyers/ProductDisplay/ProductDisplay';
import RelatedProducts from '../../components/buyers/RelatedProducts/RelatedProducts';

function ProductPage() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <>
    {/* <Breadcrum product={product}/> */}
    <ProductDisplay product={product}/>
    <RelatedProducts/>
    </>
  )
}

export default ProductPage