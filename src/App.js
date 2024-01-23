import React from "react";
import BlockCard from "./comp/Blockcard";
import Blockdata from "./comp/Blockdata";
import Header from "./comp/Header";
import Transaction from "./comp/Transaction";
import HashDateSection from "./comp/HashDateSection";
import ThreeColumnSection from "./comp/ThreeColumnSection";

import "./App.css";
import LeftCube from "./comp/LeftCube";
function App() {
  return (
    <div className="bg-[#161219] min-h-screen">
      <Header />
      <div className="w-full mt-10 h-0.5 bg-white" />
      <div className="my-8">
        <BlockCard className="h-[auto]" />
      </div>
      <div className="flex flex-row w-full bg-white">
        <Blockdata texts={["Hash", "Timestamp", "Size", "Weight"]} />
        <Blockdata
          texts={[
            "9cc497b4a3e39851f7434bf9029066d9",
            "02-01-2024(20 days ago)",
            "1.39MB",
            "3.99MWU",
          ]}
          textColor="text-blue-500"
        />
      </div>

      <Transaction />

      <HashDateSection
        hashData="0x1234567890abcdef"
        dateTime="2024-01-22 12:30:00"
      />
      <div className="my-4">
        <ThreeColumnSection
          columnsData={[
            {
              rows: [
                {
                  text: "Coinbase(Newly Generated Coins)",
                  color: "text-blue-500 font-bold",
                },
                { text: ".33lrldmxnb...dsjwkwb ds !+", color: "text-gray-300" },
              ],
            },
            {
              rows: [
                {
                  text: "fa4ac844f2202af8fc08485b82f8bf70ad618d87",
                  color: "text-blue-500 font-bold",
                },
                {
                  text: "OP_RETURN fa4a c844f2202af8fc08485b82f8bf70ad618d87",
                  color: "text-gray-300",
                },
                {
                  text: "OP_RETURN ?!.sfa4ac844f2202af8fc08485b82f8bf70ad618d87",
                  color: "text-gray-300",
                },
              ],
            },
            {
              rows: [
                { text: "0.67961 BTC", color: "text-blue-500 font-bold" },
                { text: "0.65555 BTC", color: "text-gray-300" },
                { text: "0.0009 BTC", color: "text-gray-300" },
              ],
            },
          ]}
        />
      </div>
      <div className="my-8">
        <HashDateSection
          hashData="0x7931477890ajhgf"
          dateTime="2024-01-23 15:22:00"
        />
      </div>
      <div className="my-4">
        <ThreeColumnSection
          columnsData={[
            {
              rows: [
                { text: ".33lrldmxnb...dsjwkwb ds !+", color: "text-gray-300" },
              ],
            },
            {
              rows: [
                {
                  text: "fa4ac844f22gjghjhhkkkn5b82f8bf70ad618d87",
                  color: "text-blue-500 font-bold",
                },
                {
                  text: "OP_RETURN fa4a c844f2202af8fc08485b82f8bf70ad618d87",
                  color: "text-gray-300",
                },
                {
                  text: "OP_RETURN ?!.sfa4ac844f2202af8fc08485b82f8bf70ad618d87",
                  color: "text-gray-300",
                },
              ],
            },
            {
              rows: [
                { text: "0.0001 BTC", color: "text-blue-500 font-bold" },
                { text: "0.0003 BTC", color: "text-gray-300" },
                { text: "0.3319 BTC", color: "text-gray-300" },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
