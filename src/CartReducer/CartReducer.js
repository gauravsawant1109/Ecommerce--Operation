import { useEffect } from "react";

export const intialState = { cart: [],wish:[], cartLength: 0, totalPrice: 0, wishtotalPrice: 0}

const CartReducer = (state, action) => {
    console.log(action.type, action.p);


    switch (action.type) {
        case "ADD_TASK" :
            return[...state,{id:Date.now(),text:action.payload,completed:false}];
        case "TOGGLE_TASK":
            return state.map(task=>
                task.id==action.payload ? {...task,completed: !task.completed}:task
            );
        case "DELETE_TASK":
            return state.filter(task=>task.id !=action.payload);
        // case "LOAD_TASK":
        //     return action.payload;
        
      
        case "ADD_TO_CART": {
            const updateCart = [...state.cart, action.payload]
            console.log(updateCart);
            const updatedTotalPrice = state.totalPrice + action.payload.price
            console.log(updatedTotalPrice);
            // const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      
            // if (existingProduct) {
            //   // Increase quantity if product already exists
            //   return state.map((item) =>
            //     item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            //   );
            // } else {
            //   // Add new product with quantity 1
            //   return [...state, { ...action.payload, quantity: 1 }];
            // }
            return {
                ...state,
                cart: updateCart,
                cartLength: updateCart.length,
                totalPrice: updatedTotalPrice,
            }
        }
        case "WISH_LIST": {
            const updateWish = [...state.wish, action.payload]
            console.log(updateWish);
            // const updatedWishTotalPrice = state.wishtotalPrice + action.payload.price
            // console.log(updatedWishTotalPrice);
            // const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      
            // if (existingProduct) {
            //   // Increase quantity if product already exists
            //   return state.map((item) =>
            //     item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            //   );
            // } else {
            //   // Add new product with quantity 1
            //   return [...state, { ...action.payload, quantity: 1 }];
            // }
            return {
                ...state,
                wish: updateWish,
                wishLength: updateWish.length,
                // totalPrice: updatedWishTotalPrice,
            }
        }case "Remove-From-wish": {
            const updateWish = state.wish.filter((item) => item.id != action.payload.id)
            console.log(updateWish);
            // const updatedTotalPrice = state.totalPrice - action.payload.price
            // console.log(updatedTotalPrice);

            return {
                ...state,
                wish: updateWish,
                wishLength: updateWish.length,
                // totalPrice: updatedTotalPrice,
            }
        }
        case "Remove-From-Cart": {
            const updateCart = state.cart.filter((item) => item.id != action.payload.id)
            console.log(updateCart);
            const updatedTotalPrice = state.totalPrice - action.payload.price
            console.log(updatedTotalPrice);

            return {
                ...state,
                cart: updateCart,
                cartLength: updateCart.length,
                totalPrice: updatedTotalPrice,
            }
        }
        default:
            return state;
    }
}

export default CartReducer