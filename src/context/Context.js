import React from 'react';

//Cart Context
const CartContext = React.createContext();

export const CartProvider = CartContext.Provider
export const CartConsumer = CartContext.Consumer


//User Context
 const UserContext = React.createContext();

 export const UserProvider = UserContext.Provider
 export const UserConsumer = UserContext.Consumer

 //Order Context
 const OrderContext = React.createContext();

 export const OrderProvider = OrderContext.Provider
 export const OrderConsumer = OrderContext.Consumer
 
export { CartContext , UserContext,  OrderContext  } 