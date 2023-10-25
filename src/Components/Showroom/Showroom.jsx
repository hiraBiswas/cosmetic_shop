import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2500,
});

const Showroom = () => {
  return (
    <div data-aos="fade-up" className="container  mx-auto rounded-xl mt-10 lg:mt-20">
      <h2 className='text-2xl text-center font-bold py-5 lg:text-4xl lg:py-10'> 𝓞𝓾𝓻 <span className='text-amber-500'>𝓞𝓾𝓽𝓵𝓮𝓽</span> 𝓐𝓭𝓭𝓻𝓮𝓼𝓼</h2>
      <div className=" grid grid-cols-1 gap-6 lg:grid-cols-2">


        <div className=" card card-side flex flex-col bg-base-100 shadow-xl lg:flex-row ">
         <img  src="https://i.ibb.co/G9L4xx0/5705c543deccbf3792bdf9ffdeee010f-square.jpg" className='h-full w-full lg:w-60 rounded-xl' alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">The Rana Plaza</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span> Bahubal, Habiganj, Sylhet Division, Bangladesh</p>
          </div>
        </div>



        <div className="card card-side flex-col bg-base-100 shadow-xl lg:flex-row">
         <img className='h-full w-full lg:w-60 rounded-xl' src="https://i.ibb.co/HFntHgR/8dd8cd62616094085aa9206d76799fcb.jpg"  alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">Jess Tower</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span> S. S. Khaled Road, Lalkhan Bazar, Chattogram 4000, Bangladesh</p>
          </div>
        </div>



        <div className="card card-side flex-col bg-base-100 shadow-xl lg:flex-row">
          <img className='h-full w-full lg:w-60 rounded-xl' src="https://i.ibb.co/sjdd9n5/download-3.jpg" alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">The Palace Convention Center</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span>Polashbari, Airport Road, Dhaka 1229, Bangladesh</p>
          </div>
        </div>


        <div className="card lg:card-side  flex-col bg-base-100 shadow-xl lg:flex-row">
          <img className='h-full w-full lg:w-60  rounded-xl ' src="https://i.ibb.co/C1dj134/Cosmetics-Store-Display-Design-Beauty-Retail-Makeup-Shop-Interior-Design-Store-Layout.webp"  alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">The City Plaza</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span> Sreemangal - Habiganj Road, Sreemangal 3210, Bangladesh</p>
          </div>
        </div>


      </div>
    </div>

  );
};

export default Showroom;