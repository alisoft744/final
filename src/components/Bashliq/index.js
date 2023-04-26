import React from "react";
import style from "./css/style.module.css";

export default function Bashliq() {
  return (
    <>
      <div className={style.big_container}>
        <label className={style.label_field}>Input field</label>
        <div className={style.inp_btn}>
          <input className={style.input_box}></input>
          <button className={style.btn}>Search</button>
        </div>
        <label className={style.label}><a href=".././filter">Advanced filter &#10095;</a></label>
      </div>
    </>
  );
}