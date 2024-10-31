import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RighsideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 mt-14">
        <LeftSideNav></LeftSideNav>
        <div className="col-span-2 border">
            This news card
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default Home;
