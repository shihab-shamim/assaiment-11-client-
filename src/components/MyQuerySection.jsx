import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext, { AuthProvider } from "../provider/AuthContext";


const MyQuerySection = ({query,handleDelete}) => {
    const {user}=useContext(AuthProvider)
    const {boycott_reason,product_name,brand_name,recommendationCount,currentDate,user_name,user_email,query_title,product_image_url,_id,
        user_img}=query
    return (
        <div>
             <div className="card card-side bg-base-100 shadow-xl px-4">
        <figure><img src={product_image_url} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{query_title}</h2>
          <p>Alternative reason : {boycott_reason}</p>
          <div className="">
            <h1>Product Name : {product_name}</h1>
            <h2>Brand Name : {brand_name}</h2>
          </div>
          <div>
            <h2>Post Date: {currentDate.split(',').join('  Time:')}</h2>
            <h3>Recommendation Count : {recommendationCount}</h3>
          </div>
          <div>
          <div className="flex space-x-4">
  
    <img alt="" src={
user_img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />


    <div className="flex flex-col space-y-1">
      
        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user_name}</a>
        
        
        <span className="text-xs dark:text-gray-600">{user_email}</span>
    </div>
</div>

          </div>
         
        </div>
      </div>
      <div className="card-actions ">
            <Link to={`/queries/${_id}`} className="btn btn-primary">View Details</Link>
            <Link to={`/update/${_id}`} className="btn btn-primary">Update</Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
          </div>
           
            
        </div>
    );
};

export default MyQuerySection;