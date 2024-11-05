import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import { CartProvider } from './context/CartContext'; // Import the CartProvider
import { WishlistProvider } from './context/WishlistContext'; // Import the WishlistProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={routes} />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
);
