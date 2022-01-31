import React from "react";
import { HeaderStyled } from "../Styled/Header.styled";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return(
        <HeaderStyled>
            <HeaderTop />
            <HeaderBottom />
        </HeaderStyled>
    )
}
export default Header;