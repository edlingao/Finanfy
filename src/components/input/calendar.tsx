import React, { useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import moment, { Moment } from "moment";
import { ReactComponent as CalendarIcon} from 'icons/calendar_month_black.svg'; 

interface Props {
  onChange?( value: Moment ): void,
}

export function CalendarComponent({ onChange }: Props) {
  const [value, setValue] = useState(new Date());
  const [show, setShow] = useState<Boolean>(false);

  const ConditionalCalendar = useMemo(() => {
    return show ? <Calendar className="calendar" onChange={setValue} value={value} /> : <></>
  }, [show])

  useEffect(() => {
    triggered(false)
    onChange?.(moment(value))
  }, [value])

  const triggered = (newShow: Boolean) => {
    setShow(newShow)
  }
  return (
    <div 
      className="input-helper-container"
    >
      <CalendarIcon className="icon color-blue-fill"/>
      <input
        name="date"
        className="font-size-regular color-blue-font"
        readOnly
        value={moment(value).format('DD/MM/YYYY')} 
        onFocus={() => triggered(true)}
      />
      { ConditionalCalendar }
    </div>
  )
}
