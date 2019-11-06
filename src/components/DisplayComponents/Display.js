import React from "react";

export const Display = (props) => {
	const {output, updateOutput} = props
  return <div className="display">{output}</div>;
};
