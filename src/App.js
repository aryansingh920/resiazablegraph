import React,{useState} from "react";
import "./App.css";
import classes from "./App";
const App = () => {
  const [val1,setVal1] = useState(0)
  const [val2,setVal2] = useState(0)
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-dark p-2 rounded1 border m-2">
              <input value={val1} onChange={(e)=>{setVal1(e.target.value)}} id="bar" type="range" />
            </div>
          </div>
          <div className="col">{val1}%</div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="row">
        <div className="col-7"></div>
        <div className="col"></div>

        <div className="col-4">
        {val2}%
          <div  className="vertical bg-dark p-2 rounded1 border m-2">
          
            <input value={val2} onChange={(e)=>{setVal2(e.target.value)}} id="bar" orient="vertical" type="range" />
            
          </div>
        </div>
        <div className="col"></div>
      </div>
      </div>
    </div>
  );
};

export default App;
