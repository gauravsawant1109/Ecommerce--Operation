import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartProvider";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ShoppingCart;
