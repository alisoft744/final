import DescriptionImage from "@/components/Description/DescriptionImage";
import DescriptionText from "@/components/Description/Descriptiontext";
import React from "react";
import style from '../styles/home.module.css'

export default function Description() {
  return (
    <div className={style.container_description}>
<DescriptionImage></DescriptionImage>
<DescriptionText></DescriptionText>
    </div>
  );
}
