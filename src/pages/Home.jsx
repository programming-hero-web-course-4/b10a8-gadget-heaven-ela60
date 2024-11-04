import Banner from "../components/Banner";
import Heading from "../components/Heading";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner/>
            {/* heading */}
            <Heading title={'title'} subtitle={'sub'}/>
            {/* categories tab section */}
            {/* Dynamice nested components */}
        </div>
    );
};

export default Home;