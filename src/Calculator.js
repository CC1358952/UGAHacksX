import React, {useState } from 'react';

const Calculator = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    //const [plus, setPlus] = useState("+");
    const [result, setResult] = useState(null);

    const calculateResult = () => {

        const val1 = parseFloat(num1);
        const val2 = parseFloat(num2);
        const val3 = parseFloat(num3);
        const val4 = parseFloat(num4);

        if (val1 && val2 && val3 && val4) {
            setResult(val1 - val2 - val3 - val4);
        } else {
            setResult("Invalid Inputs");
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            {/* Input Fields */}
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter Sales (+)" />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter Row Material Costs (-)" />
            <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} placeholder="Enter Employee Costs (-)" />
            <input type="number" value={num4} onChange={(e) => setNum4(e.target.value)} placeholder="Enter Other Operating Expenses (-)" />

            {/* Calculate Button */}
            <button onClick={calculateResult}>Calculate</button>
            
            {/* Result */}
            <h2>Result: {result}</h2>
        </div>
    );


}; //calculator

export default Calculator;