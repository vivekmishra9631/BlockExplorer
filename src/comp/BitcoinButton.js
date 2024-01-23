function BitcoinButton({ text = "0.669987 BTC" }) {
  return (
    <button className="relative group px-3 py-2 rounded-none text-white shadow-md bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
      <span className="absolute inset-0 opacity-25 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl group-hover:opacity-75 group-active:opacity-100 transition-opacity duration-150 ease-in-out"></span>
      <span className="absolute inset-0 top-px left-px bg-blue-600 rounded-xl filter saturate-100 opacity-75"></span>
      <span className="relative text-lg">{text}</span>
    </button>
  );
}

export default BitcoinButton;
