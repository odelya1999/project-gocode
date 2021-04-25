import Product from './Product';
import './Products.css';

function Products({products}) {

   


    return (
        
        <section className="products">
            {products.map(({id, image, description, title, price}) => 
            <Product 
            key={id} 
            image= {image}
            description={description}
            title={title}
            price={price}
            />
            )}
        </section>
    );
}

export default Products;