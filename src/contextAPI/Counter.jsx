import { useContext } from "react";
import { CounterContext } from "./context/counterContext";
const Counter = () => {
  const [counter, setCounter] = useContext(CounterContext);
  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    setCounter((counter) => counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>Context API</h1>
      <h2>counter {counter} </h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>+</button>
    </>
  );
};

export { Counter };
