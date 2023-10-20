

const Banner = () => {
    return (
        <div className="mt-2">
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/9hVQj8f/banner3.jpg)'}}>
  <div className=""></div>
  <div className="hero-content  text-center text-neutral-content">
    <div className="max-w-md hero-overlay lg:mr-96  lg:-ml-12 lg:bg-amber-400 p-8 drop-shadow-lg lg:max-w-2xl">
      <h1 className="mb-5 text-5xl text-black font-bold">Give Your Skin Natural Touch</h1>
      <p className="mb-5">MAKE YOUR SKIN NATURALLY BEAUTIFUL</p>
      <button className="btn bg-amber-600">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/YcZ0cWJ/banner4.jpg)'}}>
  <div className=""></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md lg:mr-96  lg:-ml-12 lg:bg-black hero-overlay px-2 py-8 drop-shadow-lg lg:max-w-2xl">
      <h1 className="mb-5 text-2xl lg:text-5xl text-black lg:text-amber-500 font-bold">Wide Range of Lipstick Shades</h1>
      <p className="mb-5">FOR EVERY SKIN TONE</p>
      <button className="btn bg-amber-600">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/HYqBLh6/banner6.jpg)'}}>
  <div className=""></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md lg:bg-black hero-overlay px-2 py-8 drop-shadow-lg lg:max-w-2xl">
      <h1 className="mb-5 text-2xl lg:text-5xl text-black lg:text-white font-bold">Match Your Nail Paint With Mood</h1>
      <p className="mb-5">EVERY SHADE IS AVAILABLE</p>
      <button className="btn bg-amber-600">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
        </div>
    );
};

export default Banner;