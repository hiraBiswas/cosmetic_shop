import { FaRegHandshake, FaWhatsapp } from 'react-icons/fa';
import {HiReceiptRefund } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb'
import { MdLocalOffer} from 'react-icons/md'
import {SiOrigin } from 'react-icons/si'



import AOS from 'aos'; 
import 'aos/dist/aos.css';

AOS.init({
    duration: 2500,
  });
const WhyUs = () => {
   
    return (
        <div data-aos="fade-down" className="bg-amber-50 mt-10 container rounded-lg flex flex-col lg:mt-20 lg:mx-w-full lg:mx-auto   gap-6 lg:flex-row lg:justify-center items-center">
            {/* div for description */}
            <div className="p-5 text-center flex-1">
             <h4 className="text">WE ARE <span className='text-amber-600'>𝓰𝓵𝓪𝓶𝓸𝓾𝓻𝓖𝓵𝓮𝓪𝓶</span></h4>
             <h2 className="text-2xl font-medium py-3 lg:text-4xl lg:font-bold"><span className="text-2xl text-amber-600 font-bold lg:text-4xl">No.1</span> Cosmetic and Beauty Retailer</h2>
             <p className='mt-3'>We offer a wide range of high-quality beauty products that cater to diverse skin types, tones, and preferences. Our mission is to promote self-confidence by providing effective, cruelty-free cosmetics that are both innovative and eco-friendly. With a commitment to customer satisfaction, we strive to inspire and transform the world of beauty one product at a time.</p>

             <div>
                <button className="btn mt-5 bg-amber-500 text-white">ABOUT US</button>
             </div>
            </div>


            {/* div for qualities */}
            <div className='flex-1 drop-shadow-lg grid grid-cols-1 lg:grid-cols-3 lg:py-8 lg:pr-4'>
                <div className='border-2 bg-white border-amber-400 py-8'>
                  <div className=' flex justify-center'>
                  <FaRegHandshake className='text-7xl text-amber-700'></FaRegHandshake>
                  </div>
                    <h1 className='text-2xl font-semibold text-center'>Friendly Team</h1>
                    <p className='text-center'>More than 20 team</p>  
                </div>

                <div className='border-2 py-8 bg-white  border-amber-400 lg:border-x-0 '>
                  <div className=' flex justify-center'>
                  <TbTruckDelivery className='text-7xl text-amber-700'></TbTruckDelivery>
                  </div>
                    <h1 className='text-2xl font-semibold text-center'>Fastest Delivery</h1>
                    <p className='text-center'>Outside city it will take 3/4 days</p>
                </div>


                <div className='border-2 py-8 bg-white  border-amber-400'>
                  <div className=' flex justify-center'>
                  <HiReceiptRefund className='text-7xl text-amber-700'></HiReceiptRefund>
                  </div>
                    <h1 className='text-2xl font-semibold text-center'>Refund Option</h1>
                    <p className='text-center'>We have refund policy </p>   
                </div>


                <div className='border-2 py-8 bg-white  border-amber-400 lg:border-t-0'>
                  <div className=' flex justify-center'>
                  <FaWhatsapp className='text-7xl text-amber-700'></FaWhatsapp>
                  </div>
                    <h1 className='text-2xl font-semibold text-center'>24/7 Hours Support</h1>
                    <p className='text-center'>Anytime anywhere</p>
                     </div>


                     <div className='border-2 bg-white  py-8  border-amber-400 lg:border-t-0 lg:border-x-0'>
                  <div className=' flex justify-center'>
                  <MdLocalOffer className='text-7xl text-amber-700'></MdLocalOffer>
                  </div>
                    <h1 className='text-2xl font-semibold text-center'>Amazing Offers</h1>
                    <p className='text-center'>We are giving offer on purchase</p>
                  
                </div>


                <div className='border-2 py-8 bg-white  border-amber-400 lg:border-t-0'>
                  <div className=' flex justify-center'>
                  <SiOrigin className='text-7xl text-amber-700'></SiOrigin>
                  </div>
                    <h1 className='text-2xl font-semibold text-center'>Original Product</h1>
                    <p className='text-center'>We ship products from overseas.</p>
                  
                </div>

            </div>
            
        </div>
    );
};

export default WhyUs;