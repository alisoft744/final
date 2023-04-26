import React from 'react'
import style from './css/style.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div >
      <ul className={style.container}>
        <li><Link href='.././' className={style.link}>Homepage</Link></li>
        <li><Link href='.././filter' className={style.link}>Filter</Link></li>
        <li><Link href='.././listofthecoins' className={style.link}>List of the coins</Link></li>
        <li><Link href='.././description' className={style.link}>Description</Link></li>
        <li><Link href='.././admin' className={style.link}>Admin panel</Link></li>
        <li><Link href='.././panel1' className={style.link}>Admin panel N1</Link></li>
        <li><Link href='.././panel2' className={style.link}>Admin panel N2</Link></li>
      </ul>
    </div>
  )
}
