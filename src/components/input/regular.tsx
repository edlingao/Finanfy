import React, { useEffect, useMemo, useState } from "react";


interface Props {
  placehoder: string,
  type: string,
  onChange?( value: string): void,
  Icon?:  React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>,
}

export function  RegularInput({placehoder, type, onChange, Icon}: Props) {
  const [returnedValue, setReturnedValue] = useState('')
  
  const setNewValue = (e: any) => {
    const value = e.target.value;
    setReturnedValue(value);
  }

  useEffect(() => {
    onChange?.(returnedValue)
  }, [returnedValue])


  const InputWithOrWithoutIcon = useMemo(() => {
    if(Icon !== null) {
      return (
        <div className="input-helper-container">
          {Icon}
          <input
            type={type}
            className="input color-black-font font-size-regular"
            placeholder={placehoder}
            onKeyDown={setNewValue}
          />
        </div>
      )
    }

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
  }, [Icon])

  return (
    <>
      {InputWithOrWithoutIcon}
    </>
  )
}
