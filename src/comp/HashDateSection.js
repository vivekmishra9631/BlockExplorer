function HashDateSection({ hashData, dateTime }) {
  return (
    <div className="bg-[rgb(40,36,52)] flex items-center justify-between p-4 rounded-md text-white">
      <span className="text-blue-500 font-bold">{hashData}</span>
      <span>{dateTime}</span>
    </div>
  );
}

export default HashDateSection;
