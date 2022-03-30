import React from "react";
import { Calendar } from './calendar';
import { Expense } from './expense';
import { RegularInput } from "./regular";

import './input.scss';

interface Props {
  title: string,
  placeholder: string,
  Icon?:  React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>, // <- SVG Icon
  number?: Boolean,
  date?: Boolean,
  expense?: Boolean,
}

export function Input({title, Icon, placeholder, number = false, date = false, expense = false}: Props) {
  

  const InputType = () => {
    
    if(date) {
      return (<Calendar />)
    }
  
    if(expense) {
      return (<Expense />)
    }

    
    return (<RegularInput type={ number ? 'number' : 'text' } placehoder={placeholder}/>)
  }


  return (
    <div className="input-container">
      <label>
        <p className="label font-size-regular color-blue-font">{title}</p>
        <InputType />
      </label>
    </div>
  )


}
