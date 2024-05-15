import { useContext, useEffect, useState } from "react";
import RecommendationTable from "../components/RecommendationTable";
import { AuthProvider } from "../provider/AuthContext";
import axios from "axios";


const MyRecommendation = () => {
    const {user}=useContext(AuthProvider)
    const [myReco,setMyReco]=useState([])
    console.log(myReco)

    useEffect(() => {
        
    
        fetchData();
      }, [user?.email]);
      const fetchData = async () => {
        try {
          const {data} = await axios(`${import.meta.env.VITE_API_KEY}/myrecommebdation/${user?.email}`);
           setMyReco(data)
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const handleDelete=async (id,queryId)=>{
        // /table
        console.log(id)
        try {
            const {data} = await axios.delete(`${import.meta.env.VITE_API_KEY}/table/${id}`);
             console.log(data)
             fetchData();
            try{
              const {data} = await axios.put(`${import.meta.env.VITE_API_KEY}/tablequery/${queryId}`);
              console.log(data)
            }
            catch (error){
              console.log(error)
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }


      }


    return (
        <div className="container mx-auto px-4">
            <h2>My Recommendation </h2>


            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        {/* <th>Name</th>
        <th>Reason</th>
        <th>Title</th>
        <th></th> */}
      </tr>
    </thead>
    <tbody>
     {
                myReco.map(reco=> <RecommendationTable  key={reco.id} reco={reco} handleDelete={handleDelete}></RecommendationTable>)
            }
    </tbody>
    {/* foot */}
  
    
  </table>

           <div>
           {/* <RecommendationTable></RecommendationTable> */}

           
            {/* {
                myReco.map(reco=> <RecommendationTable key={reco.id}></RecommendationTable>)
            } */}
           </div>
            
        </div>
    );
};

export default MyRecommendation;