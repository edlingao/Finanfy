import React, { ReactNode } from "react";
import './header.scss';

interface Props {
  children?: ReactNode
}

export function Header({ children }: Props) {

  return (
    <div className="header color-blue-background">
      {children}
    </div>
  )
}
