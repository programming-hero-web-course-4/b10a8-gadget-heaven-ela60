import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Dashboard = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [activeTab, setActiveTab] = useState("Cart");
  const [sortedCartItems, setSortedCartItems] = useState(cartItems);


  const totalCartPrice = cartItems.reduce((total, item) => total + item.price, 0);

 
  const handleTabSwitch = (tab) => setActiveTab(tab);

 
  const sortByPriceDesc = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedCartItems(sortedItems);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="bg-[#9538E2] ">
      <div className="text-center mb-8 bg-[#9538E2]">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-200">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row justify-center mb-4 space-x-4">
        <button
          onClick={() => handleTabSwitch("Cart")}
          className={`py-2 px-4 rounded-lg font-semibold ${
            activeTab === "Cart" ? "bg-[#9538E2] text-white" : "bg-gray-200"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleTabSwitch("Wishlist")}
          className={`py-2 px-4 rounded-lg font-semibold ${
            activeTab === "Wishlist" ? "bg-[#9538E2] text-white" : "bg-gray-200"
          }`}
        >
          Wishlist
        </button>
      </div>

     </div>
     
      {activeTab === "Cart" ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Cart Items</h2>
            <button
              onClick={sortByPriceDesc}
              className="text-white bg-[#9538E2] py-1 px-3 rounded-lg"
            >
              Sort by Price
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedCartItems.map((item) => (
              <div key={item.id} className="p-4 bg-white shadow-lg rounded-lg">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2"/>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <h3 className="text-lg font-bold">Total Price: ${totalCartPrice}</h3>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Wishlist Items</h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="p-4 bg-white shadow-lg rounded-lg">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2"/>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
