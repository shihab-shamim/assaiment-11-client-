

const ProductCard = ({img,email,name}) => {
    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg ">
            <div className="w-1/3 bg-cover" style={{backgroundImage: `url(${img})`}}></div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 ">{name}</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{email}</p>

                
            </div>
        </div>
    );
}

export default ProductCard;
