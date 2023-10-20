import { Link } from "react-router-dom";

const brands = ({brand}) => {
    return (
        <div>
          <Link to={`/brand/${brand.brand_name}`}>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure className="h-full "><img className="h-52 w-56 rounded-lg  " src={brand.thumbnail_img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-center lg:my-auto">{brand.brand_name}</h2>
   
  </div>
</div>
</Link>
        </div>
    );
};

export default brands;