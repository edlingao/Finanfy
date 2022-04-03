import React from "react";
import { CalendarComponent } from './calendar';
import { Expense } from './expense';
import { RegularInput } from "./regular";

import './input.scss';
import { Moment } from "moment";

interface Props {
  title: string,
  Icon?:  React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>, // <- SVG Icon
  number?: Boolean,
  date?: Boolean,
  expense?: Boolean,
  onChange?(): string | Moment, 
}

export function Input({title, Icon, number = false, date = false, expense = false}: Props) {
  

  const InputType = () => {
    
    if(date) {
      return (<CalendarComponent />)
    }
  
    if(expense) {
      return (<Expense />)
    }

    return (<RegularInput Icon={Icon} type={ number ? 'number' : 'text' } placehoder={title}/>)
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
