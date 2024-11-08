import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (itemId) => { 
        setCartItems((prevItems) => prevItems.filter(item => item.product_id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
