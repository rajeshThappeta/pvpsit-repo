import { useState } from "react";

function Child(props) {
  //prps.data-->{counter : 0,changeCounter,getDataFromChild}

  let [sampleData, setsampleData] = useState(100);

  return (
    <div className="bg-warning p-4">
      <h2>Child</h2>
      <h3>Counter in Child -{props.data.counter}</h3>

      {/* Change the state of parent componenty */}
      <button className="btn btn-danger" onClick={props.data.changeCounter}>
        Change
      </button>

      {/* Sending child component state to Parent  */}
      <button
        className="btn btn-secondary"
        onClick={() => props.data.getDataFromChild(sampleData)}
      >
        Send data to parent
      </button>
    </div>
  );
}

export default Child;
