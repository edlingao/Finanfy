import React, { useEffect, useState } from "react";
import { Link, Path } from "react-router-dom";

interface Props {
  path: String,
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
}

export function IconLink({path, Icon}: Props) {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(window.location.pathname === path)
  }, [path])
  return (
    <Link to={ `${path}` }>
      <Icon className={`icon ${ selected ? 'selected' : '' }`}/>
    </Link>
  )
}
