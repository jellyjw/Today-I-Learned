import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
}

function Counter() {
  // number 변수 선언, setNumber는 변수 바인딩 값이 들어올 setter함수, useState(0)은 변수 초기화 값
  // const [number, numberSet] = useState(0);

  // const onIncrease = () => {
  //   numberSet((number) => number + 1);
  // };
  // const onDecrease = () => {
  //   numberSet((number) => number - 1);
  // };

  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
