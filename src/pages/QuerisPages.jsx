import { useEffect, useState } from "react";
import RenderQuerie from "../components/RenderQuerie";


const QuerisPages = () => {
    const [queries, setQueries] = useState([]);
    console.log(queries)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_KEY}/query`);
          const data = await response.json();
          setQueries(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                queries.map(querie=><RenderQuerie key={querie._id} querie={querie} ></RenderQuerie>)

            }
          </div>
            
        </div>
    );
};

export default QuerisPages;