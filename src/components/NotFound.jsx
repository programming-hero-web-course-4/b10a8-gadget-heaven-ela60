import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg mb-4">Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="text-[#9538E2] font-semibold">Go back to Home</Link>
    </div>
);

export default NotFound;
