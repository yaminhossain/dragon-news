import { NavLink, useNavigate } from "react-router-dom";
import userImg from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, applicationSignOut } = useContext(AuthContext);

  const goToLogin = () => {
    navigate("/login");
  };

  const logOutHandler = () => {
    applicationSignOut()
    .then(() => {
      console.log("sign out successfully");
    })
    .catch((e)=>{
      console.log(e.message);
    });
  };
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
      <img src={user ? user.user?.photoURL : userImg} className="w-10 h-10 mx-5 rounded-full" />
      {user ? (
        <button className="btn rounded-none w-36" onClick={logOutHandler}>
          Logout
        </button>
      ) : (
        <button className="btn rounded-none w-36" onClick={goToLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
