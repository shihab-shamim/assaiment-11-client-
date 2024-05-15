import { useContext, useEffect, useState } from "react";
import AddQuery from "../components/AddQuery";
import MyQuerySection from "../components/MyQuerySection";
import QureyBanner from "../components/QureyBanner";
import { AuthProvider } from "../provider/AuthContext";
import axios from "axios";


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
        try{
          const {data} = await axios.delete(`${import.meta.env.VITE_API_KEY}/myqueries/${id}`);
          console.log(data)

        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
        fetchData();

      }

    return (
        <div className="container mx-auto px-4">
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