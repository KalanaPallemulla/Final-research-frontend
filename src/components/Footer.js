import React from "react";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const Footer = ({ color = false }) => {
  return (
    <div
      className={`border-t${
        color ? " border-t-white  " : "border-t-cyan-950 "
      } flex justify-center w-screen items-center text-white flex-col`}
    >
      <h1 className="font-serif text-2xl  font-bold mt-16">Rickets Rescuer</h1>
      <h1 className="font-serif text-base  font-bold mt-4">
        An online application aimed at preventing Rickets in children.
      </h1>
      <div className="flex mt-6 space-x-4">
        <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-cyan-950 text-2xl">
          <CiFacebook />
        </div>
        <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-cyan-950 text-2xl ">
          <CiInstagram />
        </div>
        <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-cyan-950 text-2xl ">
          <CiTwitter />
        </div>
        <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center text-cyan-950 text-2xl ">
          <CiLinkedin />
        </div>
      </div>
      <h1 className="MF text-xs  font-bold mt-4">
        © Copyright Rickets Predictor. All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;
