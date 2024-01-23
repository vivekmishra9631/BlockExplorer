import BitcoinButton from "./BitcoinButton";

function ThreeColumnSection({ columnsData }) {
  return (
    <div>
      <div className="flex flex-wrap bg-[#18141c] p-2 ">
        {columnsData.map((column, i) => (
          <div key={i} className="lg:w-1/3">
            {column.rows.map((row, j) => (
              <div key={j} className={row.color}>
                {row.text}
                <br />
                {j === 2 &&
                  i === 2 && ( // Condition to render BitcoinButton only in the third column
                    <BitcoinButton text={row.text} />
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeColumnSection;
