import React from "react";
import { useState } from "react";
import "../myStyle.css";

function BgChanger() {
  // let [isButtonClicked, setIsButtonClicked] = useState(false);
  // let handlebuttonclicked = () => (setIsButtonClicked = true);
  let [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BgChanger;

//approach that we have used is hooks approach useState
//Ist div is used to fix the navbar
//2nd button is used to set the buttons in the div content
//target 40,000 this year
//inset-x-0 bottom-12
