import React, {useState } from 'react';
import { Chart } from "react-google-charts";

const Calculator = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    const [result, setResult] = useState(null);

    const data = [["Category", "Number"], ["Earnings", 10], ["Interest", 10], ["Income Tax", 0], ["Depreciation/Amortization", 0]];

    const options = {
        title: "EBITDA Margin",
        pieHole: 0.4, 
        is3D: true, 
        pieStartAngle: 100,
        sliceVisibilityThreshold: 0.02, 
        legend: {
          position: "bottom",
          alignment: "center",
          textStyle: {
            color: "#233238",
            fontSize: 14,
          },
        },
        colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
      };

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

    const updateData = () => { 
        data = [["Category", "Number"], ["Earnings", num1], ["Interest", num2], ["Income Tax", num3], ["Depreciation/Amortization", num4]];
        return data;
    };

    return (
        <div style ={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <h1>Calculator</h1>
            {/* Input Fields */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Earnings (+)" style={{ margin: '10px 0' }} />
                    <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Interest (-)" style={{ margin: '10px 0' }} />
                    <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} placeholder="Income Tax (-)" style={{ margin: '10px 0' }} />
                    <input type="number" value={num4} onChange={(e) => setNum4(e.target.value)} placeholder="Depreciation/Amortization (-)" style={{ margin: '10px 0' }} />
                </div>
                <div>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
            </div>
            {/* Calculate Button */}
            <button onClick={calculateResult}>Calculate</button>
            
            {/* Result */}
            <h2>EBITDA Margin: {result}%</h2>
            
        </div>
    );


}; //calculator

export default Calculator;