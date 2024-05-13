import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    return (
        <div>
            {/* navbar section */}
            <Navbar></Navbar>

            {/* outlet */}
            <Outlet></Outlet>

            {/* footer */}

            <Footer></Footer>
            
        </div>
    );
};

export default Main;