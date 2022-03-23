import React, { ReactNode } from "react";
import './scroller.scss'

interface Props {
  children: ReactNode
}


export function Scroller({children}: Props) {
  return (
    <div className="scroller">
      {children}
    </div>
  )
}
