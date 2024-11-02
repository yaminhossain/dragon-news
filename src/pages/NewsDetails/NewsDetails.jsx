import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const NewsDetails = () => {
  //  This a use of useParams hook
  // const{id} = useParams();
  const [foundNews, data] = useLoaderData();
  const news = data.slice(0,3);
  console.log(news);
  const navigate = useNavigate();
  const goToAllCategory = () => {
    navigate("/");
  };
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-4  mt-11">
        {/* This div will display the detailed news */}
        <div className="col-span-3 max-w-3xl mx-auto">
          {/* Alternative */}
          {/* <div className="border col-span-3 max-w-3xl relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
          <h1 className="text-black font-bold text-xl mb-5">Dragon News</h1>
          <div className="border rounded-lg p-6">
            <img
              src={foundNews.image_url}
              className="w-full h-full object-contain"
              alt="news paper thumbnail"
            />
            <p className="text-black my-5 text-justify">{foundNews.details}</p>
            <button
              className="btn btn-error text-white rounded-none"
              onClick={goToAllCategory}
            >
              <FaArrowLeftLong />
              All news in this category
            </button>
          </div>
          <div className="my-6">
            <p className="text-black text-lg font-bold">Editors Insight</p>
            <div className="flex flex-col md:flex-row gap-3 my-4">
              {news.map((singleNews) => (
                <div key={singleNews._id} className="max-w-full md:max-w-64 md:h-full">
                  <img src={singleNews.image_url} className="w-full object-contain h-full" />
                  <h1 className="text-black my-3">{singleNews.title}</h1>
                  {/* className="flex gap-2 items-center" */}
                  <div>
                    <CiCalendar className="w-6 h-6 inline-block" />
                    <p className="inline ms-3">
                      {singleNews.author.published_date?.split(" ")[0] ||
                        moment().format("DD-mm-YYYY")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side Navigation */}
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default NewsDetails;
