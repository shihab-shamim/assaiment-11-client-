import { useContext, useEffect, useState } from "react";
import RecommendationTable from "../components/RecommendationTable";
import { AuthProvider } from "../provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";


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
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes"
        }).then(async(result) => {
          if (result.isConfirmed) {
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
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });

        // 
       


      }


    return (
        <div className="container mx-auto px-4 min-h-[60vh]">
            <h2 className="text-center text-4xl text-orange-300">My Recommendation </h2>


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