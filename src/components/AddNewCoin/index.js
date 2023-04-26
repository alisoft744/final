import React from 'react'
import style from './css/style.module.css'

export default function AddCoin() {
  return (
    <div className={style.container_addcoin}>
      <div className={style.container_add}>
        <p>+</p>
      </div>
      <a href='#'>Add new coin</a>
    </div>
  )
}
