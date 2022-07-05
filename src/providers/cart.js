import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const removerFromCart = (item) => {
        const newCart = cart.filter((itemCart) => itemCart.name !== item)
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removerFromCart}}>
            {children}
        </CartContext.Provider>
    )
}