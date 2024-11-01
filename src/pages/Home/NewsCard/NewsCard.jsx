import { CiBookmark, CiShare2 } from "react-icons/ci";
import moment from "moment";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
  console.log("All new in news card", news);
  const newsPublishingDate =
    news.author.published_date?.split(" ")[0] || moment().format("DD-mm-YYYY");
  return (
    <div className="border rounded-lg mb-3">
      <div className="flex gap-3 justify-center items-center bg-gray-200 mb-3 p-4 rounded-t-lg">
        <img
          src={news.author.img}
          className="rounded-full w-10 h-10"
          alt="author name"
        />
        <div className="flex-grow">
          <p>{news.author.name || "Author"} </p>
          <p>{newsPublishingDate}</p>
        </div>
        <CiBookmark className="inline-block text-xl cursor-pointer " />
        <CiShare2 className="inline-block text-xl cursor-pointer" />
      </div>
      <div className="px-5">
        <h1 className="text-black text-xl my-5 font-bold">{news.title}</h1>
        <img
          src={news.image_url}
          className="rounded-md my-5 w-full h-full object-contain"
          alt=""
        />
        <p className="mt-5 mb-1 text-gray-500">{news.details?.slice(0,201)}...</p>
        <Link
          className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-semibold"
          to="/"
        >
          Read More
        </Link>
        <hr className="my-5" />
      </div>
      <div className="flex  justify-center items-center px-5 pb-5">
        <div className="flex justify-center items-center gap-2 ">
          <FaStar className="inline-block text-[#FF8C47]" /> 
          <FaStar className="inline-block text-[#FF8C47]" /> 
          <FaStar className="inline-block text-[#FF8C47]" /> 
          <FaStar className="inline-block text-[#FF8C47]" /> 
          <FaStar className="inline-block text-[#FF8C47]" />   
          {news.rating.number}
        </div>
        <div className="flex justify-center items-center ms-auto gap-2">
          {news.total_view}
          <IoMdEye className="inline-block w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
