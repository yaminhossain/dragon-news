import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qSwimming from "../../../assets/qZone1.png";
import qClass from "../../../assets/qZone2.png";
import qPalyGround from "../../../assets/qZone3.png";


const RightSideNav = () => {
  return (
    <div className="px-4">
      <h1 className="text-xl font-bold text-black">Login With</h1>
      <button className="btn btn-outline text-blue-600 w-full border-black mt-6 mb-3">
        <FaGoogle />
        Login with Google
      </button>
      <button className="btn btn-outline text-black w-full mb-6">
        <FaGithub />
        Login with Github
      </button>
      <h1 className="text-xl font-bold text-black">Find Us On</h1>
      <button className="btn btn-outline w-full mt-6 justify-start rounded-b-none">
        <FaFacebook className="text-blue-600 text-2xl " />
        Facebook
      </button>
      <button className="btn btn-outline w-full justify-start rounded-none border-t-0 border-b-0">
        <FaTwitter className=" w-8 text-2xl" />
        Twitter
      </button>
      <button className="btn btn-outline  w-full mb-3 justify-start rounded-t-none">
        <FaInstagram className=" w-8 text-2xl " />
        Instagram
      </button>

      <div className="bg-gray-200 py-4 px-2">
        <h1 className="text-xl font-bold text-black">Q-Zone</h1>
        <img src={qSwimming} alt="" />
        <img src={qClass} alt="" />
        <img src={qPalyGround} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;