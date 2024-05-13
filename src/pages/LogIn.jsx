import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../provider/AuthContext";
import Swal from "sweetalert2";

const LogIn = () => {
  const location=useLocation()
  console.log(location)
  const navigate = useNavigate();
  const { googleLogIn,logInWithPassword } = useContext(AuthProvider);
  const handleLogIn=e=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    if(password.length < 6){
        return Swal.fire({
             title: "Password",
             text: "your password must be 6 character",
             icon: "info",
           });
     }
     logInWithPassword(email,password)
     .then(result=>{
        Swal.fire({
            title: "Log In successFully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(location?.pathname?location?.state:'/')
        console.log(result.user)
    })
     .catch(error=>{
        Swal.fire({
            title: "check your email & password",
            icon:"error",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
        console.log(error)
    })
    console.log({email,password})

  }
  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        Swal.fire({
          title: "Google Log In success",
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
          },
        });
        navigate(location?.pathname?location?.state:'/')
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mx-auto px-4 mt-12  md:mt-28 lg:mt-48">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md bg-log-in">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">
          Login to your account
        </h2>

        <form onSubmit={handleLogIn}>
          <div className="grid grid-cols-1 gap-6 mt-4 ">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                placeholder="your email"
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                placeholder="your password"
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleGoogle}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="text-black">Login with Google</p>
            </button>
          </div>
          <div className="mt-6 ">
            <p className="text-xl text-center dark:text-gray-600">
              Do not have account?
              <Link
                rel="noopener noreferrer"
                className="focus:underline hover:underline"
                to="/registration"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="flex justify-end mt-6">
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Log-in</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LogIn;
