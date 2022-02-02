import React, { useRef } from "react";
import Link from "./Link";
import SeachBar from "./SeachBar";
import { HeaderNavStyled } from "../Styled/HeaderNavStyled.styled";

const HeaderBottom = () => {
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const handleToggleNav = () => {
    navRef.current.classList.toggle("my-nav-back");
  };
  return (
    <div className="header__bottom">
        <div className="hambuger" onClick={handleToggleNav} ref={btnRef}></div>
      <HeaderNavStyled ref={navRef}> {/* className="my-nav-back" */}
        <Link to="home" linkName="home" />
        <Link to="page" linkName="page" />
        <Link to="science" linkName="science" />
        <Link to="technology" linkName="technology" />
        <Link to="beauty" linkName="beauty" />
        <Link to="health" linkName="health" />
        <Link to="opinion" linkName="opinion" />
        <Link to="videos" linkName="videos" />
        <Link to="gallery" linkName="gallery" />
      </HeaderNavStyled>
      <SeachBar />
    </div>
  );
};
export default HeaderBottom;
