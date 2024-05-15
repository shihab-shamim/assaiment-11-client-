import axios from "axios";
import { useEffect, useState } from "react";


const AllRecommendation = ({id}) => {
    console.log(id)
    const [recommendation , setRecommendation]=useState([])
    console.log(recommendation)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_KEY}/recommendation/${id}`);
            // const data = await response.json();
            setRecommendation(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [id]);

    return (
        <div>
            <h2 className="text-center">All recommendation</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    recommendation.map(p=><>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={p?.recommendationUrl} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{p?.recommendationName}</h2>
                      <p>{p?.recommendationTitle}</p>
                      <h2><span className="text-red-500">Reason:</span> {p?.recommendationReason}</h2>
                      <div>
                      <div className="flex items-center mt-8 space-x-4">
   
    <div>
        <h3 className="text-sm font-medium">{p?.recommenderName}</h3>
        <time dateTime="2021-02-18" className="text-sm dark:text-gray-600">Post Date : {p?.currentDate.split(',').join(' Time')}</time>
    </div>
</div>

                      </div>
                    </div>
                  </div></>)
                }
            </div>
            
        </div>
    );
};

export default AllRecommendation;