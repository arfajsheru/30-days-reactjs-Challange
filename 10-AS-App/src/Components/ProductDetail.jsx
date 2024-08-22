import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "../Data/data";
import Product from "./Product";
const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [realatedProduct, setRealatedProduct] = useState([])

  useEffect(() => {
    const filterItems = items.filter((p) => p.id == id);
    setProduct(filterItems[0]);

    const relatedProducts = items.filter((prd) => prd.category === product.category );
    setRealatedProduct(relatedProducts)

  }, [id,product.category]);

  return (
    <>
    <div className="container">
      <div className="item-img">
        <img src={product.imgSrc} alt="" />
      </div>
      <div className="text-center">
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-3">{product.price} ₹</button>
        <button className="btn btn-warning">Add to card</button>
      </div>
    </div>
    <h1 className="text-center" >Realted Products</h1>
    <Product items={realatedProduct} />
    </>
  );
};

export default ProductDetail;
