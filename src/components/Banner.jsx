const Banner = () => {
    return (
        <div className="relative hero bg-[#9538E2]">
           
            <img 
                src="https://i.ibb.co/nQyjhKH/banner.jpg"
                alt="Banner" 
                className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
            />
            
            <div className="hero-content text-center text-white relative">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessories with Gadget Heaven</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn rounded-3xl bg-white text-[#9538E2] font-bold">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
