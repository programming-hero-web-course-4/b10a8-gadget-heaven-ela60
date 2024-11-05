import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#9538E2] text-primary-content py-12 container mx-[64px] mr-12">
      <aside>
        <Link to="/" className="text-2xl font-bold text-black">
          Gadget Heaven
        </Link>
        <p className="font-bold text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
       
      </aside>
      <nav>
        <div className="grid grid-cols-3 gap-4 text-gray-400">
          <div>
            <h3 className="text-black font-bold text-[18px] mb-3">Services</h3>
            <p>Product Support </p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
          </div>
          <div>
            <h3 className="text-black font-bold text-[18px] mb-3">Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <div>
            <h3 className="text-black font-bold text-[18px] mb-3">Legal</h3>
            <p>Team of Service </p>
            <p>Privacy Policy</p>
            <p>Cooking Policy</p>
           
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
