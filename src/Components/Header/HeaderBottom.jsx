import React from "react";
import Link from "./Link";
import SeachBar from "./SeachBar";
import { HeaderNavStyled } from "../Styled/HeaderNavStyled.styled";

const HeaderBottom = () => {
    return(
        <div className="header__bottom">
            <HeaderNavStyled>
                <Link to="home" linkName="home"/>
                <Link to="page" linkName="page"/>
                <Link to="science" linkName="science"/>
                <Link to="technology" linkName="technology"/>
                <Link to="beauty" linkName="beauty"/>
                <Link to="health" linkName="health"/>
                <Link to="opinion" linkName="opinion"/>
                <Link to="videos" linkName="videos"/>
                <Link to="gallery" linkName="gallery"/>
            </HeaderNavStyled>
            <SeachBar />
        </div>
    )
}
export default HeaderBottom;