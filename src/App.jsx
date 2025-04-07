import React from "react";
import Greetings from "./components/Greetings";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h1>Welcome to our store!</h1>
      <Greetings name="John Hamilton" />
      <h2>Products</h2>
        <Products name="iPhone 14" price="$999" />
        <Products name="iPhone 14 Pro" price="$1099" />
        <Products name="iPhone 14 Pro Max" price="$1199" />
    </div>
  ); // Created 3 different types of Phones
}
export default App;