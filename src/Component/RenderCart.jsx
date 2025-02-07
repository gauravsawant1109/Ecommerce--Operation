import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartProvider";

const RenderCart = ({ products,dispatch }) => {
  // const { cart, setCart } = useContext(CartContext);  


  const addToCart=(product)=>{
    console.log("Product",product);
    dispatch({ type: "ADD_TO_CART", payload: product });
    // toast.success(`${product.Name1} added to cart!`);
  }

  const wishList=(product)=>{
    console.log("Product",product);
    dispatch({ type: "WISH_LIST", payload: product });
    // toast.success(`${product.Name1} added to cart!`);
  }

  return (
    <>
      <div className="m-5 d-flex justify-content-center gap-5 flex-wrap">
        {products.map((product) => (
          <div key={product.id}>
            <div className="card p-0" style={{ width: "13rem" }}>
              <img src={product.img} className="card-img-top " style={{height:"190px"}} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Add To Carts
              </button>
              <button className="btn btn-warning" onClick={() => wishList(product)}>
                WishList
              </button>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RenderCart;
