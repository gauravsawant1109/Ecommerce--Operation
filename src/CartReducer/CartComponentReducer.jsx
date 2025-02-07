import React, { useReducer } from 'react'


const cart = ({cartState,dispatch}) => {
  
  console.log(cartState.cartLength,"InCart Components");

  
  return (
<div>
  <h2>shopping Cart</h2>
  <p>{cartState.cartLength == 0 ?  "No Product Added" : `Toatl Items: ${cartState.cartLength} NOS` }</p>
  <p>{cartState.totalPrice==0 ? "" :`Toatl Price: ₹ ${cartState.totalPrice}`}</p>
  {/* <ul>
    {cartState.cart.map((item)=>(
      <li key={item.id}>
        {item.name} - ₹ {item.price}
        <button onClick={()=>dispatch({type:"Remove-From-Cart",payload:item})} >Remove</button>
      </li>
    ))}
  </ul> */}

  <div className="m-5 d-flex justify-content-center gap-5 flex-wrap">
        {cartState.cart.map((item) => (
          <div key={item.id}>
            <div className="card p-0" style={{ width: "13rem" }}>
              <img src={item.img} style={{height:"190px"}} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button className="btn btn-danger" onClick={() => dispatch({type:"Remove-From-Cart",payload:item})}>
                Remove
              </button>
               
              </div>
            </div>
          </div>
        ))}
      </div>


</div>
  )
}

export default cart;