import React from "react";
import Container from "../components/Container";
import bones from "../assets/bone.jpeg";
import Footer from "../components/Footer";
const Prediction = () => {
  return (
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
                />
              </div>
              <div className="flex flex-col px-4 mt-4 md:mt-0">
                <label className="text-sm  text-gray-500 ml-2">
                  Hight<span className="text-xs"> (in cm)</span>
                </label>
                <input
                  className="px-4 py-2 border rounded-lg mt-1 placeholder:text-xs text-xs"
                  placeholder="12 Months"
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
                  placeholder="12 Months"
                />
              </div>
            </div>
            {/* drop down */}

            {/* drop down */}
            <div className="w-full md:grid md:grid-cols-2 ">
              <div class="flex flex-col px-4 mt-4 md:mt-4">
                <label class="text-sm text-gray-500 ml-2">
                  Infant's Gastrational Age
                </label>
                <div class="flex items-center mt-1">
                  <select class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700">
                    <option className="" value="0">
                      Select age
                    </option>
                    <option value="3">Yes</option>
                    <option value="6">No</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col px-4 mt-4 md:mt-4">
                <label class="text-sm text-gray-500 ml-2">Bow Legs</label>
                <div class="flex items-center mt-1">
                  <select class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700">
                    <option value="0">Select age</option>
                    <option value="3">Yes</option>
                    <option value="6">No</option>
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
                  <select class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700">
                    <option value="0">Select age</option>
                    <option value="3">Yes</option>
                    <option value="6">No</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col px-4 mt-4 md:mt-0">
                <label class="text-sm text-gray-500 ml-2">
                  Bone fractures{" "}
                </label>
                <div class="flex items-center mt-1">
                  <select class="border border-gray-300 rounded-md px-4 py-2 w-full AF text-xs text-white bg-cyan-700">
                    <option value="0">Select age</option>
                    <option value="3">Yes</option>
                    <option value="6">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 ">
              <button className="w-fit border px-6 py-2 border-cyan-700 hover:bg-cyan-700 hover:text-white text-cyan-900 rounded-xl">
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50rem] md:mt-0">
        <Footer />
      </div>
    </Container>
  );
};

export default Prediction;
