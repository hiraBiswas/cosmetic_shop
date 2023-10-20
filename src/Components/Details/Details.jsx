import { useLoaderData } from "react-router-dom";


const Details = () => {
    const productDetails = useLoaderData();
    console.log(productDetails)
    const {name, rating, price, brandName, description, image, type}=productDetails
    return (
        <div className="mt-5 lg:mt-10">
           <div className="p-5 lg:p-12 flex flex-col gap-10 lg:flex-row lg:items-center ">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="text-start">
                <h1 className="text-xl font-semibold lg:text-2xl " ><span >Product Name : </span> {name}</h1>
                <h3>Type : {type}</h3>
                <h3>Brand : {brandName}</h3>
                <h3>Price : {price}</h3>
                <h3>Rating : {rating}</h3>
            </div>
           </div>
        </div>
    );
};

   

export default Details;