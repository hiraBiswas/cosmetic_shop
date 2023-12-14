import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {
    return (
        <div>
          <Link to={`/brand/${brand.brand_name}`}>
            <div className="card h-40 lg:card-side bg-base-100 shadow-xl ">
 <img className=" rounded-lg h-full w-40 " src={brand.thumbnail_img} alt="Movie"/>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-center lg:my-auto">{brand.brand_name}</h2>
   
  </div>
</div>
</Link>
        </div>
    );
};

export default BrandCard;