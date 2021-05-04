import "./Cart.css";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></script>

function Cart() {
  const { cart } = useContext(ThemeContext);
  const { setCart } = useContext(ThemeContext);
  const {totalPrice } = useContext(ThemeContext);
  const { totalItem } = useContext(ThemeContext);
  const { addToCart } = useContext(ThemeContext);
  const { removeFromCart } = useContext(ThemeContext);
  const { removeAll } = useContext(ThemeContext);
  const { deleteItem } = useContext(ThemeContext);

  const cartItem =(<ol className="cart-items"> 
  {  cart.map((item) => (<li><img src={item.image} alt=""/><br/>
    <span className="strong">title:</span><br/>{item.title} <br/>
    <span className="strong">price:</span> {item.price}$<br/>
    <span className="strong">quantity:</span>{item.quantity}<br/><br/>
    <button  className="buttonCart1" onClick={()=> removeFromCart(item.title)}>-</button>
    <button  className="buttonCart2" onClick={()=> addToCart(item.title)}>+</button> 
    <button  className="buttonTrashCart" onClick={()=> deleteItem(item.title)}>Remove from cart</button>
      

    </li>))}
  </ol>)
  

  return (
    <div className="cart">
    
      <span className ="mycart"><br/>My Cart</span>
      {cartItem}
      <div className="total">
        <span>Total Amount:</span>
        <span>{Math.abs(totalPrice.toFixed(2))}$</span>
      </div>
      <div className="total">
        <span>Total Items:</span>
        <span>{totalItem}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={()=> removeAll()}>Remove All</button>
        <button className="button">Order</button>
      </div>
    </div>
  );
}

export default Cart;
/*<li className= "motsar"> ({image},{title},{price})<br/><button>Remove from the cart</button></li>*/
