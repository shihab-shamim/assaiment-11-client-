import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AuthProvider } from "../provider/AuthContext";
import axios from "axios";
const ReccomendationForMe = () => {
    const {user}=useContext(AuthProvider)
    const [forMe,setForMe]=useState()
    console.log(forMe)
    useEffect(() => {
        
    
        fetchData();
      }, [user?.email]);
      const fetchData = async () => {
        try {
          const {data} = await axios(`${import.meta.env.VITE_API_KEY}/recommendationforme/${user?.email}`);
        //    setMyReco(data)
        setForMe(data)
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  return (
    <div className="container mx-auto px-4 min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-5xl text-orange-400 font-semibold italic">
          Recommendation For Me{" "}
        </h1>

        <Marquee play={true} pauseOnHover={true}>
          <p className="text-2xl mt-6">
            Introduction and statement of recommendation.
          </p>
        </Marquee>
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th>Name</th>
        <th>Title</th>
        <th>Recommender Name</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        forMe?.map(me=><><tr>
            <th>
              {/* <label>
                <input type="checkbox" className="checkbox" />
              </label> */}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={me?.recommendationUrl} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{me?.recommendationName}</div>
                  {/* <div className="text-sm opacity-50">United States</div> */}
                </div>
              </div>
            </td>
            <td>
              {me?.recommendationTitle.slice(0,20)}
            </td>
            <td>{me?.recommenderName}</td>
            <th>
              <button className="btn btn-ghost btn-xs">{me?.currentDate.split(',')[0]}</button>
            </th>
          </tr></>)
      }
      {/* row 2 */}
    
      {/* row 3 */}
  
      {/* row 4 */}
 
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default ReccomendationForMe;
