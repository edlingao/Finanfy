import React, { ReactNode } from "react";
import './view.scss';

interface Props {
  context?: String,
  children?: ReactNode
}

export function View({ context, children }: Props) {
  return (
    <div className={`main ${ context ?? '' }`}>
      {children}
    </div>
  )
}
