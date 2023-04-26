import Bashliq from "@/components/Bashliq";
import style from "../styles/home.module.css";
import Head from "@/components/Head";
import Coin from "@/components/Coin";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch('/coin')
      .then((res) => res.json())
      .then((data) => setText(data.message));
      
  },[]);

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Head>Homepage</Head>
        {/* <Navbar></Navbar> */}
      </div>
      <Bashliq></Bashliq>
      <Coin></Coin>
    </div>
  );
}
