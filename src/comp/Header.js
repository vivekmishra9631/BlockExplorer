import React from "react";
import LeftCube from "./LeftCube";
import RightCube from "./RightCube";
function Header() {
  return (
    <div className="mx-auto px-4 flex items-center justify-between line lg:overflow-hidden overflow-x-auto w-screen">
      <div className="flex items-center space-x-8">
        <LeftCube
          data={
            <div>
              <h1>1.21 MB</h1>
              <h1>Block1</h1>
            </div>
          }
        />
        <LeftCube
          data={
            <div>
              <h1>1.31 MB</h1>
              <h1>Block2</h1>
            </div>
          }
        />
        <LeftCube
          data={
            <div>
              <h1>1.1 MB</h1>
              <h1>Block3</h1>
            </div>
          }
        />
        <LeftCube
          data={
            <div>
              <h1>1.41 MB</h1>
              <h1>Block4</h1>
            </div>
          }
        />
      </div>
      <div className="h-20 w-1 border-l border-dotted border-gray-400 mx-4"></div>
      <div className="flex items-center space-x-8">
        <RightCube
          data={
            <div>
              <h1>1.45 MB</h1>
              <h1>Block5</h1>
            </div>
          }
        />
        <RightCube
          data={
            <div>
              <h1>1.12 MB</h1>
              <h1>Block6</h1>
            </div>
          }
        />
        <RightCube
          data={
            <div>
              <h1>1.11 MB</h1>
              <h1>Block7</h1>
            </div>
          }
        />
        <RightCube
          data={
            <div>
              <h1>1.09 MB</h1>
              <h1>Block8</h1>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Header;
