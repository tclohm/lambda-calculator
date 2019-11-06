import React from "react";

export const NumberButton = (props) => {
	const {number, className, numberInput, previousInput, numberFunction} = props;
	//console.log(props);
  return (
    <button className={className} onClick={() => numberFunction(number, previousInput) }>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};
