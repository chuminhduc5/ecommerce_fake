const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="/src/assets/images/img2.jpeg"
            alt="banner"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="/src/assets/images/img4.jpeg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
