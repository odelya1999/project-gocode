import './Product.css'

function Product({image, description, title, price}){
    return(
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
        </div>
    );
}

export default Product;
