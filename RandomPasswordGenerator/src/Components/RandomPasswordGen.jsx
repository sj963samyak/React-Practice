import React from "react";
import { useState, useCallback } from "react";

function RandomPassGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharacterAllowed] = useState(false);
  const [passowrd, setPassword] = useState("");

  const passwordGenerator =
    (() => {
      let pass = "";
      let str = "";
    },
    [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <h1 className="text-white text-4xl text-center">Password Generator</h1>
    </>
  );
}
export default RandomPassGen;

//how copy will work
//numbe rof dependencies in callback -->number,length and characters
//in the array we have passed the dependencies
//now what is dependencies in this project
//they are the values when changes then the function run
