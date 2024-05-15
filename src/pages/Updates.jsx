import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthProvider } from "../provider/AuthContext";


const Updates = () => {

    const {user}=useContext(AuthProvider)
    const navigate=useNavigate()
    const [updatesQuery,setUpdatesQuery]=useState()
    // const {boycott_reason,brand_name,product_image_url,product_name,query_title}=updatesQuery
    const {id}=useParams()
    // console.log('iddd:',id)
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const {data} = await axios(`${import.meta.env.VITE_API_KEY}/query/${id}`);
            //    setMyReco(data)
            setUpdatesQuery(data)
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
           
          };
          fetchData()
    },[id])
    console.log(updatesQuery)

    const handleAddQuery=async e=>{
        e.preventDefault()
        const form=e.target
        const product_name=form.productname.value
        const brand_name=form.brandname.value 
        const product_image_url=form.productimagurl.value 
        const query_title =form.querytitle.value
        const boycott_reason =form.boycotting.value
        const user_email=user?.email
        const user_name=user?.displayName
        const currentDate=new Date().toLocaleString()
        const recommendationCount=updatesQuery?.recommendationCount
        const user_img=user?.photoURL
      
        const query={product_name,
            brand_name,
            product_image_url,
            query_title,
            boycott_reason,user_email,user_name,currentDate,recommendationCount,user_img}
            console.log(query)

        // console.log({product_name,
        //     brand_name,
        //     product_image_url,
        //     query_title,
        //     boycott_reason})
            try{
                const {data}=await axios.patch(`${ import.meta.env.VITE_API_KEY}/query/${id}`,query)
                console.log(data)
                // navigate('/myquery')
        
            }catch (error){
                console.log(error)

            }

    }
    return (
        <div  className="px-12 py-28">

            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form onSubmit={handleAddQuery} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Updates Queries</p>
				<p className="text-xs">Alternative uses refer to the ability to see or imagine different functions or purposes for common objects beyond their intended use.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Product Name</label>
					<input name="productname" type="text" defaultValue={updatesQuery?.product_name} placeholder="Product Name" className="w-full rounded-md bg-blue-100" required />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Brand Name</label>
					<input name="brandname" type="text" placeholder="Brand Name" defaultValue={updatesQuery?.brand_name} className="w-full rounded-md bg-blue-100" required />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Product Image-URL
</label>
					<input name="productimagurl" defaultValue={updatesQuery?.product_image_url} type="text" placeholder="Image URL" className="w-full rounded-md bg-blue-100"  data-temp-mail-org="0" required />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Query TItle
</label>
					<input name="querytitle" defaultValue={updatesQuery?.query_title}  type="text" placeholder="Query TItleL" className="w-full rounded-md bg-blue-100"  data-temp-mail-org="0"  required/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Boycotting Reason Details
</label>
					<input name="boycotting" defaultValue={updatesQuery?.boycott_reason} type="text" placeholder="Boycotting Reason " className="w-full h-12 rounded-md bg-blue-100"  data-temp-mail-org="0" required />
				</div>
				
			
				
				
				
			</div>
            <div className="relative">
            <button  className="  px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
            Updates Querie
</button>
            </div>
		</fieldset>
		
	</form>
</section>
        </div>
    );
};

export default Updates;