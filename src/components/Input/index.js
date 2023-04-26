import React from "react";
import style from "./css/style.module.css";

export default function Login() {
  return (
    <>
      <div className={style.input_container}>
        <label className={style.label}>Login</label>

        <input className={style.input}></input>
      </div>
      <div className={style.input_container}>
        <label className={style.label}>Password</label>

        <input className={style.input}></input>
      </div>
      <button className={style.btn}>Sign in</button>
    </>
  );
}
