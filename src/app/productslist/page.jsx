// Server side rendering ====>>>>>

import ProductPage from "./product";

async function productList() {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();
  return products;
}

const ProductslistPage = async () => {
  const products = await productList();
  return (
    <div>
      <h1>Products List</h1>
      {products.products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <ProductPage price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductslistPage;
