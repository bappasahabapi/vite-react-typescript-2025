/* eslint-disable no-unused-vars */
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  // id: newItem.id,
  // price: newItem.price,
  // quantity: 1,
  // totalPrice: newItem.totalPrice,
  // name: newItem.title,
  {
    id: "1",
    title: "1st Book",
    price: 10,
    description: "This is a first product - of price 10 Tk!",
  },
  {
    id: "2",
    title: "2nd book",
    price: 20,
    description: "This is a second product - of price 20 Tk",
  },
  {
    id: "3",
    title: "3rd book",
    price: 20,
    description: "This is a third product - of price 30 Tk",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products <mark> [Local Redux section]</mark> </h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
