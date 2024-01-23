function Transaction() {
  const buttons = ["1", "2", "3", "4", "5", "</>", "208", ">>", ">> >>"];

  return (
    <div className="bg-[#18141c] flex items-center justify-between p-4 overflow-x-scroll lg:overflow-hidden rounded-md">
      <span className="text-gray-300 font-bold">2,075 Transactions</span>
      <div className="flex gap-2">
        {buttons.map((button) => (
          <button
            key={button}
            className="px-2 py-1 rounded-none text-white bg-blue-500 hover:bg-purple-500 active:bg-purple-700 focus:outline-none focus:ring focus:ring-white"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Transaction;
