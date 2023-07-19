import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const getProduct = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategory = () => {
    fetch(`${url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  return (
    <>
   <div className="btns">   <button
        onClick={() => {
          getProduct();
        }}
        className="btn"
      >
        All
      </button>
      {category.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            getProductInCategory(cat);
          }}
          className="btn"
          type="submit"
        >
          {cat}
        </button>
      ))}</div>
      <div className="product-list">
        {products.map((product) => (
          <Product product={product} key={product.id} showBtn={true} />
        ))}
      </div>
    </>
  );
}

export default Products;
