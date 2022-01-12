import React, { useState } from "react";
const Home = () => {
  let [val, setVal] = useState([]);
  let [sum, setSum] = useState([]);
  let handleVal = e => {
    e.preventDefault();
    setVal([...val, e.target.name]);
  };
  let handleSum = e => {
    e.preventDefault();
    setSum(eval(val.join("")));
  };
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="mx-[40%]">
      <div className="content-center flex-col mt-10">
        <h1>{val}</h1>
        <h1>total{sum}</h1>
        {arr.map(a => (
          <button
            name={a}
            value={a}
            className="p-7 bg-slate-300 hover:bg-slate-100"
            onClick={handleVal}
          >
            {a}
          </button>
        ))}
        <button
          name="+"
          className="p-7 bg-slate-500 hover:bg-slate-100"
          onClick={handleVal}
        >
          +
        </button>
        <button
          name="-"
          className="p-7  bg-slate-500 hover:bg-slate-100"
          onClick={handleVal}
        >
          -
        </button>
        <button
          name="*"
          className="p-7 bg-slate-500 hover:bg-slate-100"
          onClick={handleVal}
        >
          *
        </button>
        <button
          name="/"
          className="p-7  bg-slate-500 hover:bg-slate-100"
          onClick={handleVal}
        >
          /
        </button>
        <button
          className="p-7  bg-slate-500 hover:bg-slate-100"
          onClick={handleSum}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Home;
