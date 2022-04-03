import React from "react";
import { ReactComponent as CollapseArrow } from 'icons/down.svg';


const Counter = () => {

  return (
    <div className="counter">
      <label>
        <input type="number" name="repeat-interval" className="font-size-regular color-white-font" value={10}/>
      </label>
      <div className="controls">
        <CollapseArrow className="icon reverse color-orange-fill"/>
        <CollapseArrow className="icon color-orange-fill"/>
      </div>
    </div>      
  )
}

export function Expense() {
  return (
    <div className="expense">
      <h4 className="color-blue-font font-size-regular">Cada</h4>
      <Counter />
    </div>
  )
}
