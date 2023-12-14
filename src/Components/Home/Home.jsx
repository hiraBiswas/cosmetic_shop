
import Banner from "../Banner/Banner";
import BrandCard from "../BrandCard/BrandCard";
import WhyUs from "../WhyUs/WhyUs";
import Showroom from "../Showroom/Showroom";

import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

AOS.init({
    duration: 2500,
  });
const Home = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('/brand.json');
                const data = await response.json();
                // Ensure that data is an array before setting it
                if (Array.isArray(data)) {
                    setBrands(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);  

    console.log(brands);
    return (
        <div>
            <Banner></Banner>
           <div className="mt-10 container mx-auto lg:mt-16 ">
            <h1 className="text-2xl font-bold text-center lg:text-3xl ">𝓜𝓸𝓼𝓽 <span className="text-amber-600">𝓟𝓸𝓹𝓾𝓵𝓪𝓻</span> 𝓑𝓻𝓪𝓷𝓭</h1>
           <div data-aos="fade-up"  className=" mt-3  grid gap-8 grid-cols-1  lg:grid-cols-3 container mx-auto">
            {
                brands.map(brand=>
                    <BrandCard brand={brand} key={brand.id}></BrandCard>
                
                )
            }
           </div>
           </div>
           <Showroom></Showroom>
           <WhyUs></WhyUs>
        </div>
    );
};

export default Home;