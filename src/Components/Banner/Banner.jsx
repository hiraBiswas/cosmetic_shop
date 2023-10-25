
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Kr9rYfD/makeup-for-deep-set-eyes.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md lg:max-w-2xl">
      <h1 className="mb-2 text-2xl font-bold text-white lg:text-5xl lg:mb-5">Your One-Stop Destination for Cosmetic Excellence!</h1>
      <p className="mb-2 text-sm lg:text-lg lg:mb-5">GET ALL AUTHENTIC PRODUCT <br /> IN ONE CLICK AT YOUR DOORSTEP.</p>
      <button className="btn bg-amber-700 py-3 px-6 text-white">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/9hVQj8f/banner3.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md lg:max-w-2xl">
      <h1 className="mb-2 text-2xl font-bold text-white lg:text-5xl lg:mb-5">Give Your Skin Natural Touch!</h1>
      <p className="mb-5 text-sm lg:text-lg">MAKE SKIN NATURALLY BEAUTIFUL WITH 100% NATURAL PRODUCT.</p>
      <button className="btn bg-amber-600 text-white py-3 px-6">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mNh6N1H/banner4-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md lg:max-w-2xl">
      <h1 className="mb-2 text-2xl font-bold text-white lg:mb-5 lg:text-5xl">Wide Ranges of Lipstick Shades!</h1>
      <p className="mb-2 text-sm lg:mb-5 lg:text-lg">BEAUTIFUL LIPSTICK SHADES <br /> FOR EVERY SKIN TONE.</p>
      <button className="btn bg-amber-600 py-3 px-6 text-white">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/KsTckWB/istockphoto-1208104853-612x612.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md lg:max-w-2xl">
      <h1 className="mb-5 text-2xl font-bold text-white lg:text-5xl">Match Your Nail Color To Your Mood!</h1>
      <p className="mb-2 text-sm lg:text-lg lg:mb-5">VARITES OF NAIL POLISH COLOR.</p>
      <button className="btn bg-amber-600 py-3 px-6 text-white">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;