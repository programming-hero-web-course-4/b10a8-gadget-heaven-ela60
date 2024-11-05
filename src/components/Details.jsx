import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-xl">★</span>
            ))}
            {hasHalfStar && <span className="text-yellow-500 text-xl">★</span>}
            {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                <span key={index} className="text-gray-300 text-xl">★</span>
            ))}
            <span className="text-gray-600 ml-2">({rating.toFixed(1)})</span>
        </div>
    );
};

const Details = ({ onAddToCart, onAddToWishlist }) => {
    const product = useLoaderData(); // Loaded product data
    const [isInWishlist, setIsInWishlist] = useState(false);

    const handleAddToCart = () => {
        toast.success(`${product.product_title} added to cart!`, { // Show toast
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleAddToWishlist = () => {
        if (!isInWishlist) {
            setIsInWishlist(true);
            toast.info(`${product.product_title} added to wishlist!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="hero bg-[#9538E2]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Product Details</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-8">
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                    <div className="md:w-1/2 p-4">
                        <img
                            src={product.product_image}
                            alt={product.product_title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>

                    <div className="md:w-1/2 p-6 space-y-4">
                        <h2 className="text-3xl font-bold">{product.product_title}</h2>
                        <p className="text-xl font-semibold text-gray-700">Price: ${product.price}</p>
                        <p>{product.description || 'Description not available.'}</p>

                        <div>
                            <h3 className="font-bold">Specifications:</h3>
                            <ul className="list-disc ml-5 text-gray-600">
                                {product.specification?.length > 0 ? (
                                    product.specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))
                                ) : (
                                    <li>No specifications available.</li>
                                )}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold">Rating:</h3>
                            <StarRating rating={product.rating} />
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={handleAddToCart}
                                className="btn rounded-3xl bg-[#9538E2] text-white px-4 py-2"
                            >
                                Add to Cart 🛒
                            </button>
                            <button
                                onClick={handleAddToWishlist}
                                className={`btn rounded-3xl ${isInWishlist ? "bg-gray-300" : "bg-[#9538E2]"} text-white px-4 py-2`}
                                disabled={isInWishlist}
                            >
                                {isInWishlist ? "Added to Wishlist" : "Add to Wishlist ♥"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
