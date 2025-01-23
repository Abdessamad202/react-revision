import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>redux tookit</h1>
      <h2>counter {counter} </h2>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </>
  );
};

export { Counter };
