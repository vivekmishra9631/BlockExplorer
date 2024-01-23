import React from "react";

const RightCube = ({ data }) => {
  return (
    <div className="group relative bg-gradient-to-b from-purple-400 to-blue-500 rounded-none border border-black border-dotted divide-x divide-black-dotted px-10 py-10 text-white font-semibold">
      {data}

      <div className="absolute top-0 left-0 h-full w-full bg-2f2425 z-10 group-hover:opacity-30 transition-opacity duration-150 ease-in-out"></div>
      <div className="absolute bottom-0 right-0 h-full w-full bg-2f2425 z-10 group-hover:opacity-30 transition-opacity duration-150 ease-in-out"></div>
      <div className="shadow-md shadow-brown-500/50 group-hover:shadow-lg"></div>
    </div>
  );
};

export default RightCube;
