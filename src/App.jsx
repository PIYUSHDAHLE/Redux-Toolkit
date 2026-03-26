import { useDispatch, useSelector } from "react-redux";
import { inc, dec, incAmount } from "./redux/features/counterSlice";
import { useState } from "react";

function App() {
  const [num, setNum] = useState('');
  const dispatch = useDispatch(); // kaam karvana hai
  const counter = useSelector((state) => state.counter.value); // show karana hai toh

  return (
    <>
      <section className="flex flex-col gap-3 justify-center items-center h-screen bg-purple-700">
        <h1 className="text-white text-5xl font-bold">Counter Project</h1>
        <h1 className="text-white text-4xl font-bold">{counter}</h1>
        <input
          className="bg-amber-400 p-2 rounded-2xl text-center"
          type="number"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => {
              dispatch(incAmount(Number(num)));
            }}
            className="p-2 cursor-pointer rounded hover:bg-blue-500 bg-blue-600 text-white"
          >
            Increment Amount
          </button>

          <button
            onClick={() => dispatch(inc())}
            className="p-2 cursor-pointer rounded hover:bg-green-500 bg-green-600 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(dec())}
            className="p-2 cursor-pointer rounded hover:bg-red-500 bg-red-600 text-white"
          >
            Decrement
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
