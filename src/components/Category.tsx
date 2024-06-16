import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 1,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 2,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 3,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 4,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 5,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 6,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 product",
    img: "/src/assets/images/img6.jpeg",
  },
];
const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
