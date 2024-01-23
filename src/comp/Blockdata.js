function Blockdata({ texts = [], textColor = "text-white" }) {
  const colors = ["bg-[rgb(40,36,52)]", "bg-[rgb(32,30,44)]"];

  return (
    <div className="w-full md:w-1/2">
      {texts.map((text, i) => (
        <div
          key={i}
          className={`p-4 rounded-none ${colors[i % 2]} ${textColor}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default Blockdata;
