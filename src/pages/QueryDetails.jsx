import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard ";
import AddRecommendetion from "../components/AddRecommendetion";
import AllRecommendation from "../components/AllRecommendation";


const QueryDetails = () => {
    const {id}=useParams()
    const [details,setDetails]=useState()
    // console.log(details)
    // const {user_email,user_name,,user_img,_id}=details
    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_KEY}/query/${id}`);
            // const data = await response.json();
            setDetails(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [id]);
    return (
        <div className="container mx-auto">
            <div className="card lg:card-side bg-base-100 ">
  <figure><img src={details?.product_image_url} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name : {details?.product_name}</h2>
    <p>Brand Name : {details?.brand_name}</p>
   <div>
    <h2>Title: {details?.query_title}</h2>
    <h4>Boycott Reason : {details?.boycott_reason}</h4>
   </div>
   <div className="flex gap-4">
    <h2>Recommended Count : {details?.recommendationCount}</h2>
    <p>Date : {details?.currentDate.split(',').join(' Time:')}</p>

   </div>
   <div className="ml-28 mt-6">
   <ProductCard img={details?.user_img} email={details?.user_email} name={details?.user_name}></ProductCard>
   </div>
  </div>
</div>
            <div>
            <AddRecommendetion title={details?.query_title}  id={details?._id} name={details?.product_name} userEmail={details?.user_email} userName={details?.user_name}></AddRecommendetion>
            </div>
            
            <div>
              
              <AllRecommendation id={id}></AllRecommendation>
            </div>
        </div>
    );
};

export default QueryDetails;