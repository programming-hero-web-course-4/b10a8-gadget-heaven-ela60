import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); 
    const [cartCount, setCartCount] = useState(0);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
        setCartCount(prevCount => prevCount + 1);
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        setCartCount(prevCount => Math.max(prevCount - 1, 0));
    };

    const addToWishlist = (item) => {
        setWishlist(prevWishlist => [...prevWishlist, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, cartCount, addToCart, removeFromCart, wishlist, addToWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
