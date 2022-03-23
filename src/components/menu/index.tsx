import React from "react";
import { ReactComponent as HomeIcon} from 'icons/home_black.svg'; 
import { ReactComponent as AddIcon} from 'icons/add_circle_black.svg'; 
import { ReactComponent as SettingsIcon} from 'icons/settings_black.svg'; 
import './menu.scss';

interface Props {
  home?: Boolean,
  add?: Boolean,
  settings?: Boolean,
}

export function Menu({ home, add, settings }: Props) {
  return (
    <div className="filled-menu">
      <div className="menu color-blue-background">
        <HomeIcon className={`icon ${ home ? 'selected' : '' }`}/>
        <AddIcon className={`icon ${ add ? 'selected' : '' }`}/>
        <SettingsIcon className={`icon ${ settings ? 'selected' : '' }`}/>
      </div>
    </div>
  )
}
