import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  // let myObj = {
  //   username: "samyak",
  //   age: 23,
  // };
  // let newArray = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tail wind test
      </h1>
      <Card username="samyak" btnText="Click Me" />
      <Card username="hitesh" btnText="Visit Me" />
    </>
  );
}

export default App;
//props we will make the component of card in prop so it can be reused we will make a differnet component card so it acn be reused
