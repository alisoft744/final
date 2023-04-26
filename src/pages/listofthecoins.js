import Head from "@/components/Head";
import React from "react";
import style from "../styles/home.module.css";
import Bashliq from "@/components/Bashliq";
import Coins from "@/components/ListOfTheCoins";
import Navbar from "@/components/Navbar";

export default function Listofthecoins() {
  return (
    <div className={style.container}>
      <Head>List of the coins</Head>
      {/* <Navbar></Navbar> */}
      <Bashliq></Bashliq>
      <div className={style.container_coins}>
        <Coins></Coins>
        <Coins></Coins>
        <Coins></Coins>
        <Coins></Coins>
        <Coins></Coins>
        <Coins></Coins>
      </div>
    </div>
  );
}
