import { useState } from "react";
import Child from "../child/Child";

function Parent() {
  //counter
  let [counter, setCounter] = useState(0);
  let [dataFromChild, setDataFromChild] = useState(0);

  function changeCounter() {
    setCounter(counter + 1);
  }

  function getDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <div
      className="bg-primary mx-auto mt-5 w-75 p-4 text-center">
      <h2>Parent</h2>
      <h2>Counter in Parent - {counter}</h2>
      <h2>{dataFromChild}</h2>
      <button className="btn btn-light m-4" onClick={changeCounter}>
        Increment
      </button>
      {/* nest child component */}
      <Child data={{ counter, changeCounter, getDataFromChild }} />
    </div>
  );
}

export default Parent;
