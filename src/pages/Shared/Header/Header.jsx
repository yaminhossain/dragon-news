import logo from "../../../assets/logo.png";
import moment from "moment";


const Header = () => {
  return (
    <div>
      <img src={logo} className="max-w-xs mx-auto pt-4" />
      <p className="text-center my-7">Journalism Without Fear or Favour</p>
      <p className="text-black text-center">{moment().format("dddd, MMMM Do, YYYY")}</p>

    </div>
  );
};

export default Header;
