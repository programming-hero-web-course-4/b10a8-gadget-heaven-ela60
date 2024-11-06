import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

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

const Details = () => {
    const product = useLoaderData();
    const { addToCart } = useCart();
    const { addToWishlist, wishlistItems } = useWishlist();

    
    const [isInWishlist, setIsInWishlist] = useState(false);

    
    useEffect(() => {
        setIsInWishlist(wishlistItems.some(item => item.product_id === product.product_id));
    }, [product, wishlistItems]);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.product_title} added to cart!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleAddToWishlist = () => {
        if (!isInWishlist) {
            addToWishlist(product);
            toast.info(`${product.product_title} added to wishlist!`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <>
            <ToastContainer />

            <div className="hero bg-[#9538E2] h-[340px]">
                <div className="hero-content text-center">
                    <div className="max-w-md md:-mt-20">
                        <h1 className="text-xl lg:text-5xl font-bold">Product Details</h1>
                        <p className="py-6">Explore the latest gadgets...</p>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col items-center  md:-mt-40">
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden  max-w-md md:max-w-[750px] md:h-[400px]">
        
       
    <div className="md:w-1/2 p-4 overflow-hidden">
                        <img
                            src={product.product_image}
                            alt={product.product_title}
                            className="w-full md:h-[360px] object-cover  rounded-lg"
                        />
                    </div>

      
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold">{product.product_title}</h2>
            <p className="text-lg font-semibold text-gray-700">
                Price: ${product.price}
            </p>
            <p className="text-sm text-gray-600">
                {product.description || "Description not available."}
            </p>

            
            <div>
                <h3 className="font-bold text-sm">Specifications:</h3>
                <ul className="list-disc ml-5 text-gray-500">
                    {product.specification?.length > 0 ? (
                        product.specification.map((spec, index) => (
                            <li key={index} className="text-sm">{spec}</li>
                        ))
                    ) : (
                        <li className="text-sm">No specifications available.</li>
                    )}
                </ul>
            </div>

           
            <div>
                <h3 className="font-bold text-sm ">Rating ⭐</h3>
                <StarRating rating={product.rating} />
            </div>

          
            <div className="flex flex-col md:flex-row gap-2 md:-mt-4  ">
                <button
                    onClick={handleAddToCart}
                    className="btn rounded-3xl bg-[#9538E2] text-white px-3 py-1 text-sm"
                >
                    Add to Cart 🛒
                </button>
                
                <button 
                    onClick={handleAddToWishlist} 
                    className={`btn rounded-3xl ${isInWishlist ? "bg-gray-300" : "bg-[#9538E2]"} text-white px-3 py-1 text-sm`} 
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
