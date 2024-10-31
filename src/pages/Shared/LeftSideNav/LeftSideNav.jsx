import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
  const [catagories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../../../../public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(catagories);
  return (
    <div className="border">
      <h1 className="text-black text-xl font-bold">All Category</h1>
      {catagories.map((category) => (
        <Link key={category.id} to={`/${category.id}`}>
          <button className="btn btn-outline w-full justify-start border-none rounded-none">
            {category.name}
          </button>
        </Link>
      ))}

      {/* This is the bottom part */}
      <div className="my-4">
        <div>
          <img src={img1} className="w-full object-contain" alt="" />
          <p className="font-bold text-black text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex my-2">
            <span className="font-bold text-black">Sports</span>
            <span className="ms-auto">
              <CiCalendar className="w-6 inline-block py-auto " />
              Jan 4, 2022
            </span>
          </div>
        </div>
        <div>
          <img src={img2} className="w-full object-contain" alt="" />
          <p className="font-bold text-black text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex my-2">
            <span className="font-bold text-black">Sports</span>
            <span className="ms-auto">
              <CiCalendar className="w-6 inline-block py-auto " />
              Jan 4, 2022
            </span>
          </div>
        </div>
        <div>
          <img src={img3} className="w-full object-contain" alt="" />
          <p className="font-bold text-black text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex my-2">
            <span className="font-bold text-black">Sports</span>
            <span className="ms-auto">
              <CiCalendar className="w-6 inline-block py-auto " />
              Jan 4, 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
