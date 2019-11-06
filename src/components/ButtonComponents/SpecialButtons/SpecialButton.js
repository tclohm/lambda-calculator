import React from "react";

export const SpecialButton = (props) => {
	const {special, className} = props;
  return (
		<button className={className}>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
	 		{special}
		</button>
    
  );
};
