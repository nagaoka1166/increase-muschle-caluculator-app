import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState(0)
  const submit = () => {
    const bmi = weight / (height * height)
    setResult(bmi);
  }
  return (
    <div>
      <h1>BMI計算機だよ</h1>
      <div>
        <div>
          <label htmlFor="height">身長(m)</label>
          <input id="height" value={height} type="number"
            onChange={(event) => setHeight(event.target.valueAsNumber)} />
        </div>
        <div>
          <label htmlFor="weight">体重(kg)</label>
          <input id="weight" value={weight} type="number"
            onChange={(event) => setWeight(event.target.valueAsNumber)} />
        </div>
        {(result > 0) ? <p>BMIは{result}です！</p> : null}
        <button onClick={submit}>計算する</button>
      </div>
    </div >
  );
}

export default App;


