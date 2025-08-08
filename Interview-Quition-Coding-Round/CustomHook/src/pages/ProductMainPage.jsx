/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetchPromise from "../hooks/useFetchPromise";

const ProductMainPage = () => {
  const { data: products, loading, error } = useFetchPromise();
  const [cart , setCart]=useState([]);
  const [notification , setNotification]=useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">
    <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product}  />
    ))}
    </div> 

    <div className="cart-summary">
      <h2>Cart Summary</h2>
      {cart.map((item)=>(
        <div key={item.id}>
          {item.name}: {item.quantity} x Tk{item.price} = Tk{item.quantity * item.price}
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductMainPage;
