import React from "react";
import Image from 'next/image'

import style from './css/style.module.css'
import alibaba from "./img/111.png";
import Alligator_1 from "./img/Alligator_1.png";
import Alligator_2 from "./img/Alligatorv_2.png";

export default function Coin() {
  return (
    <div className={style.container}>
      <div className={style.coins}>
        <h2 className={style.h_2}>Bullion coins</h2>
        <p className={style.show_all}>Show all &#10095;</p>
        <Image className={style.img} src={alibaba} alt="foto" />
      </div>
      <div className={style.coins}>
        <h2 className={style.h_2}>Exclusive coins</h2>
        <p className={style.show_all}>Show all &#10095;</p>
        <Image className={style.img} src={Alligator_1} alt="foto" />
      </div>
      <div className={style.coins}>
        <h2 className={style.h_2}>Commemorative coins</h2>
        <p className={style.show_all}>Show all &#10095;</p>
        <Image className={style.img} src={Alligator_2} alt="foto" />
      </div>
    </div>
  );
}
