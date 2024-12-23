const Hero = () => {
  return (
    <div
      className="hero h-52 m-10 w-11/12 rounded-lg md:h-96"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            La Troupe AL FANE AL ASSIL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
