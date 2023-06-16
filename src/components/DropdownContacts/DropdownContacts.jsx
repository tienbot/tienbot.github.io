import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'
import mailIcon from './assets/mail.png'
import phoneIcon from './assets/phone.png'
import s from './DropdownContacts.module.scss'

export const DropdownContacts = () => {
  return (
    <div className={s.wrap}>
      <LinkComponent
        image={mailIcon}
        href="mailto:tien.ru@mail.ru"
        text="tien.ru@mail.ru"
      />
      <LinkComponent
        image={phoneIcon}
        href="tel:+79253401668"
        text="+79253401668"
      />
    </div>
  )
}
