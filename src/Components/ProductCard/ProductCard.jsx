import { Link } from "react-router-dom";


const ProductCard = ({brandProduct }) => {
    const {_id,name, brandName,price, rating, image, type}= brandProduct;
    return (
        <div>
          <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={image}/></figure>
  <div className="card-body">
    <h2 className="card-title lg:text-2xl">{name}</h2>
   <h4 className="text-start lg:text-lg font-medium"> Type : {type}</h4>
   <h4 className="text-start lg:text-lg font-medium">Brand Name : {brandName} </h4>
   <h4 className="text-start lg:text-lg font-medium">Price : {price} </h4>
   <h4 className="text-start lg:text-lg font-medium">Rating : {rating} </h4>
    <div className="card-actions justify-between">
      <Link to={`/brand/${brandName}/details/${_id}`}><button className="btn bg-amber-600">Details</button></Link>
     <Link to={`/brand/${brandName}/updateProduct/${_id}`}> <button className="btn bg-amber-600">Update</button></Link>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default ProductCard;