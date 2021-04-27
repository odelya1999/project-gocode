import { useContext } from 'react'
import ThemeContext from './context/ThemeContext'
import './Product.css'


function Product({ image, description, title, price }){
  const { addToCart } = useContext(ThemeContext)

    return(
      <>
        <div className="product-card">
          <div className="product-image">
            <img
            src = {image}
            alt = {description}
            title = {title}
            />
          </div>
          <div className="product-info">
            <h5>{title}</h5>
            <h6>{price}</h6>
          </div>
          <button onClick={()=> addToCart(title)}>Add to Cart</button>
        </div>
      </>
    );
}

export default Product;
