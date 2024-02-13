import { useState } from "react";

const Render =()=> {
    const[display, setDisplay] = useState(false);
    let output;
    if(display){
        return(
            <div>
                <h1>Display is true hence this line is displayed</h1>
            </div>
        )
    } else{
        return(
            <div>
                <h1>Display is false</h1>
            </div>
        )
        }


//Ternary Conditional
return display ?
(
    <div>        
        <h1>Display is true hence this line is displayed</h1>
    </div>
) : (
    <div>
        <h1>Display is false</h1>
    </div>
);


//Conditional rendering using elements
if(display){
    output = <h1>Display is true  hence this line is displayed</h1>;
}else{
    output = <h2>Display is false hence this line is displayed</h2>;
}
}
export default Render;