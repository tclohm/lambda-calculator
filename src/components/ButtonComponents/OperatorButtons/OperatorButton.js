import React from "react";

export const OperatorButton = (props) => {
	const {operator, className} = props
  return (
    <button className={className}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operator.char}
    </button>
  );
};
