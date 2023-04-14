import React from "react";
import Product from "@/components/Product";

function ProductFeed({ products }) {
  return (
    <div>
      <h1>Product here...</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
