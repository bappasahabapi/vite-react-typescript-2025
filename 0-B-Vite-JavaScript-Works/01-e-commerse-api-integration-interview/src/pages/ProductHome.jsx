import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductHome = () => {
  const { data: products, loading, error } = useFetchProducts({});
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  if (loading)
    return (
      <p style={{ textAlign: "center" }}>Products Data are Loading ....</p>
    );
  if (error) return <p>{error}</p>;

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    let updatedCart;

    //increate quantity value
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }

    setCart(updatedCart);

    const preQuantity = existingProduct ? existingProduct.quantity : 0;
    const updatedQuantity = preQuantity + quantity;

    setNotification(
      `you added "${product.name}" to your cart. Quantity: ${updatedQuantity}`
    );

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };




  return (
    <div>
      {notification && <div className="notification">{notification}</div>}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(quantity) => handleAddToCart(product, quantity)}
          />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {
            cart.map(item =>(
                <div key={item.id}>
                    {item.name} : {item.quantity} * {item.price} ={item.quantity * item.price}  Tk.
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default ProductHome;
