import React, { useEffect, useState } from "react";


interface Props {
  placehoder: string,
  type: string,
  onChange?( value: string): void,
}

export function  RegularInput({placehoder, type, onChange}: Props) {
  const [returnedValue, setReturnedValue] = useState('')
  
  const setNewValue = (e: any) => {
    const value = e.target.value;
    setReturnedValue(value);
  }

  useEffect(() => {
    onChange?.(returnedValue)
  }, [returnedValue])

  return (
    <>
      <input
        type={type}
        className="input color-black-font font-size-regular"
        placeholder={placehoder}
        onKeyDown={setNewValue}
      />
    </>
  )
}
