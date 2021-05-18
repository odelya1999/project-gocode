import "./Cart.css";
import ThemeContext from "./ThemeContext";
import {
  useContext /*, forwardRef, useState, Ref, ReactElement*/,
} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import FilterVintageOutlinedIcon from "@material-ui/icons/FilterVintageOutlined";

<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></script>;

function Cart() {
  const { cart } = useContext(ThemeContext);
  const { totalPrice } = useContext(ThemeContext);
  const { totalItem } = useContext(ThemeContext);
  const { addToCart } = useContext(ThemeContext);
  const { removeFromCart } = useContext(ThemeContext);
  const { removeAll } = useContext(ThemeContext);
  const { deleteItem } = useContext(ThemeContext);

  const cartItem = (
    <ol className="cart-items">
      {cart.map((item) => (
        <li>
          <img src={item.image} alt="" />
          <br />
          <span className="strong">title:</span>
          <br />
          {item.title} <br />
          <span className="strong">price:</span> {item.price}$<br />
          <span className="strong">quantity:</span>
          {item.quantity}
          <br />
          <br />
          <IconButton
            fontSize="default"
            color="inherit"
            onClick={() => removeFromCart(item.title)}
          >
            <RemoveIcon />
          </IconButton>{" "}
          <IconButton
            color="inherit"
            fontSize="default"
            onClick={() => addToCart(item.title)}
          >
            <AddIcon />
          </IconButton>
          <IconButton color="secondary" className="buttonTrashCart">
            <DeleteIcon onClick={() => deleteItem(item.title)} />
          </IconButton>
        </li>
      ))}
    </ol>
  );
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  return (
    <div className="cart">
      <span className="mycart">
        <br />
        <FilterVintageOutlinedIcon />
        <FilterVintageOutlinedIcon />
        <FilterVintageOutlinedIcon />
        {"  My "}
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={totalItem} color="secondary">
            <ShoppingCartIcon fontSize="large" color="inherit" />{" "}
          </StyledBadge>
        </IconButton>
        <FilterVintageOutlinedIcon />
        <FilterVintageOutlinedIcon />
        <FilterVintageOutlinedIcon />
      </span>
      {cartItem}
      <div className="total">
        <span>Total Price:</span>
        <span>{Math.abs(totalPrice.toFixed(2))}$</span>
      </div>

      <div className="actions">
        <button className="button--alt" onClick={() => removeAll()}>
          Delete Cart <DeleteIcon />
        </button>
        <button className="button">
          Payment <PaymentIcon />
        </button>
      </div>
    </div>
  );
}

export default Cart;
/*<li className= "motsar"> ({image},{title},{price})<br/><button>Remove from the cart</button></li>*/
