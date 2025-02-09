import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import './App.css';

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [result, setResult] = useState(0);

  const [data, setData] = useState([
    ["Category", "Number"],
    ["EBITDA", 10],
    ["Other", 10],
  ]);

  const options = {
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
    colors: ["#dcd0ff", "#2E1A47"],
  };

  const calculateResult = () => {
    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);
    const val3 = parseFloat(num3);
    const val4 = parseFloat(num4);

    if (val1 && val2 && val3 && val4) {
      setResult(val1 - val2 - val3 - val4);
      updateData(val1 - val2 - val3 - val4);
    } else {
      setResult("Invalid Inputs");
    }
  };

  const updateData = (val1) => {
    setData([
      ["Category", "Number"],
      ["EBITDA", val1],
      ["Other", num1 - val1],
    ]);
  };

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: "#2E1A47", padding: '20px' }}>
      <h1 style={{ color: "#2E1A47" }}>Calculator</h1>
      {/* Input Fields */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Earnings (+)" style={{ margin: '10px 0', borderWidth: '2px', borderColor: '#2E1A47', borderRadius: '5px' }} />
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Interest (-)" style={{ margin: '10px 0', borderWidth: '2px', borderColor: '#2E1A47', borderRadius: '5px' }} />
          <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} placeholder="Income Tax (-)" style={{ margin: '10px 0', borderWidth: '2px', borderColor: '#2E1A47', borderRadius: '5px' }} />
          <input type="number" value={num4} onChange={(e) => setNum4(e.target.value)} placeholder="Depreciation/Amortization (-)" style={{ margin: '10px 0', borderWidth: '2px', borderColor: '#2E1A47', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"300px"} // Adjusted height
          />
        </div>
      </div>
      {/* Calculate Button */}
      <button onClick={calculateResult} style={{ margin: '20px 0' }}>Calculate</button>

      {/* Result */}
      <h2 style={{ color: "#2E1A47" }}>EBITDA Margin: {(result/num1)*100}%</h2>
    </div>
  );
};

export default Calculator;