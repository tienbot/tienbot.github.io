import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'
import linkIcon from './assets/link.png'
import s from './DropdownLinks.module.scss'

export const DropdownLinks = () => {
  return (
    <div className={s.wrap}>
      <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/channel/UCzDN5QOea-Lttkg8Kf3RnHw"
        text="YouTube channel"
      />
      {/* <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/"
        text="GuruShots profile"
      /> */}
      <LinkComponent
        image={linkIcon}
        href="https://www.instagram.com/lgun_plygun/"
        text="Instagram accaunt"
      />
      {/* <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/"
        text="Twich profile"
      /> */}
    </div>
  )
}
