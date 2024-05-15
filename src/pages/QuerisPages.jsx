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
    const [columns,setColumns]=useState(3)
    const handleTwo=()=>{
      setColumns(2)
      
    }
    const handleThree=()=>{
      setColumns(3)

    }
    const handleSearch=async (e)=>{
      e.preventDefault()
      const form = e.target
      const name=form.name.value 
      console.log(name)
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_KEY}/search/${name}`);
          const data = await response.json();
          setQueries(data);
          console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
      // /search/:name
      
    }
    return (
        <div className="container mx-auto min-h-[60vh]">
           <div className="text-center bg-gray-600 mt-12 lg:mt28 ">
              <h2 className="text-2xl text-gray-800 font-bold px-4 py-6 rounded-sm">All Queries</h2>
            </div>
           <div className="flex gap-6">
           <button onClick={handleTwo} className="btn">2 Columns </button>
            <button  onClick={handleThree} className="btn">3 Columns </button>
           </div>
           <div className="w-1/2"><form onSubmit={handleSearch} >
           <label className="input input-bordered flex items-center gap-2">
  <input type="text" name='name' className="grow w-1/2" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
<button className="btn">Search</button>
           </form>
</div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-14 mt-12`}>
            {
                queries.map(querie=><RenderQuerie key={querie._id} querie={querie} ></RenderQuerie>)

            }
          </div>
            
        </div>
    );
};

export default QuerisPages;