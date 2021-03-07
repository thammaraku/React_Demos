import React from "react";

function Math(props) {
  let result = 2 + 2;

  switch (props.operator) {
    case "+":
      result = props.num1 + props.num2;
      break;

    case "-":
      result = props.num1 - props.num2;
      break;

    case "*":
      result = props.num1 * props.num2;
      break;

    case "/":
      result = props.num1 / props.num2;
      break;

    default:
      result = NaN;
  }

  // Make sure that every component must return something
  return (
    <div>
      {`${props.num1} ${props.operator} ${props.num2}`} = {result}
    </div>
  );
}

export default Math;
