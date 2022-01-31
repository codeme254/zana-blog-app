import React from "react";
import LogoText from "./LogoText";
import BtnTransparent from "../Buttons.jsx/ButtonTransparent";
import BtnPrimary from "../Buttons.jsx/ButtonPrimary";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <LogoText />
      <div className="header__top--buttons">
        <div className="header__top--seperator">
          <BtnTransparent text="sign up" />
        </div>
        <BtnPrimary text="sign in" />
        <BtnPrimary text="community" />
        <BtnPrimary text="subscribe" />
      </div>
    </div>
  );
};
export default HeaderTop;
