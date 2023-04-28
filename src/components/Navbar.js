import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const params = useLocation();

  return (
    <div className="h-20 md:h-16 bg-cyan-950 w-screen fixed top-0 px-8 md:grid md:grid-cols-2 items-center">
      <div className="text-white font-bold font-serif text-lg text-center md:text-left hover:brightness-90 mt-4 md:mt-0">
        Rickets Rescuer
      </div>
      <div className="flex md:justify-end justify-center space-x-8 text-white MF mt-2 md:mt-0">
        <Link
          className={`hover:text-red-500 ${
            params.pathname === "/" && "text-red-500"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`hover:text-red-500 ${
            params.pathname === "/prediction" && "text-red-500"
          }`}
          to="/prediction"
        >
          Prediction
        </Link>
        <Link
          className={`hover:text-red-500 ${
            params.pathname === "/history" && "text-red-500"
          }`}
          to="/history"
        >
          History
        </Link>
        <Link
          className={`hover:text-red-500 ${
            params.pathname === "/articles" && "text-red-500"
          }`}
          to="/article"
        >
          Articles
        </Link>
        {localStorage.getItem("token") ? (
          <Link
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
            }}
            className={`hover:text-red-500 ${
              params.pathname === "/login" && "text-red-500"
            }`}
            to="/login"
          >
            Logout
          </Link>
        ) : (
          <Link
            className={`hover:text-red-500 ${
              (params.pathname === "/login" ||
                params.pathname === "/register") &&
              "text-red-500"
            }`}
            to="/"
          >
            Join
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
