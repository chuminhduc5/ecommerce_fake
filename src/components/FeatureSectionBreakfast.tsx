

import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    img: "/src/assets/images/img1.jpeg",
    name: "Dried Mango",
    price: "$500",
  },
  {
    id: 1,
    img: "/src/assets/images/img1.jpeg",
    name: "Dried Mango",
    price: "$500",
  },
  {
    id: 2,
    img: "/src/assets/images/img1.jpeg",
    name: "Dried Mango",
    price: "$500",
  },
  {
    id: 3,
    img: "/src/assets/images/img1.jpeg",
    name: "Dried Mango",
    price: "$500",
  },
];

const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegettable</h3>
          <p className="text-gray-500 mt-2">
            Buy farm fresh fruits and vegettable online at the best prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-green-500">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-green-500">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/src/assets/images/img6.jpeg"
            alt="banner"
          />
        </div>

        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionBreakfast;
