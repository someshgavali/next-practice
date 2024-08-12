"use client";
import React from "react";

const ProductPage = ({ price }) => {
  console.log(price);
  return (
    <div>
      <button onClick={() => alert(price)}> Click Me</button>
    </div>
  );
};

export default ProductPage;
