import React, { useContext } from 'react';
import { ShopContext } from '../../pages/buyers/context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../../components/buyers/ProductDisplay/ProductDisplay';
import RelatedProducts from '../../components/buyers/RelatedProducts/RelatedProducts';

function ProductPage() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>; // or handle the loading state as needed
  }

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // or handle the product not found case as needed
  }

  return (
    <>
      {/* <Breadcrum product={product}/> */}
      <ProductDisplay product={product} />
      <RelatedProducts />
    </>
  );
}

export default ProductPage;
