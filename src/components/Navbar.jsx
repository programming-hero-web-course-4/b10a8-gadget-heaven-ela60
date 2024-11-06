import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import { useWishlist } from "../context/WishlistContext"; 
import { useState } from "react";

const Navbar = () => {
  const { cartItems } = useCart(); 
  const { wishlistItems } = useWishlist(); 
  const cartCount = cartItems.length; 
  const wishlistCount = wishlistItems.length; 
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarBackgroundColor = location.pathname === '/' ? '#9538E2' : 'white text-black';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav 
        className="py-4 px-4 md:px-10 lg:px-[82px] lg:mx-[82px]" 
        style={{ backgroundColor: navbarBackgroundColor }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-black">
            Gadget Heaven
          </Link>

         
          <div className="hidden md:flex space-x-8 text-lg font-bold text-black">
            <Link to="/" className="hover:text-[#9538E2]">Home</Link>
            <Link to="/statics" className="hover:text-[#9538E2]">Statics</Link>
            <Link to="/dashboard" className="hover:text-[#9538E2]">Dashboard</Link>
            <Link to="/new-page" className="hover:text-[#9538E2]">New Page</Link>
          </div>

          
          <div className="hidden md:flex space-x-4">
            <Link to="/cart" className="relative hover:text-gray-300 text-black font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.5-7H6.5m0 0L5 5m1.5 8L9 21m-4-8H3" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{cartCount}</span>
              )}
            </Link>
            <Link to="/wishlist" className="relative hover:text-gray-300 text-black font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21C6.48 15.36 3 12.28 3 8.5 3 5.42 5.42 3 8.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.48 6.86-9 12.5z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{wishlistCount}</span>
              )}
            </Link>
          </div>

         
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#9538E2] text-white px-4 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={toggleMobileMenu} className="block">Home</Link>
            <Link to="/statics" onClick={toggleMobileMenu} className="block">Statics</Link>
            <Link to="/dashboard" onClick={toggleMobileMenu} className="block">Dashboard</Link>
            <Link to="/new-page" onClick={toggleMobileMenu} className="block">New Page</Link>
            <div className="flex space-x-4 mt-4">
              <Link to="/cart" onClick={toggleMobileMenu} className="relative hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.5-7H6.5m0 0L5 5m1.5 8L9 21m-4-8H3" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{cartCount}</span>
                )}
              </Link>
              <Link to="/wishlist" onClick={toggleMobileMenu} className="relative hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21C6.48 15.36 3 12.28 3 8.5 3 5.42 5.42 3 8.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.48 6.86-9 12.5z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{wishlistCount}</span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
