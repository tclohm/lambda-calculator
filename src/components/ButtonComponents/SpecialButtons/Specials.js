import React, { useState } from "react";
import data from "../../../data";
import { SpecialButton } from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialChar, setSpecialChar] = useState(data.specials);

  return (
    <div className="left">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialChar.map( (sp, index) => (
      		<SpecialButton className="btn-numbers specials" key={index} special={sp}/>
      ))}
    </div>
  );
};
