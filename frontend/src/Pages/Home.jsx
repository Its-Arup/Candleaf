import React from "react";
import HeroSection from "../Components/HeroSection";
import style from "../Styles/home.module.css";

function Home() {
  return (
    <>
      <HeroSection />

      {/* --------- product section ------------- */}

      <div className={style.product_section}>
        <h1 className={style.product_heading}>Products</h1>
        <p className={style.product_description}>
          Order it for you or for your beloved ones
        </p>
      </div>
    </>
  );
}

export default Home;
