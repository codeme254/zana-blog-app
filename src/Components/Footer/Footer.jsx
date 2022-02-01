import React from "react";
import { FooterStyled } from "../Styled/FooterStyled.styled";
import { FooterNav } from "../Styled/FooterStyled.styled";
const Footer = () => {
    return(
        <FooterStyled className="footer">
            <div>
            <FooterNav>
                <h3>about</h3>
                <a href="/">our story</a>
                <a href="/">mission</a>
                <a href="/">about us</a>
                <a href="/">news</a>
            </FooterNav>
            <FooterNav>
                <h3>categories</h3>
                <a href="/">technology</a>
                <a href="/">science</a>
                <a href="/">community</a>
                <a href="/">opinion</a>
            </FooterNav>
            <FooterNav>
                <h3>related websites</h3>
                <a href="/">www.primetech.co.ke</a>
                <a href="/">www.forbes.co.ke</a>
                <a href="/">www.usaid.co.ke</a>
                <a href="/">www.dontclickme.co.ke</a>
            </FooterNav>
            <FooterNav>
                <h3>quick links</h3>
                <a href="/">privacy policy</a>
                <a href="/">privacy statements</a>
                <a href="/">cookies</a>
                <a href="/">report rumour blog</a>
            </FooterNav>
            </div>
            <p>&copy; 2022, all rights reserved, this website was created with love by |&mdash;| DENNIS OTWOMA.</p>
        </FooterStyled>
    )
}
export default Footer;