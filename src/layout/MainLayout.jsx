import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

 
    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    const handleAddToWishlist = () => {
        setWishlistCount(prevCount => prevCount + 1);
    };

    return (
        <div>
          
            <Navbar 
                cartCount={cartCount} 
                wishlistCount={wishlistCount} 
            />
            <div className='min-h-[calc(100vh-232px)] py-12  container mx-auto px-12'>
                {/* Dynamic content goes here */}
                <Outlet context={{ handleAddToCart, handleAddToWishlist }} />
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;
