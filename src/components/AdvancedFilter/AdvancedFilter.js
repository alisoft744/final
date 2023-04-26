import React from "react";
import style from "./css/style.module.css";

export default function AdvancedFilter() {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <label className={style.label_bold}>Issuing country</label>

        <input className={style.input_left}></input>
        <label className={style.label_bold}>Metal</label>

        <input className={style.input_left}></input>
        <label className={style.label_bold}>Quality of the coin</label>

        <input className={style.input_left}></input>
      </div>
      <div className={style.container_right}>
        <div>
          <label className={style.label_bold}>Price</label>
          <div>
            <label className={style.label_from}>from</label>

            <input className={style.input_right}></input>

            <label className={style.label_to}>to</label>

            <input className={style.input_right}></input>
          </div>
        </div>
        <div>
          <label className={style.label_bold}>Year of issue</label>
          <div>
            <label className={style.label_from}>from</label>

            <input className={style.input_right}></input>
            <label className={style.label_to}>to</label>

            <input className={style.input_right}></input>
          </div>
        </div>
      </div>
    </div>
  );
}
