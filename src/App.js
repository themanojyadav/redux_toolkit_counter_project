import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./store/reducers/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container card card-body mt-4 shadow-lg border-0">
      <h3
        style={{ textAlign: "center" }}
        className="text-uppercase fw-bold mb-5 mt-4"
      >
        COUNTER USING REDUX TOOLKIT
      </h3>
      <div style={{ textAlign: "center" }}>
        <h1 className="badge bg-warning rounded-pill shadow fs-1">{count}</h1>
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-success me-3"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>

          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className="mt-4">
          <button
            className="btn btn-danger px-4 text-uppercase"
            onClick={() => dispatch(reset())}
          >
            Reset COunter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
