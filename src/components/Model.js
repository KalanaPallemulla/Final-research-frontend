import React from "react";
import { Link } from "react-router-dom";

const Model = ({ onClose }) => {
  const handleBackgroundClick = (event) => {
    // Check if the click occurred on the background div
    if (event.target.classList.contains("bg-black")) {
      // Call the onClose function passed as a prop to close the Model
      onClose();
    }
  };
  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl flex items-center justify-center transition-opacity duration-1000 ani"
    >
      <div className="bg-cyan-800 flex flex-col items-center p-4 md:p-8 rounded-xl opacity-100 transition-opacity duration-1000 ease-in-out">
        <div>
          <h1 className="text-2xl font-serif text-white">Predict results</h1>
        </div>
        <div>
          <h1 className="text-orange-600 text-xl font-bold font-serif mt-4">
            Your have no risk of rickets
          </h1>
        </div>
        <div>
          <Link to={`/treatments/1`}>
            <h1 className="text-gray-400 text-xs  font-serif mt-2">
              Medical suggestions and treatments
            </h1>
          </Link>
        </div>
        <div>
          <h1
            onClick={onClose}
            className="text-white text-xs  font-serif mt-8 cursor-pointer"
          >
            Close
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Model;
