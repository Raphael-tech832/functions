import { useState } from "react"

const Addsystem = () => {
    const [number, setNumber] = useState('') 
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    // part to calculate
    const calculate = (e) => { 
        e.preventDefault();
        setResult(Number(number) + Number(number2));
    }


    return (
        <div> 
            <form onSubmit={calculate}>
                <label>Enter First Number</label>
                <br/>
                <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="First Number" />
                <br/>
                <label>Enter Second Number</label>
                <br/>
                <input type="number" name="number2" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Second Number" />
                <br/>
                <button type="submit">Display</button>
                <p>Result: { result }</p>

                </form>
        </div>
    )
}

export default Addsystem;