import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

function Details() {
  const url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${url}/${params.proId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });
  return (
    <>
      {product.length === 0 ? (
        <h1 className="text-center">loading</h1>
      ) : (
        <Product product={product} showBtn={false} />
      )}
    </>
  );
}

export default Details;
