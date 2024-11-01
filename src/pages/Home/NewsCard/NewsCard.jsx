import { CiBookmark, CiShare2 } from "react-icons/ci";
import moment from "moment";
const NewsCard = ({ news }) => {
  console.log("All new in news card",news);
  const newsPublishingDate = news.author.published_date?.split(" ")[0] || moment().format("dddd, MMMM Do, YYYY");
  return (
    <div>
      <div className="flex gap-3 justify-center items-center bg-gray-200 mb-3 p-4 rounded-t-lg">
        <img src={news.author.img} className="rounded-full w-10 h-10" alt="author name" />
        <div className="flex-grow">
          <p>{news.author.name || "Author"} </p>
          <p>{newsPublishingDate}</p>
        </div>
        <CiBookmark className="inline-block text-xl cursor-pointer "/>
        <CiShare2 className="inline-block text-xl cursor-pointer"/>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default NewsCard;
