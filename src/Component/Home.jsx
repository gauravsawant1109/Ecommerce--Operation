import React from "react";
import Navbar from "./Navbar";  // Ensure correct import path
import RenderCart from "./RenderCart";  // Ensure correct import path
import TaskManager from "./TaskManager";

const Home = ({ products,dispatch,cartState ,wishState }) => {
  return (
    <>
      <Navbar cartState={cartState} wishState={wishState} />
      <RenderCart products={products} dispatch={dispatch}/>
     {/* <TaskManager /> */}
    </>
  );
};

export default Home;
