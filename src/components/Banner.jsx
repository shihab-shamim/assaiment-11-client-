import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero px-28 md:px-48 py-28 md:py-48 bg-no-repeat " style={{backgroundImage: 'url(https://i.ibb.co/YXBf3Wv/stock-vector-mega-sale-special-offer-stage-podium-percent-stage-podium-scene-with-for-award-decor-el.jpg) '}}>
  <div className=" bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Find your product & post your opinion</h1>
      <p className="mb-5">Proactively target turnkey process improvements with visionary total.</p>
      <Link  className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    <span className="relative z-20 flex items-center text-sm">
      
        <Link to='/queries'>All Queries Page</Link>
        {/* path:'/queries', */}

    </span>
</Link>

    </div>
  </div>
</div>
    );
};

export default Banner;