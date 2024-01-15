import React from "react";
import style from "../Styles/heroSection.module.css";

function HeroSection() {
  return (
    <div className={style.background}>
      <div className={style.background_overlay}>
        <div className={style.hero_container}>
          <h1>The nature candle</h1>
        </div>
        <p className={style.hero_description}>All handmade with natural soy wax, Candleaf is a companion for all <br/>your pleasure moments </p>
        <div className={style.hero_button_parent}>
        <button className={style.hero_button}>Discovery our collection</button> 
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
