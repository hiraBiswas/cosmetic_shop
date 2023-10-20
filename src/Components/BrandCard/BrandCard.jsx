import { Link } from "react-router-dom";

const brands = ({brand}) => {
    return (
        <div>
          <Link to={`/brand/${brand.brand_name}`}>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className="h-full"><img className="h-full" src={brand.thumbnail_img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{brand.brand_name}</h2>
   
  </div>
</div>
</Link>
        </div>
    );
};

export default brands;