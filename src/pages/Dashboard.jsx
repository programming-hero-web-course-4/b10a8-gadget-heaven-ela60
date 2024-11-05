const Dashboard = () => {
  return (
   
      <div className="hero bg-[#9538E2] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-4 items-center justify-center">
              <button className="btn rounded-3xl text-[#9538E2] font-bold px-12">
                Cart
              </button>
              <button className="btn rounded-3xl text-[#9538E2] font-bold px-10">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
