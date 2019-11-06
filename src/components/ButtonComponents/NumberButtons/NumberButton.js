import React from "react";

export const NumberButton = (props) => {
	const {number, className, output} = props; 
	console.log(props);
  return (
    <button className={className}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};
