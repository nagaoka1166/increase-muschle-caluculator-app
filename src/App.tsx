import React, { useState } from 'react';
import './App.css';
import { Select } from './component/Select';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';


// 0.6kg × 7,000kcal ÷ 30日+ 2,000kcal＝2,140kcal（1日の目標摂取カロリー）
// MonthlyIncreasWeightに入れた値を使って目標摂取カロリーを計算していく
function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState(0)
  const submit = () => {
    const bmi = weight / (height * height)
    setResult(bmi);
  }

  // const submit = () => {
  //   const  IncreaseDayCalorie = MonthlyIncreasWeight * 7000 / 30 * 2000
  //   setResult(IncreaseDayCalorie);
  // }

  const options = [
    {
      id: 0,
      value: '1',
    },
    {
      id: 1,
      value: '2',
    },
  ]

//   const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setData({ ...data, userName: value });
// }
  return (
    <div>
      <h1>BMI計算機だよ</h1>
        <div>
          <label htmlFor="pref">筋トレレベル：</label>
          <Select
            value="default value"
            optionProp={options}
            onChange={(value) => (value)}
          />
        </div>
        {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        ></Select> */}
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
  );
}

export default App;


