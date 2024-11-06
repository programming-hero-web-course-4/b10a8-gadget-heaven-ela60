import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { cartItems, removeFromCart,setCartItems } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const [activeTab, setActiveTab] = useState("Cart");
  const [sortedCartItems, setSortedCartItems] = useState(cartItems);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleTabSwitch = (tab) => setActiveTab(tab);

  // Sorting
  const sortByPriceDesc = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedCartItems(sortedItems);
  };

  // Handle purchase
  const handlePurchase = () => {
    setShowModal(true);
    setCartItems([]);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };
  const handleRemoveCart = (productId) => {
    removeFromCart(productId);
  };

  const handleRemoveWishlist = (productId) => {
    const updatedCartItems = wishlistItems.filter(
      (item) => item.product_id !== productId
    );

    setWishlistItems(updatedCartItems);
  };

  useEffect(() => {
    setSortedCartItems(cartItems);
  }, [cartItems]);
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="bg-[#9538E2] py-6">
        <div className="text-center mb-8 px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Dashboard
          </h1>
          <p className="text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => handleTabSwitch("Cart")}
            className={`py-2 px-4 rounded-xl font-semibold ${
              activeTab === "Cart" ? "bg-gray-200" : "bg-[#9538E2] text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabSwitch("Wishlist")}
            className={`py-2 px-4 rounded-xl font-semibold ${
              activeTab === "Wishlist"
                ? "bg-gray-200"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {activeTab === "Cart" ? (
        <div>
          <div className="flex mt-4 flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Cart</h2>
            <h3 className="text-lg font-bold">Total Cost: ${totalCartPrice}</h3>
            <button
              onClick={sortByPriceDesc}
              className="text-white bg-[#9538E2] py-1 px-3 rounded-lg mt-2 md:mt-0"
            >
              Sort by Price
            </button>
          </div>

          <div className="space-y-4">
            {sortedCartItems.map((item) => (
              <div
                key={item.product_id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white shadow-lg rounded-lg"
              >
                <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 w-full">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-full md:w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.product_title}
                    </h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-500 text-sm hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveCart(item.product_id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 mt-2 md:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center md:text-right">
            <button
              onClick={handlePurchase}
              disabled={totalCartPrice === 0}
              className={`mt-4 py-2 px-6 rounded-lg font-semibold ${
                totalCartPrice === 0
                  ? "bg-gray-400"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mt-4 font-semibold mb-4">Wishlist</h2>
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div
                key={item.product_id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white shadow-lg rounded-lg"
              >
                <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 w-full">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-full md:w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.product_title}
                    </h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-500 text-sm hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveWishlist(item.product_id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 mt-2 md:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
            <img
              src="https://i.ibb.co.com/WHq3m1N/Group.png"
              alt=""
              className="text-center mx-auto"
            />
            <h2 className="text-2xl font-bold mb-4">Payment Successfully!</h2>
            <p className="text-gray-600 mb-1">Thanks for purchasing.</p>
            <p className="text-gray-600 mb-3">Total:{totalCartPrice}</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
