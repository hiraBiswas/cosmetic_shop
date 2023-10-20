import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCard from "../BrandCard/BrandCard";

const Home = () => {
    const brands=useLoaderData()
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <div className=" grid gap-8 grid-cols-1  lg:grid-cols-3 lg:container">
            {
                brands.map(brand=>
                    <BrandCard brand={brand} key={brand.id}></BrandCard>
                
                )
            }
           </div>
        </div>
    );
};

export default Home;