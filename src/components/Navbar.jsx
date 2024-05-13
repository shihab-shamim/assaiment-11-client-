import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../provider/AuthContext";

const Navbar = () => {
    const {user,logOut}=useContext(AuthProvider)

    const handleLogOut=()=>{
        logOut()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
        console.log('click log out')
    }
  const navlink = (
    <>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl'>Home</NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl'>Queries</NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl'>Recommendations For Me</NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/myquery'>My Queries </NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl'>My recommendations  </NavLink>
      {user? <button onClick={handleLogOut} className="btn mt-0 md:ml-12">log-Out</button>:  <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/login'>Log-in </NavLink>}

    </>
  );
  return (
    <div className="container navbar bg-base-100 mx-auto px-4 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {navlink}
          </ul>
        </div>
        <a className="cursor-pointer ">
          <img
            className="w-[75px] md:w-[100px] lg:w-full"
            src={"https://i.ibb.co/6rHkjrg/logo.png"}
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
