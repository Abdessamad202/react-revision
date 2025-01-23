import { DECREMENT, INCREMENT, RESET } from "./actions/counterActions";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>redux pure</h1>
      <h2>counter {counter} </h2>
      <button
        onClick={() => {
          dispatch(DECREMENT);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(RESET);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(INCREMENT);
        }}
      >
        +
      </button>
    </>
  );
};

export { Counter };
