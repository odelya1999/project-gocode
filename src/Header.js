import './Header.css';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';



function Header({myChoice, categories}){

  function valuetext(value) {
    return `${value}°C`;
  }


    const [value, setValue] = useState([20, 37]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return(
      <nav className="product-filter">
      <h1>ZARA</h1>  
      <div className="root">
      <Slider 
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      </div>

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