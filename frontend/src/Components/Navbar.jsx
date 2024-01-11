import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Cart, Profile } from "../assets/Image_impoter";
import styled from "styled-components";

function Navbar() {
  const [menu, setmenu] = useState(false);

  const handelMenu = () => {
    setmenu((prev) => !prev);
  };

  return (
    <DIV>
      <div className="ham">
        <div className={`menu ${menu ? "active" : ""}`} onClick={handelMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/discovery">Discovery</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/about">About</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-right">
          <Link to={"/profile"}>
            <img src={Profile} alt="profile" />
          </Link>
          <div className="cart">
            <Link to={"/cart"}>
              <img src={Cart} alt="cart" />
            </Link>
          </div>
        </div>
      </div>
    </DIV>
  );
}

export default Navbar;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Poppins:wght@400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap");

  .ham {
    width: 100%;
    height: 75px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #272727;
    font-family: "Roboto", sans-serif;
    padding: 0 5%;
  }
  /* .logo {
    margin: 0 20px;
  } */
  /* nav {
    margin: 0 20px;
  } */
  .nav-menu {
    display: flex;
    gap: 60px;
  }
  .nav-links {
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    color: #272727;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  a {
    text-decoration: none;
    color: #272727;
  }
  .menu {
    display: none;
    margin: 0 20px;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #272727;
    margin: 5px 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .nav-right {
    display: flex;
    gap: 40px;
  }
  .cart {
    width: 32px;
  }
  .cart img {
    width: 100%;
  }
  @media (max-width: 780px) {
    .menu {
      display: block;
    }
    .menu.active .bar:nth-child(2) {
      opacity: 0;
    }
    .menu.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .menu.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    .nav-menu {
      position: fixed;
      left: -120%;
      top: 75px;
      gap: 40px;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      text-align: center;
      transition: 0.3s;
      z-index: 99;
    }
    .nav-links a {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .nav-links:last-child {
      padding-bottom: 40px;
    }
    .nav-menu.active {
      left: 0;
    }
    .bag {
      display: block;
    }
    .nav-right {
      gap: 15px;
    }
  }

  @media (max-width: 580px) {
  }
`;
