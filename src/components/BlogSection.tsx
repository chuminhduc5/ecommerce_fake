import BlogCard from "./BlogCard";

const data = [
  {
    img: "/src/assets/images/img1.jpeg",
    title: "Dried Mango",
    date: "$500",
    comment: 1,
  },
  {
    img: "/src/assets/images/img1.jpeg",
    title: "Dried Mango",
    date: "$500",
    comment: 1,
  },
  {
    img: "/src/assets/images/img1.jpeg",
    title: "Dried Mango",
    date: "$500",
    comment: 1,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl ">Latast News</h2>
      <p>Present posts in a best way to highlight </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
