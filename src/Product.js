import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./Product.css";

function Product({ image, description, title, price }) {

  const { addToCart } = useContext(ThemeContext);
  const { cart } = useContext(ThemeContext);
  const { quantityP } = useContext(ThemeContext);


  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} title={description} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <button onClick={()=> addToCart(title)}>I want it</button>
        <br/><span className="strong"> quantity at cart :</span>
        {quantityP(title)}
      </div>
    </div>
  );
}

export default Product;
