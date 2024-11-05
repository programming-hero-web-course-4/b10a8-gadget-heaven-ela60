

const NewPage = () => {
  return (
    <div className="bg-[#f3f4f6] text-gray-800 min-h-screen p-4 md:p-8 lg:p-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9538E2] mb-4 text-center">
          Welcome to Our New Up Coming Products!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
        Always updated products are available here.Where you buy any products very reasonable price.So always focus this website and buy your favorites products. 
        </p>

        
        <div className="space-y-8 md:space-y-12">
          <section className="p-6 bg-white shadow-lg rounded-lg text-center md:text-left">
            <h2 className="text-2xl text-center font-semibold text-[#9538E2] mb-4">Apple Watch Ultra 2</h2>
                      <div className="text-center" >
                          <img src="https://i.ibb.co.com/sm9G1S6/71-R2-Lf-Mrl-FL-AC-SL1500.jpg" alt="" className="w-[300px] text-center mx-auto" />
            </div>
          </section>

          <section className="p-6 bg-white shadow-lg rounded-lg text-center md:text-left">
            <h2 className="text-2xl text-center font-semibold text-[#9538E2] mb-4">Apple 16-inch MacBook Pro</h2>
                      <div>
                          <img src="https://i.ibb.co.com/w4SpMxc/dsc09975-2.webp" alt="" />
            </div>
          </section>

          <section className="p-6 bg-white shadow-lg rounded-lg text-center md:text-left">
            <h2 className="text-2xl text-center font-semibold text-[#9538E2] mb-4">Iphone 16 pro max</h2>
                      <div className="text-center">
            <img src="https://i.ibb.co.com/1vMVdkM/500-333.jpg" alt="" className="mx-auto"/>
           </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
