import React, { ReactNode, useState } from "react";
import { ReactComponent as CollapseArrow } from 'icons/expand_more_black.svg';
import './collapsableCard.scss';

interface Props {
  date: String,
  children: ReactNode
  onChange?(e: any, show: Boolean): void
}

export function CollapsableCard({ date, onChange = () => null, children}: Props) {
  const [show, setShow] = useState(true);
  const toggleShow = (e: any) => {
    setShow(!show);
    onChange?.(e, show);
  }
  return (
    <>
      <div className="collapsable-card color-blue-background">
        <div className="title color-white-font font-size-hercules">{date}</div>
        <CollapseArrow onClick={toggleShow} className={`expand color-white-fill ${!show ? 'rotate' : ''}`} />
      </div>
      <div className="children-container">
        {
          show ?
            children
          : ''
        }
      </div>
    </>
  )
}
