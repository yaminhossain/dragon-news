import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { user, signUpWithEmailPassword} = useContext(AuthContext);
  const navigate = useNavigate();
  const registrationFormHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo,email,password);
    e.target.reset();
    signUpWithEmailPassword(email, password)
      .then((userCredential) => {
 
        const userData = userCredential.user;
        if(userData){
           navigate("/login");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Error",errorMessage);
      });
  };
  console.log("User from context ",user);
  return (
    <div className="lg:h-[100vh] md:h-auto h-[100vh]">
      

      <div className="py-6">
        <Navbar></Navbar>
      </div>
      {/* <div className="flex flex-col justify-center items-center h-[100vh]"> */}
      <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-[10%] p-12 bg-slate-50 shadow-md">
        <h1 className="text-center text-transparent bg-clip-text text-xl font-semibold bg-gradient-to-r from-[#6b64e2] from-10% via-[#1717a1] via-30% to-[#ff009f] to-90%">
          Register your account
        </h1>
        <hr className="my-6" />
        <form onSubmit={registrationFormHandler}>
          <label className="text-black block " htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="block w-full h-14 bg-gray-300 rounded-md mb-3 focus:bg-gray-200 text-black focus:outline-none"
            required
          />
          <label className="text-black block " htmlFor="photo">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter a photo URL"
            className="block w-full h-14 bg-gray-300 rounded-md mb-3 focus:bg-gray-200 text-black focus:outline-none"
            required
          />
          <label className="text-black block">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="block w-full h-14 bg-gray-300 rounded-md mb-3 focus:bg-gray-200 text-black focus:outline-none"
            required
          />

          <label className="text-black block">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="block w-full h-14 bg-gray-200 rounded-md mb-3 focus:bg-gray-200  focus:outline-none"
            required
          />
          <div className="mb-4">
            <input type="checkbox" name="terms" /> Accept
            <span>Term & Conditions</span>
          </div>
          <button className="btn rounded-none w-full h-full mb-3" type="submit">
            Register
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Register;
