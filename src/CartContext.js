import React from 'react';


//  export const CartContext = React.createContext();

//  export const CartProvider = (props) => {
// 	 const [cart, setCart] = useState({});

// 		return (
// <CartContext.Provider value={[cart, setCart]}>
// 	{props.children}
// </CartContext.Provider> 
// )
//  }


const CartContext = React.createContext();

export const CartProvider = CartContext.Provider
export const CartConsumer = CartContext.Consumer

 export { CartContext } 

