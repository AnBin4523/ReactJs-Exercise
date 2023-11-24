import React from "react";

export default function ShoeItem({ product, onSelect }) {
  return (
    <div className="card">
      <img className="card-img" src={product.image} alt={product.name} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark" style={{marginRight: 10}}>Add to cart</button>
        <button className="btn btn-dark" onClick={() => onSelect(product)}>
          View product
        </button>
      </div>
    </div>
  );
}
