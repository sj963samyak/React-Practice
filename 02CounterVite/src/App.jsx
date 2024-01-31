import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("value added", counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log(`value removed ${counter}`);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
//problem in ui updation counter value is not updated we will update the data using hooks
