import { NavLink, useNavigate } from "react-router-dom";
import userImg from "../../../assets/user.png";

const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = ()=>{
    navigate("/login");
  }
  const navLinks = (
    <ul className="list-none text-black flex gap-4">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </ul>
  );
  return (
    <div className="cursor-pointer flex justify-end items-center">
      <div className="mx-auto">{navLinks}</div>
      <img src={userImg} className="w-10 mx-5" />
      <button className="btn rounded-none w-36" onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Navbar;
