import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./Product.css";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

function Product({ id, image, description, title, price }) {
  const { addToCart } = useContext(ThemeContext);
  const { quantityP } = useContext(ThemeContext);

  return (
    <div className="product-card">
      <div className="product-image">
        {" "}
        <img src={image} alt={title} title={description} />
      </div>

      <div className="product-info">
        <Link to={`products/${id}`}>
          <h5>{title}</h5>
        </Link>

        <h6>{price}$</h6>

        <IconButton color="secondary" aria-label="add to shopping cart">
          <AddShoppingCartIcon onClick={() => addToCart(title)} />
        </IconButton>
        <br />
        <span className="strong"> quantity at cart :</span>
        {quantityP(title)}
      </div>
    </div>
  );
}

export default Product;
