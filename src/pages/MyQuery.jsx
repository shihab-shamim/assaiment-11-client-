import { useContext, useEffect, useState } from "react";
import AddQuery from "../components/AddQuery";
import MyQuerySection from "../components/MyQuerySection";
import QureyBanner from "../components/QureyBanner";
import { AuthProvider } from "../provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";


const MyQuery = () => {
    const {user}=useContext(AuthProvider)
    const [myQuery,setMyQuery]=useState([])
    console.log(myQuery)
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_API_KEY}/myqueries/${user?.email}`);
        
        setMyQuery(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
       
    
        fetchData();
      }, [user?.email]);
      const handleDelete =async (id) =>{
        console.log(id)
        Swal.fire({
          title: "Are you sure?",
          text: "yes or cancel",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes"
        }).then(async(result) => {
          if (result.isConfirmed) {
            try{
              const {data} = await axios.delete(`${import.meta.env.VITE_API_KEY}/myqueries/${id}`);
              console.log(data)
    
            }
            catch (error) {
              console.error('Error fetching data:', error);
            }
            fetchData();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
        

      }

    return (
        <div className="container mx-auto px-4 min-h-[60vh]">
            <QureyBanner></QureyBanner>
            
            <div className="mt-12 "> <h2 className="text-center text-xl font-bold"> My <span className="text-green-400">Query Section</span> </h2></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
                myQuery.map(query=><MyQuerySection key={query?._id} query={query} handleDelete={handleDelete}></MyQuerySection>)
            }
        </div>
            
            
        </div>
    );
};

export default MyQuery;