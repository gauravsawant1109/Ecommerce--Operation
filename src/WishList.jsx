import React, { useReducer } from 'react'


const WishList = ({wishState,dispatch}) => {
  
  console.log(wishState.wishLength,"Inwish Components length");

  
  return (
<div>
  <h2>Wish List</h2>
  <p>{wishState.wishLength == 0 ? "No Product Added" :  `Toatl Items: ${wishState.wishLength} NOS`   }</p>
  
  {/* <p>{wishState.totalPrice==0 ? "" :`Toatl Price: ₹ ${wishState.totalPrice}`}</p> */}
  {/* <ul>
    {wishState.wish.map((item)=>(
      <li key={item.id}>
        {item.name} - ₹ {item.price}
        <button onClick={()=>dispatch({type:"Remove-From-wish",payload:item})} >Remove</button>
      </li>
    ))}
  </ul> */}

  <div className="m-5 d-flex justify-content-center gap-5 flex-wrap">
        {wishState.wish.map((item) => (
          <div key={item.id}>
            <div className="card p-0" style={{ width: "13rem" }}>
              <img src={item.img} style={{height:"190px"}} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button className="btn btn-danger" onClick={() => dispatch({type:"Remove-From-wish",payload:item})}>
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

export default WishList;