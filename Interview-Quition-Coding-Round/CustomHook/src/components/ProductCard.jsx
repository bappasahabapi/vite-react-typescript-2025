/* eslint-disable react/prop-types */

import { useState } from "react"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"



const ProductCard = ({product}) => {
  console.log(product)
  const [quantity,setQuantity]=useState(1)

  const handleQuantityChange =(value)=>{
    
    const newQuantity =quantity+value  
    console.log(newQuantity) // 1-1 =0 , 1+1 =2 
    if(newQuantity >0){
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="product-card">
    <img src={product.imageUrl} alt={product.name} className="product-image" />

    <div className="product-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div className="price-delivery">
            <div className="price-section">
                <span>Quantity</span>
                <div className="quantity-control">
                    <div className="icons" onClick={()=> handleQuantityChange(-1)}><FaMinus/></div>
                    <div className="quantity-value">{quantity}</div>
                    <div className="icons" onClick={() => handleQuantityChange(1)}><FaPlus /></div>
                </div>
            </div>
            <div className="price-section">
                <span>Total Price</span> Tk{product.price * quantity} {" "}
            </div>
            <div className="price-section">
                <span>Delivery</span> {product.deliveryTime}
            </div> 
        </div>
        <button className="add-to-cart" 
        >Add to Cart</button>
    </div>

</div>
  )
}

export default ProductCard