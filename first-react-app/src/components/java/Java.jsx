import React from "react";
import {useContext} from 'react';

import { sampleContext } from "../../contexts/testContext";

function Java() {

  let {a,setA}=useContext(sampleContext)

  return (
    <div>
      <h1>Java</h1>
      <h2>{a}</h2>
      <p className="lead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti odit
        reprehenderit earum eligendi officia quo incidunt enim laborum ipsum?
        Quam nam nobis repellendus officia earum, facilis totam fuga assumenda
        pariatur!
      </p>
    </div>
  );
}

export default Java;
