import React, { useEffect, useState } from "react";
import moment from "moment";

const HistoryCard = ({ item }) => {
  const [status, setStatus] = useState();
  console.log("item", item);
  useEffect(() => {
    if ((item.result >= 0 && item.result < 15) || item.result < 0) {
      setStatus(0);
    } else if (item.result >= 15 && item.result < 40) {
      setStatus(1);
    } else if (item.result >= 40 && item.result < 65) {
      setStatus(2);
    } else if (item.result >= 65) {
      setStatus(3);
    }
  }, [item.result]);
  return (
    <div className="bg-white md:w-[30rem] w-screen p-2 md:p-8 rounded-xl">
      <h1 className="text-base font-serif  text-cyan-800">
        {moment(item.createdAt).format("MMM Do YYYY")}
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Age : <span className="text-cyan-600">{item.age} months</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Hight : <span className="text-cyan-600">{item.hight} cm</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Serum Calcium Level :{" "}
        <span className="text-cyan-600">{item.serumCalciumLevel}</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Infant's Gastrational Age :
        <span className="text-cyan-600">
          {item.infantGastrationalAge ? "True" : "False"}
        </span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Bow Legs :{" "}
        <span className="text-cyan-600">{item.bowLegs ? "True" : "False"}</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Inadequate sunlight exposure :
        <span className="text-cyan-600">
          {item.inadequateSunlightExposure ? "True" : "False"}
        </span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Bone fractures :{" "}
        <span className="text-cyan-600">
          {item.boneFractures ? "True" : "False"}
        </span>
      </h1>
      <h1 className="mt-4 font-mono text-base text-gray-600">
        Result :
        <span className="text-orange-700">
          {status === 0
            ? "Your have no risk of rickets"
            : status === 1
            ? "Your have low risk of rickets"
            : status === 2
            ? "Your have midrange risk of rickets"
            : status === 3 && "Your have high risk of rickets"}
        </span>
      </h1>
    </div>
  );
};

export default HistoryCard;
