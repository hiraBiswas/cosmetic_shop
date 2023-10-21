import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const BrandProduct = () => {
   
    const brandProducts = useLoaderData();
    const { brand_name } = useParams();
    const filteredProducts = brandProducts.filter(brandProduct => brandProduct.brandName === brand_name);
    console.log(filteredProducts);
    return (
        <div >
            <div>
            <div className="carousel w-full lg:h-[500px]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/5RdhMCX/slider1.png" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/CQmRkmN/slider3.png" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/djpCf6T/slider2.jpg" className="w-full" />
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
            </div>
          <div className="mt-10 bg-amber-50 py-10 px-5 drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-3"> 
          {filteredProducts.length > 0 ? (
                
                filteredProducts.map(brandProduct => (
                    <ProductCard key={brandProduct._id} brandProduct={brandProduct}></ProductCard>
                ))
            ) : (
                
                <p className="text-2xl font-bold text-gray-500 text-center lg:text-3xl">No products found for {brand_name}</p>
            )}
          </div>
        </div>
    );
};

export default BrandProduct;