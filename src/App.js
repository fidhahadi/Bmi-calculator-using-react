
import { useState } from 'react';
import './App.css';
import Bmilist from './components/Bmilist';
import Bmiscore from './components/Bmiscore';
import Form from './components/Form';


function App() {
  const [bmi, setbmi] = useState("00")
  const [bmitype, setbmitype] = useState("Not Calculated")
  const [bmirange, setBmirange] = useState({
    underweight : { low: ""},
    normal :{low:"", high:""},
    overweight: {low:"", high:""},
    obesityOne :{low:"", high:""},
    obesityTwo :{low: "",high: ""},
    obesityThree :{low:"", high:""},
  });

  const onFormsub = (w,h) => {
    let b = calBmi(w,h);
    setbmi(b);
    //let btype = weightType(b);
    setbmitype(weightType(b));
    console.log(w,h);
    const range = {
      underweight : { low: calweight(18.5,h)},
    normal :{ low: calweight(18.5,h), high: calweight(24.9,h)},
    overweight: {low: calweight(25,h), high: calweight(29.9,h)},
    obesityOne :{low: calweight(30,h), high: calweight(34.9,h)},
    obesityTwo :{low: calweight(35,h),high: calweight(39.9,h)},
    obesityThree :{ high: calweight(40,h)},
    };
    setBmirange(range);
  }

  const calBmi = (w,h) => {
    return (w / (h * h)).toFixed(2);
  };

  const calweight = (b,h) => {
    return (b * h * h).toFixed(2);
  };

  const weightType = (bmi) => {
    if(bmi < 18.5){
      return "Underweight"
    }else if(18.5 < bmi && bmi < 24.9){
      return "Normal"
    }else if(24.9 < bmi && bmi < 29.9){
      return "Overweight"
    }else if(29.9 < bmi && bmi < 34.9){
      return "Obesity Class I"
    }else if(34.9 < bmi && bmi < 39.9){
      return "Obesity Class II"
    }else if(bmi > 39.9){
      return "Overweight Class III"
    }
  };
  
  return (
    <>
    <div className="container">
    <div className="row justify-content-center mt-5 mx-2">
  
    <Form getData= {onFormsub}/>
    </div>
    <div className="row justify-content-center mt-5">
    <div className="col-12 col-sm-6 mb-5">
    <Bmiscore bmiNo={bmi} bmiName = {bmitype}/>
    </div>
    <div className="col-12 col-sm-6">
    <Bmilist range={bmirange} bmi={bmi}/>
    </div>
    </div>
    </div>
    
    </>
  );
  
}

export default App;
