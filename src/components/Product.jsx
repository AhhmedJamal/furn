import React from "react";
import { Link } from "react-router-dom";

function Product({ product, showBtn }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="description">{product.description}</p>
      </div>
      <div className="det">
        <h4>price: {product.price}$</h4>
        <h6 className="card-text">{product.category}</h6>
        {showBtn && (
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary details"
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
