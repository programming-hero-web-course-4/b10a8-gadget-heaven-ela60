import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative hero bg-[#9538E2] min-h-screen  lg:-top-[48px]">
           
           
            
           <div className="hero-content text-center lg:-mt-20 text-white relative">
  <div className="px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Upgrade Your Tech Accessories <br /> with Gadget Heaven
    </h1>
    <p className="py-4 sm:py-6 text-sm sm:text-base">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
    </p>
    <button className="btn rounded-3xl px-8 sm:px-10 md:px-12 py-2 sm:py-3 bg-white text-[#9538E2] font-bold">
              <Link to="/dashboard"
              > Shop Now</Link>
    </button>
  </div>
</div>

        </div>
    );
};

export default Banner;
