

const AddRecommendetion = () => {

    return (
        <div> <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form  noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Add Recommendation</p>
                    <p className="text-xs">Emphasize qualifications and achievements rather than personal qualities</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="firstname" className="text-sm">Product Name</label>
                        <input name="productname" type="text" placeholder="Product Name" className="w-full rounded-md bg-blue-100" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">Brand Name</label>
                        <input name="brandname" type="text" placeholder="Brand Name" className="w-full rounded-md bg-blue-100" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Product Image-URL
    </label>
                        <input name="productimagurl" type="text" placeholder="Image URL" className="w-full rounded-md bg-blue-100"  data-temp-mail-org="0" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Recommendation Title
    </label>
                        <input name="querytitle"  type="text" placeholder="Recommendation Title" className="w-full rounded-md bg-blue-100"  data-temp-mail-org="0"  required/>
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Recommendation Reason Details
    </label>
                        <input name="boycotting" type="text" placeholder="Recommendation Reason " className="w-full h-12 rounded-md bg-blue-100"  data-temp-mail-org="0" required />
                    </div>
                    
                
                    
                    
                    
                </div>
                <div className="relative">
                <button  className="  px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                Add Querie
    </button>
                </div>
            </fieldset>
            
        </form>
    </section>

            
        </div>
    );
};

export default AddRecommendetion;