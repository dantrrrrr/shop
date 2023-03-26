import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  // console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shoping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          minima voluptate culpa animi. Voluptates aut esse perspiciatis
          blanditiis aliquam laborum voluptatum ut delectus minima repellendus
          error, ea fugit voluptatem omnis?
        </p>
      </div>
      <div className="max-w-screen-xl mx-20 grid grid-cols-4 gap-10">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
