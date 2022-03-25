import React from "react";
import { ReactComponent as HomeIcon} from 'icons/home_black.svg'; 
import { ReactComponent as AddIcon} from 'icons/add_circle_black.svg'; 
import { ReactComponent as SettingsIcon} from 'icons/settings_black.svg';
import './menu.scss';
import { IconLink } from "components/iconLink";

interface Props {
  home?: Boolean,
  add?: Boolean,
  settings?: Boolean,
}

export function Menu({ home, add, settings }: Props) {
  

  return (
    <div className="filled-menu">
      <div className="menu color-blue-background">
        <IconLink path='/' Icon={HomeIcon} />
        <IconLink path='/add' Icon={AddIcon} />
        <IconLink path='/settings' Icon={SettingsIcon} />
      </div>
    </div>
  )
}
