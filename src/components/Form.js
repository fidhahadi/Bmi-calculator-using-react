
import { useState } from 'react';

function Form({getData}) {
  const [weight, setweight] = useState("")
  const [height, setheight] = useState("")
  const [alert, setAlert] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight) || isNaN(height)){
      setAlert(true);
    }
    else {
      getData(weight,height);
      setAlert(false);
    }
  };
  //let alertMessage
  //if(alert){
    //alertMessage =    <div className="alert alert-danger" role="alert">Please enter valid datas</div>
  //}
  //else{
    //alertMessage =''
  //}

  
  return (
    <div className="col-sm-4 shadow rounded px-5">
    <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
    <form onSubmit={onSubmit}>
      <div className="row">
          <div className="col col-sm-6">
          <div className="my-3">
            <label className="form-label">Weight(in kg) :</label>
            <input type="text"
              value = {weight} onChange={(e) => setweight(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
         <div className="col col-sm-6">
          <div className="my-3">
            <label className="form-label">Height(in m) :</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setheight(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
      </div>
      <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
    </form>
    {alert===true ?     <div className="alert alert-danger" role="alert">Please enter valid datas</div> : null
}
  </div>
  );
}

export default Form