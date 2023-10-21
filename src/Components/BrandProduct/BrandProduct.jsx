import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const BrandProduct = () => {
   
    const brandProducts = useLoaderData();
    const { brand_name } = useParams();
    const filteredProducts = brandProducts.filter(brandProduct => brandProduct.brandName === brand_name);
    console.log(filteredProducts);
    return (
        <div className="container mx-auto">
          <div className="mt-10 bg-amber-50 py-10 px-5 drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-3"> 
          {filteredProducts.length > 0 ? (
                
                filteredProducts.map(brandProduct => (
                    <ProductCard key={brandProduct._id} brandProduct={brandProduct}></ProductCard>
                ))
            ) : (
                
                <p className="text-2xl font-bold text-gray-500 lg:text-3xl">No products found for {brand_name}</p>
            )}
          </div>
        </div>
    );
};

export default BrandProduct;