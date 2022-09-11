import React from 'react';
import { useState } from "react";

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="checkbox-wrapper">
        <label>
          <input 
            type="checkbox"
            className =  "checkbox"
            checked = {isChecked}
            onChange = {() => setIsChecked((!isChecked))}
             />
          <span>{label}</span>
        </label>
      </div>
    );
  };

export function scroll(y) {
  window.scrollTo(y);
}






export default Checkbox;