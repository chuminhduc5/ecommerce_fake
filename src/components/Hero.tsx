import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/src/assets/images/img5.jpeg"
            alt="hero image"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block text-yellow-500">
              !00% Original Dry Fruits
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-yellow-500">
              Dried Fruits Best Quality
            </h2>
            <p className="text-yellow-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-orange-500 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </div>
            <div className="bg-orange-500 hover:bg-yellow-500 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/src/assets/images/img6.jpeg"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
              Best Yummy Pizza
            </h2>
            <p className="text-yellow-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-orange-500 text-2xl sm:text-4xl pb-4">
              $25
            </div>
            <div className="bg-orange-500 hover:bg-yellow-500 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/src/assets/images/img1.jpeg"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
              Best Yummy Pizza
            </h2>
            <p className="text-yellow-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-orange-500 text-2xl sm:text-4xl pb-4">
              $25
            </div>
            <div className="bg-orange-500 hover:bg-yellow-500 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
