const Banner = () => {
  return (
    <div>
      <div className="">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Kr9rYfD/makeup-for-deep-set-eyes.webp)'}}>
<div className="hero-overlay bg-opacity-80"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-sm lg:max-w-lg">
    <h1 className="mb-8 text-white text-3xl font-bold lg:text-5xl ">One Stop <br />  <span className='text-4xl text-white font-extrabold lg:text-6xl '>Event Planner</span></h1>
    <p className="mb-5 text-white">MAKE YOUR SPECIAL DAY PERFECT WITH <span className='text-white font-extrabold'>MEMORY MAKER</span></p>
    <div className='flex gap-6 justify-center'>
    <button className="btn btn-outline border-2 rounded-xl px-8 text-white hover:bg-gradient-to-r from-darkPink to-lightPink border-pink-600 hover:border-none" 
>About Us</button>
    <button className="btn px-8  bg-gradient-to-r from-darkPink to-lightPink text-white border-none drop-shadow-lg">Get Started</button>
    </div>
  </div>
</div>
</div>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item2" className="btn btn-circle">❮</a> 
      <a href="#item1" className="btn btn-circle">❯</a>
    </div>
</div>



          <div id="item2" className="carousel-item w-full">
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/9hVQj8f/banner3.jpg)'}}>
<div className="hero-overlay bg-opacity-80"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-sm lg:max-w-lg">
    <h1 className="mb-8 text-white text-3xl font-bold lg:text-5xl ">One Stop <br />  <span className='text-4xl text-white font-extrabold lg:text-6xl '>Event Planner</span></h1>
    <p className="mb-5 text-white">MAKE YOUR SPECIAL DAY PERFECT WITH <span className='text-white font-extrabold'>MEMORY MAKER</span></p>
    <div className='flex gap-6 justify-center'>
    <button className="btn btn-outline border-2 rounded-xl px-8 text-white hover:bg-gradient-to-r from-darkPink to-lightPink border-pink-600 hover:border-none" 
>About Us</button>
    <button className="btn px-8  bg-gradient-to-r from-darkPink to-lightPink text-white border-none drop-shadow-lg">Get Started</button>
    </div>
  </div>
</div>
</div>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item1" className="btn btn-circle">❮</a> 
      <a href="#item3" className="btn btn-circle">❯</a>
    </div>
          </div>



          <div id="item3" className="carousel-item w-full">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/DGv5Fq3/retire4.jpg)'}}>
<div className="hero-overlay bg-opacity-80"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-sm lg:max-w-lg">
    <h1 className="mb-8 text-white text-3xl font-bold lg:text-5xl ">One Stop <br />  <span className='text-4xl text-white font-extrabold lg:text-6xl '>Event Planner</span></h1>
    <p className="mb-5 text-white">MAKE YOUR SPECIAL DAY PERFECT WITH <span className='text-white font-extrabold'>MEMORY MAKER</span></p>
    <div className='flex gap-6 justify-center'>
    <button className="btn btn-outline border-2 rounded-xl px-8 text-white hover:bg-gradient-to-r from-darkPink to-lightPink border-pink-600 hover:border-none" 
>About Us</button>
    <button className="btn px-8  bg-gradient-to-r from-darkPink to-lightPink text-white border-none drop-shadow-lg">Get Started</button>
    </div>
  </div>
</div>
</div>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item1" className="btn btn-circle">❮</a> 
      <a href="#item2" className="btn btn-circle">❯</a>
    </div>
          </div>
         
        </div>
      
      </div>
    
    </div>
  );
};

export default Banner;