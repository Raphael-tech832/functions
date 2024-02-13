import { useState } from "react";
import {useState} from "react";
const Sample = () =>{
    const [count, setCount]= useState(1);
return (
    <div>
        <h1>MY value is {count}</h1>
        <button onClick={() => setCount (count +1)}>plus 1</button>
        <button onClick={() => setCount (count -1)}>minus 1</button>
    </div>
);
   
}
export default Sample;
