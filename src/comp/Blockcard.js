import React from "react";

function BlockCard() {
  return (
    <div className="relative group rounded-lg shadow-md bg-[#18141c] text-white p-4 md:w-300 md:h-[auto + 10px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-400 font-medium">Block</span>
        <span className="text-blue-500 font-bold">667306</span>
      </span>
      <button
        type="button"
        className="absolute top-0 right-0 m-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full"
      >
        <svg
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default BlockCard;
