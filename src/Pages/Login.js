import React, { useState } from "react";
import loginImage from "../assets/login.webp";
import { ToastContainer, toast } from "react-toastify";
import Container from "../components/Container";
import Footer from "../components/Footer";
import axios from "axios";
import { base_url } from "../environment";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!password) {
      toast.error("Password is required", {
        position: "top-right",
        autoClose: 3000,
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
      const res = await axios.post(base_url + "user/login", {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);

        navigate("/home");
      }
    } catch (error) {
      console.log("Login error: ", error);
      toast.error("Please check the credentials", {
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
                Login
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
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
              <div>
                <button className="px-8 py-2 mt-4 bg-blue-600 w-fit text-sm text-white rounded-xl">
                  Submit
                </button>
              </div>
              <h1 className="mt-2 text-xs text-gray-400">
                Don't have an account?
              </h1>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Container>
  );
};

export default Login;
