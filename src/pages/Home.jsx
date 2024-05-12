import Banner from "../components/Banner";
import Phones from "../components/Phones";
import Slideer from "../components/Slideer";


const Home = () => {
    return (
        <div className="container mx-auto px-4">
          <div className="mt-12">
          <Slideer></Slideer>
          </div>
          <div className=" mt-28 md:mt-48  ">
            <Banner></Banner>
          </div>
          <div>
            query section
          </div>
          <div className="mt-28 md:mt-48">
            <Phones></Phones>
          </div>
            
        </div>
    );
};

export default Home;