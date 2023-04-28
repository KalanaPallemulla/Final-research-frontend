import React, { useState } from "react";
import loginImage from "../assets/register.avif";
import { ToastContainer, toast } from "react-toastify";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { increment } from "../appRedux/slice";
import axios from "axios";
import { base_url } from "../environment";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !fullName || !password || !confirmPassword || !age) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (password.length < 8) {
      toast.error("Password must contain with at least 8 characters", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (password !== confirmPassword) {
      toast.error("The password and confirm password fields do not match", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const res = await axios.post(base_url + "user/signup", {
        fullName,
        email,
        password,
        age,
      });
      if (res.status === 200) {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("userId", res.data.user._id);

        navigate("/login");
      }
    } catch (error) {
      console.log("Login error: ", error);
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container>
      <div className="md:grid md:grid-cols-3 bg-white">
        <div className="col-span-1">
          <div className="md:h-screen w-full flex justify-center items-center md:border-r">
            <img
              className="md:w-[40rem] w-96"
              src={loginImage}
              alt="Loading..."
            />
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center -mt-60 md:mt-0 col-span-2">
          <div className="border border-blue-300 p-8 rounded-2xl">
            <div>
              <h1 className="text-center font-serif md:text-3xl text-2xl text-blue-600 font-medium">
                Create an account
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mt-4">
                <label className="text-sm  text-gray-500 ml-2">Full Name</label>
                <input
                  name="fullName"
                  value={fullName}
                  className="border rounded-lg px-4 py-2 md:w-96 w-72 mt-1"
                  placeholder="John doe"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm  text-gray-500 ml-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  className="border rounded-lg px-4 py-2 md:w-96 w-72 mt-1"
                  placeholder="1"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm  text-gray-500 ml-2">Email</label>
                <input
                  name="email"
                  value={email}
                  className="border rounded-lg px-4 py-2 md:w-96 w-72 mt-1"
                  placeholder="example@*****.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm  text-gray-500 ml-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="border rounded-lg px-4 py-2 md:w-96 w-72 mt-1"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm  text-gray-500 ml-2">Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  className="border rounded-lg px-4 py-2 md:w-96 w-72 mt-1"
                  placeholder="********"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={() => dispatch(increment())}
                  className="px-8 py-2 mt-4 bg-blue-600 w-fit text-sm text-white rounded-xl"
                >
                  Submit
                </button>
              </div>
              <Link to="/login" className="mt-2 text-xs text-gray-400">
                Have an account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
