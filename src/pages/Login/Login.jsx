import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, googleSignIn,user } = useContext(AuthContext);

  console.log("From log in route and its state value", location.state?.pathname);

  const googleSignInHandler = () => {
    googleSignIn()
      .then((user) => {
        console.log(user);
        navigate(location?.state?.pathname ? location.state.pathname : "/")
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const formLoginHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((userData) => {
        console.log(userData);
        navigate(location?.state?.pathname ? location.state.pathname : "/"); // USing option chaining to defend null
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="lg:h-[100vh] md:h-auto h-[100vh]">
      <div className="py-6">
        <Navbar></Navbar>
      </div>
      {/* <div className="flex flex-col justify-center items-center h-[100vh]"> */}
      <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-[10%] p-12 bg-slate-50 shadow-md">
        <h1 className="text-center text-transparent bg-clip-text text-xl font-semibold bg-gradient-to-r from-[#6b64e2] from-10% via-[#1717a1] via-30% to-[#ff009f] to-90%">
          Login your account
        </h1>
        <hr className="my-6" />
        <form onSubmit={formLoginHandler}>
          <label className="block " htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="block w-full h-14 bg-gray-300 rounded-md mb-3 focus:bg-gray-200 text-black focus:outline-none"
            required
          />
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your email password"
            className="block w-full h-14 bg-gray-200 rounded-md mb-3 focus:bg-gray-200  focus:outline-none"
            required
          />
          <button className="btn rounded-none w-full h-full mb-3" type="submit">
            Login
          </button>
        </form>
        <p className="text-center">
          Don’t Have An Account ?{" "}
          <Link to={"/register"} className="text-[#FF8C47] font-semibold mb-4">
            Register
          </Link>
        </p>
        <hr className="my-4" />

        <button
          className="btn btn-primary rounded-none w-full h-full mb-3"
          onClick={googleSignInHandler}
        >
          <FcGoogle className="w-6 h-6" />
          SignIn with Google
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
