import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../provider/AuthContext";

const Navbar = () => {
    const {user,logOut}=useContext(AuthProvider)
    const [theme, setTheme] = useState("light");
    useEffect(() => {
      const localTheme = localStorage.getItem("theme");
  
      setTheme(localTheme);
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleLogOut=()=>{
        logOut()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
        console.log('click log out')
    }
  const navlink = (
    <>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl'>Home</NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/queries'>Queries</NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/forme'>Recommendations For Me</NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/myquery'>My Queries </NavLink>
      <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/myrecommendation'>My recommendations  </NavLink>
      {user? <button onClick={handleLogOut} className="btn mt-0 md:ml-12">log-Out</button>:  <NavLink className='md:ml-4 text-[#34495e] font-noto font-medium text-xl' to='/login'>Log-in </NavLink>}

    </>
  );
 
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
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
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50"
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
      <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              checked={theme === "dark" ? true : false}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
