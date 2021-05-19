import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

function ProductDetails() {
  const { id } = useParams();
  const [infData, setInfData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfData(data);
      });
  }, [id]);
  return (
    <div>
      <Link to="/">
        <HighlightOffRoundedIcon />
      </Link>
      <h1>{infData.title}</h1>
      <img src={infData.image} alt={infData.title} width="300" />
      <p>Price: ${infData.price}</p>
      <p>{infData.description}</p>
    </div>
  );
}
export default ProductDetails;
