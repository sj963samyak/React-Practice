import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

function RandomPassGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()[]{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);
  const copyPasswordToClipBoard = useCallback(() => {
    // to select the value
    passwordRef.current?.select();
    //selection range
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 nmy-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="charactersAllowed"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactersAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default RandomPassGen;

//how copy will work
//numbe rof dependencies in callback -->number,length and characters
//in the array we have passed the dependencies
//now what is dependencies in this project
//they are the values when changes then the function run
//length we will pass then it will generate a password
//w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 tailwind property that i will study
//now the task is to include the slider
//tailwind property gap property gap-x-2
// to make a silder

// to set characters allowed

//useEffect hook is ued to sychronize the components
//useCallback hook is used where if dependency will change then optimize the function vaue
//useEffect hook is ued to rerun the function if some of the depemdecy will change
//useRef hook
//now the major challenge is to copy the value incopy clipboard

//1.input range copy that value
//useRef hook
//window is used to to copy that value
