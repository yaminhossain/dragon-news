import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex py-4 px-3 bg-[#F3F3F3] mb-5">
      <button className="w-28 bg-[#D72050] text-white py-3 px-2">Latest</button>
      <Marquee pauseOnHover speed={100}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....    
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
