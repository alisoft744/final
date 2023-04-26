import AddCoin from "@/components/AddNewCoin";
import Bashliq from "@/components/Bashliq";
import Button from "@/components/Button";
import Head from "@/components/Head";
import Coins from "@/components/ListOfTheCoins";
import React from "react";
import style from '../styles/home.module.css'
import Navbar from "@/components/Navbar";

export default function Panel1() {
  return (
    <div className={style.container}>
      <Head>Admin panel</Head>
      {/* <Navbar></Navbar> */}
      <Bashliq></Bashliq>
      <div className={style.container_ccc}>
      <div className={style.container_btn}>
        <Coins></Coins>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
      <div className={style.container_btn}>
        <Coins></Coins>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>

      <AddCoin></AddCoin>
      </div>
    </div>
  );
}
