import './Header.css';

function Header({myChoice, categories}){


    return(
        <nav className="product-filter">
        <h1>Jackets</h1>  
        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange= {(e)=> myChoice(e.target.value)}>
            <option value="All categories"> All categories </option>
            {categories.map((categories) =><option>{categories}</option>)}
           </select>
          </div>


         
  
          <div className="collection-sort">
            <label>Sort by:</label>
            <select >
                        <option value="id,1">Featured</option>
                        <option value="id,-1">New Arrival</option>
                        <option value="title,1">Alphabetically, A-Z</option>
                        <option value="title,-1">Alphabetically, Z-A</option>
                        <option value="price,1">Price, low to high</option>
                        <option value="price,-1">Price, high to low</option>

            </select>
           

          </div>
        </div>
      </nav>
    );
}

export default Header;