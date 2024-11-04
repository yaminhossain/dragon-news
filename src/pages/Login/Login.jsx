import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
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
        <form>
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
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
