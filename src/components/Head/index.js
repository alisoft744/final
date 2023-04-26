import style from "./css/style.module.css";

import React from "react";

export default function Head({children}) {
  return (
    <div>
      <h1 className={style.heading}>{children}</h1>
    </div>
  );
}
