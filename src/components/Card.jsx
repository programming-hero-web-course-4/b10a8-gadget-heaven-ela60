import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_title, product_image, price, product_id } = product || {};

  return (
   
      <div className="flex relative w-full">
        <Link
          to={`/statics/${product_id}`}
          className="transition hover:scale-100 shadow-xl rounded-xl  overflow-hidden w-full"
        >
          <figure className="w-full h-52 overflow-hidden">
            <img
              className="w-full  md:h-60 rounded-xl object-cover"
              src={product_image}
              alt="product"
            />
          </figure>

          <div className="p-4">
            <h2 className="card-title">{product_title}</h2>
            <p className="py-3">Price:{price}k</p>

            <Link to={`/product/${product_id}`}>
              <button className="text-[#9538E2] font-bold border-2 border-[#9538E2] rounded-3xl p-2 hover:bg-[#9538E2] hover:text-white transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        </Link>
      </div>
   
  );
};

export default Card;
