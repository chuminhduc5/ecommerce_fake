interface propsType {
  img: string;
  title: string;
  comment: number;
  date: string;
}

const BlogCard: React.FC<propsType> = ({ img, title, comment, date }) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      />
      <div className="text-green-500 font-medium">
        <span>{date}</span>
        <span>{comment}</span>
      </div>
      <h3 className="font-bold text-x1">{title}</h3>
    </div>
  );
};

export default BlogCard;
