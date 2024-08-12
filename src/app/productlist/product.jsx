import React from 'react'

const Product = ({price}) => {
    console.log(price);
  return (
    <div>
      <button onClick={() => alert(price)}> Click Me</button>
    </div>
  );
}

export default Product;
