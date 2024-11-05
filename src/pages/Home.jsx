
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

const Home = () => {
    const categories = useLoaderData(); 

    return (
        <div>
            {/* banner */}
            <Banner />

            {/* categories tab section */}
           

            {/* Dynamically render products for selected category */}
            <Outlet context={{ categories }} /> {/* Pass categories via Outlet context */}
        </div>
    );
};

export default Home;
