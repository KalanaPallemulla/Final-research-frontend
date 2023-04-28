import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React from "react";
import Article from "../../Pages/Article";

const Sidebar = ({ setTab }) => {
  return (
    <div className="w-64 left-0 top-0 absolute h-screen bg-cyan-800">
      <h1 className="text-center font-serif text-2xl font-semibold mt-4 text-white">
        Admin Panel
      </h1>
      <div className="mt-16 flex flex-col items-center">
        <div
          onClick={() => setTab(0)}
          className="border border-white px-4 py-2 w-32 flex justify-center rounded-lg font-bold text-white hover:text-cyan-800 hover:bg-white cursor-pointer"
        >
          Users
        </div>
        <Popover placement="bottom">
          <PopoverHandler>
            <div className="border mt-4 border-white px-4 py-2 w-32 flex justify-center rounded-lg font-bold text-white hover:text-cyan-800 hover:bg-white cursor-pointer">
              Articles
            </div>
          </PopoverHandler>
          <PopoverContent>
            <div
              onClick={() => setTab(1)}
              className="border border-cyan-800 px-4 py-2 w-32 flex justify-center rounded-lg font-bold text-cyan-800 hover:text-white hover:bg-cyan-800 cursor-pointer"
            >
              View Articles
            </div>
            <div
              onClick={() => setTab(2)}
              className="border mt-4 border-cyan-800 px-4 py-2 w-32 flex justify-center rounded-lg font-bold text-cyan-800 hover:text-white hover:bg-cyan-800 cursor-pointer"
            >
              Add Article
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;
