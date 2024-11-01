import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RighsideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
  /* Fetching all news from public folder using a loader inside the loader folder*/

  const allNews = useLoaderData();
  /* As by clicking on the show all button will display all the news, so, the displayedNews array value is 
  changeable. Whenever something is changeable we need to use useState hook. Before clicking the button the app
  will display 6 news. So the array slicing method is used in here for slicing the array*/
  const [displayedNews, setDisplayedNews] = useState(allNews.slice(0, 6));
  /* This state controls the visibility of button */
  const [buttonVisibility,setButtonVisibility] = useState("block")

  // console.log("All news",allNews);
  // console.log("Displayed news",displayedNews);


  /* Show all news */
  const displayAllNews = () => {
    setDisplayedNews(allNews);
    setButtonVisibility("hidden")
    
  };
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 mt-14">
        <LeftSideNav></LeftSideNav>
        {/* All news will be displayed in here */}
        <div className="col-span-2">
          <h1 className="text-xl mb-4 text-black font-bold">
            Dragon News Home
          </h1>
          {displayedNews.map((news) => (
            <NewsCard key={news._id} news={news} />
          ))}

          <button
            className={`btn btn-error text-white w-36 px-3 py-5 flex-nowrap rounded-none mx-auto ${buttonVisibility} h-auto`}
            onClick={displayAllNews}
          >
            Show All
          </button>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default Home;
