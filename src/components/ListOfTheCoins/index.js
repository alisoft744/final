import React from "react";
import Image from "next/image";
import img from "../Coin/img/111.png";
import style from './css/style.module.css'

export default function Coins() {
  return (
    <div className={style.container}>
      <div>
        <Image className={style.img} src={img} alt="sekil"></Image>
      </div>
      <div className={style.container2}>
        <h2>Canadian Beaver</h2>
        <p>
          "Canadian beaver". Unique coin with the image of a beaver. Face value
          - 5 cents. Created under Elizabeth II.
        </p>
      </div>
    </div>
  );
}
