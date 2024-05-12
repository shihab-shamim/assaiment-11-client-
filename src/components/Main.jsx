import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Main = () => {
    return (
        <div>
            {/* navbar section */}
            <Navbar></Navbar>

            {/* outlet */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;