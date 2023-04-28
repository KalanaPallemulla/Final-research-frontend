import React from "react";

const HistoryCard = () => {
  return (
    <div className="bg-white md:w-[30rem] w-screen p-2 md:p-8 rounded-xl">
      <h1 className="text-base font-serif  text-cyan-800">2nd of May</h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Age : <span className="text-cyan-600">12 months</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Hight : <span className="text-cyan-600">30 cm</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Serum Calcium Level : <span className="text-cyan-600">6.3</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Infant's Gastrational Age :<span className="text-cyan-600">Yes</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Bow Legs : <span className="text-cyan-600">No</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Inadequate sunlight exposure :<span className="text-cyan-600">Yes</span>
      </h1>
      <h1 className="mt-2 font-mono text-base text-gray-600">
        Bone fractures : <span className="text-cyan-600">No</span>
      </h1>
      <h1 className="mt-4 font-mono text-base text-gray-600">
        Result :{" "}
        <span className="text-orange-700">
          You don't have a rick of rickets
        </span>
      </h1>
    </div>
  );
};

export default HistoryCard;
