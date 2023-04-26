import Bashliq from "@/components/Bashliq";
import Head from "@/components/Head";
import React from "react";
import style from '../styles/home.module.css'
import Navbar from "@/components/Navbar";
import Login from "@/components/Input";
import Input2 from "@/components/Input2";
import Button from "@/components/Button";

export default function Panel1() {
  return (
    <div className={style.container}>
      <Head>Admin panel</Head>
      {/* <Navbar></Navbar> */}
      {/* <Bashliq></Bashliq> */}
<div className={style.container_input2}>
  <div className={style.container_cn2}>
    <label>Coin name</label>
    <input></input>
    <label>Face Value</label>
    <input></input>
    <label>Year of issue</label>
    <input></input>
    <label>Price</label>
    <input></input>
    <label>County</label>
    <input></input>
    <label>Metal</label>
    <input></input>
  </div>
  <div className={style.container_cn2}>
  <label>Coin name</label>
    <input></input>
    <label>Coin name</label>
    <input></input>
    <label>Coin name</label>
    <input></input>
    <label>Coin name</label>
    <input></input>
  </div>
  <div className={style.container_cn2}>
  <label>Coin name</label>
    <input></input>
    <label>Coin name</label>
    <input></input>
    <div>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </div>
  </div>
</div>
    </div>
  );
}
