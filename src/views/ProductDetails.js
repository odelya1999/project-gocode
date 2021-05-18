import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [infData, setInfData] = useState([]);
<<<<<<< HEAD

=======
>>>>>>> ea38ba3b3d3fa27e22be5125088a8fa6f4a95dbf
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfData(data);
      });
  }, [id]);
  return (
    <div>
      <h1>{infData.title}</h1>
      <img src={infData.image} alt={infData.title} width="300" />
      <p>Price: ${infData.price}</p>
      <p>{infData.description}</p>
    </div>
  );
}
export default ProductDetails;
