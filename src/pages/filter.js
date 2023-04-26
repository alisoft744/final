import React from "react";
import Bashliq from "@/components/Bashliq";
import style from "../styles/home.module.css";
import AdvancedFilter from "@/components/AdvancedFilter/AdvancedFilter";
import Head from "../components/Head";
import Navbar from '../components/Navbar'

export default function Filter() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Head>Homepage</Head>
        {/* <Navbar></Navbar> */}
      </div>
      <Bashliq></Bashliq>
      <AdvancedFilter></AdvancedFilter>
    </div>
  );
}
