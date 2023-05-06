import React, { Fragment } from "react";
import Container from "../components/Container";
import bones from "../assets/bone.jpeg";
import Footer from "../components/Footer";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import Model from "../components/Model";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../environment";
const Prediction = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [serumCalciumLevel, setSerumCalciumLevel] = useState();
  const [result, setResult] = useState("");
  const [infantGastrationalAge, setInfantGastrationalAge] = useState();
  const [inadequateSunlightExposure, setInadequateSunlightExposure] =
    useState("");
  const [boneFractures, setBoneFractures] = useState("");
  const [bowLegs, setBowLegs] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !age ||
      !height ||
      !serumCalciumLevel ||
      !infantGastrationalAge.length > 0 ||
      !inadequateSunlightExposure.length > 0 ||
      !boneFractures.length > 0 ||
      !bowLegs.length > 0
    ) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);

      return;
    }

    const data = {
      infantGastrationalAge: infantGastrationalAge == 0 ? false : true,
      bowLegs: bowLegs == 0 ? false : true,
      inadequateSunlightExposure:
        inadequateSunlightExposure == 0 ? false : true,
      boneFractures: boneFractures == 0 ? false : true,
      serumCalciumLevel: parseFloat(serumCalciumLevel),
    };
    const res = await axios.post(
      "https://kingslayer47.pythonanywhere.com/predict-rickets",
      data
    );
    const mongoData = {
      result: res.data * 100,
      age,
      hight: height,
      infantGastrationalAge: infantGastrationalAge == 0 ? false : true,
      bowLegs: bowLegs == 0 ? false : true,
      inadequateSunlightExposure:
        inadequateSunlightExposure == 0 ? false : true,
      boneFractures: boneFractures == 0 ? false : true,
      serumCalciumLevel: parseFloat(serumCalciumLevel),
    };
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // Replace authToken with your actual token
        "Content-Type": "application/json",
      },
    };
    const mongoRes = await axios.post(
      base_url + "prediction/addPrediction",
      mongoData,
      options
    );
    console.log(mongoRes);
    setResult(res.data);
    setOpen(!open);
    setLoading(false);
  };
  return (
    // <Fragment>
    <Container>
      <h1 className="bg-white text-center pt-10 text-4xl font-serif text-cyan-800">
        Predict
      </h1>
      <h1 className="bg-white text-center  text-base pt-2 font-serif text-gray-400">
        Lets predict rickets
      </h1>

      <div className="md:grid md:grid-cols-2 bg-white h-screen">
        <div className="flex h-full justify-center items-center -mt-56 md:-mt-24 ">
          <img className="w-[30rem]" src={bones} alt="Loading..." />
        </div>
        <div className="p-16 h-full flex justify-center items-center bg-white  w-full">
          <div className="flex-col -mt-[40rem] md:-mt-48 shadow-md p-2 md:p-8 border-t-4 border-t-cyan-800 rounded-lg">
            <div className="w-full md:grid md:grid-cols-2">
              <div className="flex flex-col px-4">
                <label className="text-sm  text-gray-500 ml-2">
                  Age<span className="text-xs"> (in months)</span>
                </label>
                <input
                  className="px-4 py-2 border rounded-lg mt-1 placeholder:text-xs text-xs"
                  placeholder="12 Months"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col px-4 mt-4 md:mt-0">
                <label className="text-sm  text-gray-500 ml-2">
                  Hight<span className="text-xs"> (in cm)</span>
                </label>
                <input
                  className="px-4 py-2 border rounded-lg mt-1 placeholder:text-xs text-xs"
                  placeholder="36"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:grid md:grid-cols-2 mt-4 md:mt-4">
              <div className="flex flex-col px-4">
                <label className="text-sm  text-gray-500 ml-2">
                  Serum Calcium Level
                </label>
                <input
                  className="px-4 py-2 border rounded-lg mt-1 placeholder:text-xs text-xs"
                  placeholder="8.6"
                  type="number"
                  value={serumCalciumLevel}
                  onChange={(e) => setSerumCalciumLevel(e.target.value)}
                />
              </div>
            </div>
            {/* drop down */}

            {/* drop down */}
            <div className="w-full md:grid md:grid-cols-2 ">
              <div class="flex flex-col px-4 mt-4 md:mt-4">
                <label class="text-sm text-gray-500 ml-2">
                  Normal Infant's Gastrational Age
                </label>
                <div class="flex items-center mt-1">
                  <select
                    name="infantGastrationalAge"
                    class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700"
                    value={infantGastrationalAge}
                    onChange={(e) => setInfantGastrationalAge(e.target.value)}
                  >
                    <option className="" value="">
                      Select age
                    </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col px-4 mt-4 md:mt-4">
                <label class="text-sm text-gray-500 ml-2">Bow Legs</label>
                <div class="flex items-center mt-1">
                  <select
                    name="bowLegs"
                    class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700"
                    value={bowLegs}
                    onChange={(e) => setBowLegs(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full md:grid md:grid-cols-2 mt-4 md:mt-4">
              <div class="flex flex-col px-4">
                <label class="text-sm text-gray-500 ml-2">
                  Inadequate sunlight exposure
                </label>
                <div class="flex items-center mt-1">
                  <select
                    name="inadequateSunlightExposure"
                    class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700"
                    value={inadequateSunlightExposure}
                    onChange={(e) =>
                      setInadequateSunlightExposure(e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col px-4 mt-4 md:mt-0">
                <label class="text-sm text-gray-500 ml-2">
                  Bone fractures{" "}
                </label>
                <div class="flex items-center mt-1">
                  <select
                    name="boneFractures"
                    class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700"
                    value={boneFractures}
                    onChange={(e) => setBoneFractures(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 ">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="w-fit border px-6 py-2 border-cyan-700 hover:bg-cyan-700 hover:text-white text-cyan-900 rounded-xl"
              >
                {!loading ? "Predict" : "Predicting..."}
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && <Model onClose={handleOpen} result={result} />}

      <div className="mt-[50rem] md:mt-0">
        <Footer />
      </div>
    </Container>
    // </Fragment>
  );
};

export default Prediction;
