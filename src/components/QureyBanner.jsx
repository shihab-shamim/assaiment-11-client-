import { Link } from "react-router-dom";


const QureyBanner = () => {
    return (
        <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-2xl tracking-tighter font-bold">
                Post Your Products
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Find Your Alternative Product</span>
				
			</div>
			<Link to='/addquery' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"> Add Queries</Link>
		</div>
	</div>
</div>
    );
};

export default QureyBanner;