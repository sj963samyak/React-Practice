import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    // then what will be the value that is printed
    setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    //then the value will gets updated
    //then  in that case it will not gets upadetd if we have to update it then we have to use
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // counter = counter + 1;
    console.log("value added", counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
    console.log(`value removed ${counter}`);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  );
}

export default App;
//problem in ui updation counter value is not updated we will update the data using hooks
6, 7, 8;

//react will decide that thay will decide when the variables gets change that if ui will update then I will decide
// Let [counter,setCounter]
//counter->this is the value
//set counter is a function that is defined in hooks as a usestate hook second argumnet we can call it anyname we can use it to update the value
// scenerio is used in interview
// if we duplicate the value setCounter(counter+1)
//If we do not use useState hook in the react
//then the value of ui will not update in every place
//and if we use useState hook then the value of counter will gets updated each place
