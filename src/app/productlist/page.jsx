"use client";
import { useState, useEffect } from "react";
import Product from "./product";

const ProductListPage = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductsData(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  console.log("productsData", productsData);

  return (
    <div>
      <h1>Product List</h1>
      {productsData.length > 0 ? (
        <ul>
          {productsData.map((product) => (
            <>
              <li key={product.id}>
                {product.title}
                <br />
                {product.price}
              </li>
              <Product price={product.price} />
              <br />
            </>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductListPage;
