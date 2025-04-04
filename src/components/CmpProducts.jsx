import React, { Component } from "react";
import CmpProduct from "./CmpProduct";

class CmpProducts extends Component {
  render() {
    const { products } = this.props; // Extraemos productos desde props
    // Validamos si no hay productos
    if (!products || products.length === 0) {
      return <p>No hay productos disponibles.</p>;
    }
    return (
      <div>
        <h2>Lista de Productos</h2>
        {products.map((product) => (
          <CmpProduct key={product.id} {...product} />
        ))}
      </div>
    );
  }
}

export default CmpProducts;
