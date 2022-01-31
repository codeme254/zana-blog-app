import React from "react";
import { LinkStyled } from "../Styled/LinkStyled.styled";

const Link = ({ linkName, to }) => {
  return <LinkStyled href={to}>{linkName}</LinkStyled>;
};
export default Link;
