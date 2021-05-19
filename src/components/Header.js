import "./Header.css";
import Slider from "@material-ui/core/Slider";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import FlareTwoToneIcon from "@material-ui/icons/FlareTwoTone";
import FilterVintageOutlinedIcon from "@material-ui/icons/FilterVintageOutlined";
import PhoneInTalkRoundedIcon from "@material-ui/icons/PhoneInTalkRounded";

function Header({ myChoice, categories }) {
  const { maxPrice, minPrice } = useContext(ThemeContext);
  const { setValue, value } = useContext(ThemeContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav className="product-filter">
      <h1>
        <FlareTwoToneIcon color="secondary" />
        <FilterVintageOutlinedIcon />
        <FlareTwoToneIcon color="secondary" />
        <FilterVintageOutlinedIcon />
        <FlareTwoToneIcon color="secondary" />
        Odelya's style
        <FlareTwoToneIcon color="secondary" />
        <FilterVintageOutlinedIcon />
        <FlareTwoToneIcon color="secondary" />
        <FilterVintageOutlinedIcon />
        <FlareTwoToneIcon color="secondary" />
      </h1>
      <span className="telephone">
        <h3>
          <br />
          <br />
          <PhoneInTalkRoundedIcon />
          053-7134187
        </h3>
      </span>
      <div className="slider">
        ~ product's range price ~
        <Slider
          color="inherit"
          max={maxPrice}
          min={minPrice}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
        />
      </div>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select onChange={(e) => myChoice(e.target.value)}>
            <option value="All categories">All categories </option>
            {categories.map((categories) => (
              <option>{categories}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
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
