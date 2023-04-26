import React from "react";
import style from './css/style.module.css'

export default function DescriptionText() {
  return (
    <div className={style.container}>
      <h1 className={style.h_1}>Canadian Beaver</h1>
      <p className={style.p_desc}>
        "Canadian beaver". Unique coin with the image of a beaver. Face value -
        5 cents. Created under Elizabeth II.<br></br><br></br> In the center of the obverse is a
        portrait of Queen Elizabeth II, the profile is directed to the right.
        The inscription on the left semicircle (English) ELIZABETH II, on the
        right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD)
        with dots. Below is a mint mark.<br></br><br></br> In the center of the coin reverse is a
        Canadian beaver on a rock sticking out of the water. At the top is a
        semicircle with the inscription "5 cents" between two maple leaves. At
        the bottom in two lines is the inscription CANADA (CANADA) and the year
        of minting.
      </p>
      <table className={style.table}>
        <tbody className={style.tbody}>
            <tr className={style.tr}>
                <td>Issuing Country</td>
                <td>CANADA</td>
            </tr>
            <tr>
                <td>Composition</td>
                <td>Nickel</td>
            </tr>
            <tr className={style.tr}>
                <td>Quality</td>
                <td>BU</td>
            </tr>
            <tr>
                <td>Denomination</td>
                <td>5 cents</td>
            </tr>
            <tr className={style.tr}>
                <td>Year</td>
                <td>1965</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>4.54 g</td>
            </tr>
            <tr className={style.tr}>
                <td>Price</td>
                <td>40$</td>
            </tr>

        </tbody>
      </table>
      <a className={style.back} href=".././listofthecoins">Back to the list</a>
    </div>
  );
}
