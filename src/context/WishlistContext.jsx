import React, { createContext, useContext, useState, useEffect } from 'react';


const WishlistContext = createContext();


export const WishlistProvider = ({ children }) => {
    
    const [wishlistItems, setWishlistItems] = useState(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

   
    const addToWishlist = (item) => {
        setWishlistItems((prevItems) => {
           
            if (!prevItems.some((wishlistItem) => wishlistItem.product_id === item.product_id)) {
                const updatedWishlist = [...prevItems, item];
                
                
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                return updatedWishlist;
            }
            return prevItems; 
        });
    };

  
    const removeFromWishlist = (itemId) => {
        setWishlistItems((prevItems) => {
            const updatedWishlist = prevItems.filter(item => item.id !== itemId);
            
          
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

  
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, setWishlistItems,removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};


export const useWishlist = () => {
    return useContext(WishlistContext);
};
