import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    const addToWishlist = (item) => {
        setWishlist(prevWishlist => [...prevWishlist, item]);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart, addToWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
