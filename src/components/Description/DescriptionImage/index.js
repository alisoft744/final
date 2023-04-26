import React from 'react'
import Image from 'next/image'
import front from '/Users/Ali/Desktop/final/coinapp/src/components/Coin/img/111.png'
import style from './css/style.module.css'

export default function DescriptionImage() {
  return (
    <div className={style.container}>
        <Image className={style.img} src={front} alt='front'/>
        <Image className={style.img} src={front} alt='back'/>
      
    </div>
  )
}
