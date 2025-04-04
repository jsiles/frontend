import React from "react";
import "../App.css";
// {
//   "id": 1,
//   "name": "Coca cola",
//   "description": "bebida gaseosa",
//   "price": 5.99,
//   "stock": 5,
//   "createdAt": "2025-04-04T00:33:00.726Z",
//   "updatedAt": "2025-04-04T00:33:00.726Z"
// }
function CmpProduct({ id, name, description, price, stock }) {
  return (
    <div className="empleado-card">
      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default CmpProduct;
