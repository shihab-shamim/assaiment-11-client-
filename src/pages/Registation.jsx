import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../provider/AuthContext";
import Swal from "sweetalert2";


const Registation = () => {
    const {createUser,updateUserProfile}=useContext(AuthProvider)
    const navigate=useNavigate()

    const handleRegistration = e=>{
        e.preventDefault()
        const form = e.target
        const name=form.name.value
        const photo=form.photo.value
        const email=form.email.value
        const password=form.pass.value
        console.log({name,photo,email,password})
        if(password.length < 6){
           return Swal.fire({
                title: "Password",
                text: "your password must be 6 character",
                icon: "info",
              });
        }
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            updateUserProfile(result.user,name,photo)
            .then(result=>{
                Swal.fire({
                    icon: "success",
                    title: "Successfully",
                    text: "your account create successfully",
                    
                  });
                navigate('/')
                console.log(result)
            })
            .catch(error=>console.log(error))
        
        })
        .catch(error=>console.log(error))

    }
    return (<div className="px-4">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md bg-registration bg-no-repeat px-12 py-14 bg-cover mt-12  md:mt-28 lg:mt-48 ">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">Create a New Account</h2>

    <form onSubmit={handleRegistration}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                <input id="username" type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Photo URL</label>
                <input id="emailAddress" type="text" name="photo" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Email</label>
                <input id="password" type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                <input id="password" type="password" name="pass" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

           
        </div>
        <div className="mt-6 ">
        <p className="text-xl text-center dark:text-gray-600"> Have a Account
		<Link rel="noopener noreferrer" className="focus:underline hover:underline" to='/login'>Sign in here</Link>
	</p>
        </div>

        <div className="flex justify-end mt-6">
              <button className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Registration</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
        </div>
    </form>
</section>
    </div>
        

 

            
       
    );
};

export default Registation;