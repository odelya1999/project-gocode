import Product from "./Product";
import "./Products.css";
import Spinner from "./Spinner";

function Products({ products }) {
  return (
    <section className="products">
      {!products.length && <Spinner />}
      {products.map(({ id, image, description, title, price, category }) => (
        <Product
          key={id}
          id={id}
          image={image}
          description={description}
          title={title}
          price={price}
          category={category}
        />
      ))}
    </section>
  );
}

export default Products;
