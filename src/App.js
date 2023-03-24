import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const back = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calc = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <div className="main" name="calc">
      <form>
        <input value={result} type="text" className="res"></input>
      </form>
      <div className="build">
        <button onClick={clear} className="num-clear">
          C
        </button>
        <button onClick={back} className="num-back signs">
          Back
        </button>
        <button name="/" onClick={handleClick} className="num-div signs">
          /
        </button>

        <button name="7" onClick={handleClick} className="num">
          7
        </button>
        <button name="8" onClick={handleClick} className="num">
          8
        </button>
        <button name="9" onClick={handleClick} className="num">
          9
        </button>
        <button name="*" onClick={handleClick} className="num-multi signs">
          &times;
        </button>

        <button name="4" onClick={handleClick} className="num">
          4
        </button>
        <button name="5" onClick={handleClick} className="num">
          5
        </button>
        <button name="6" onClick={handleClick} className="num">
          6
        </button>
        <button name="-" onClick={handleClick} className="num-minus signs">
          -
        </button>

        <button name="1" onClick={handleClick} className="num">
          1
        </button>
        <button name="2" onClick={handleClick} className="num">
          2
        </button>
        <button name="3" onClick={handleClick} className="num">
          3
        </button>
        <button name="+" onClick={handleClick} className="num-plus signs">
          +
        </button>
        <button name="0" onClick={handleClick} className="num">
          0
        </button>
        <button name="," onClick={handleClick} className="num">
          ,
        </button>
        <button onClick={calc} className="num-equal">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
