import axios from "axios";
import { useEffect, useState } from "react";
import Latest from "./Latest";


const LatestQuery = () => {
  const [letest, setLetest] = useState([]);
  console.log(letest);

  // const {boycott_reason,product_name,brand_name,recommendationCount,currentDate,user_name,user_email,query_title,product_image_url,_id,
  //     user_img}=letest
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_KEY}/letestquery`
        );
        setLetest(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* <Latest letest={letest}></Latest> */}
        {
            letest.map(letes=><Latest key={letes._id} letes={letes}></Latest>)
        }
      
    </div>
  );
};

export default LatestQuery;
