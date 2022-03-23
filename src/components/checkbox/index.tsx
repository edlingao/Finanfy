import React, { useState } from "react";

import './checkbox.scss';

interface Props {
  checked?: Boolean,
  onChanged?(e: any, state: Boolean): void
}

export function Checkbox({checked = false, onChanged = () => null}: Props) {

  const [checkedState, setCheckedState] = useState(checked)

  const clicked = (e: any) => {
    setCheckedState(!checkedState)
    onChanged?.(e, checkedState)
  }
  return(
    <div className={`checkbox ${ checkedState ? 'color-dark-green-background' : 'color-dark-red-background'}`}
      onClick={clicked}
    >
      <div className={`square ${ checkedState ? 'color-light-green-background' : 'color-red-background'}`}>
      </div>
    </div>
  )
}