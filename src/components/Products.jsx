import React from "react";

// Created a function for products giving them a name and price
function Products({name, price}) {
    return (
        <div>
            <p>Product Name: {name}</p>
            <p>Product Price: {price}</p>
            <button>Add to Cart</button>
            <button>Remove from Cart</button>
            <button>Buy Now</button>
        </div>
    ); // Added buttons for each product
};
export default Products;