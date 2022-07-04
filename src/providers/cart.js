import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log(cart)
    }

    const removerFromCart = (item) => {
        const newCart = cart.filter((tshirts) => tshirts.name !== item) ;
        setCart(newCart);
    }
    //console.log(cart)

    return (
        <CartContext.Provider value={{ cart, addToCart, removerFromCart}}>
            {children}
        </CartContext.Provider>
    )
}