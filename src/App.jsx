import { useState,useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import CartProvider from "./CartContext/CartProvider";
import RenderCart from "./Component/RenderCart";
import Home from "./Component/Home";
import ShoppingCart from "./Component/ShoppingCart";
import "./App.css";
import CartComponentReducer from "./CartReducer/CartComponentReducer";
import  CartReducer,{intialState } from "./CartReducer/CartReducer";
import WishList from "./WishList";



function App() {
  const [products] = useState([ 
    {
      id: 1,
      price: 20,
      name: "Samosa",
      img: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&ssl=1",
    },
    {
      id: 2,
      price: 10,
      name: "Kachori",
      img: "https://s4.scoopwhoop.com/ach/food/13.jpg",
    },
    {
      id: 3,
      price: 10,
      name: "Pakoda",
      img: "https://tse4.mm.bing.net/th?id=OIP.Day9IKpifvFgpkOKn9VJVgHaE7&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      price: 10,
      name: "Chinese",
      img: "https://tse1.mm.bing.net/th?id=OIP.yokku-p7TeSpUFMMk4o6KQHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      price: 10,
      name: "Pav Bhaji",
      img: "http://recipes.timesofindia.com/photo/52416693.cms?imgsize=53280",
    },
    {
      id: 6,
      price: 10,
      name: "Salad",
      img: "https://hellolittlehome.com/wp-content/uploads/2022/08/garden-salad-recipe-2.jpg",
    },
  ]);
  const [state,dispatch]=useReducer(CartReducer,intialState)
  return (
    <CartProvider>
      <Router>

        <Routes>
          <Route path="/" element={<Navigate  to="/Home" />} />
          <Route path="/Home" element={<Home products={products} dispatch={dispatch} cartState={state}  wishState={state}/>} /> 
          {/* <Route path="/Home/ShoppingCart" element={<ShoppingCart />} /> */}
          <Route path="/Home/Cart" element={<CartComponentReducer products={products} dispatch={dispatch} cartState={state} />} />
          <Route path="/Home/Wish" element={<WishList products={products} dispatch={dispatch} wishState={state} />} />

          <Route path="/Cart" element={<RenderCart cartState={state} dispatch={dispatch}  />} />
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
