const Hero = () => {
  return (
    <div
      className="hero h-96 m-10 w-11/12 rounded-lg"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            La Troupe AL FANE AL ASSIL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
