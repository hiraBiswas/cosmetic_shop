import { Link, useLoaderData } from "react-router-dom";
import Rating from "../Rating/Rating";


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
            <div className="text-start ">
                <h1 className="text-xl py-4 font-semibold lg:text-2xl " ><span >Product Name : </span> {name}</h1>
                <h3 className="text-lg">Type : {type}</h3>
                <h3 className="py-2 text-lg">Brand : {brandName}</h3>
                <h3 className="text-lg">Price : {price}</h3>
                <div className="text-start lg:text-lg py-2 font-medium">
            Rating:
            <Rating rating={rating}></Rating> 
            <span className="ml-2"></span>
          </div>
                <Link><button className="btn bg-amber-500" >Add to cart</button></Link>
            </div>
           </div>
         
            <h3 className="text-xl text-start">
           <span className="font-bold text-xl "> Description:</span> {description}
           </h3>
           </div>
       
    );
};

   

export default Details;