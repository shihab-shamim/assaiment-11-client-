import Banner from "../components/Banner";
import Expline from "../components/Expline";
import LatestQuery from "../components/LatestQuery";
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
            <div className="text-center bg-gray-600 mt-12 lg:mt28 ">
              <h2 className="text-2xl text-gray-800 font-bold px-4 py-6 rounded-sm">Latest update</h2>
            </div>
          <div className="mt-12 md:mt-28 lg:mt-48">
          <LatestQuery></LatestQuery>
          </div>
          </div>
          <div className="mt-28 md:mt-48">
            <Phones></Phones>
          </div>

          <div className="mb-12 md:mb28 lg:mb-48">
            <Expline></Expline>
          </div>
            
        </div>
    );
};

export default Home;