import React from "react";
import { StyledTitle } from "../Styled/StyledTitle.styled";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <StyledTitle>
      <h3>{mainTitle}</h3>
      <a href="/">{subTitle}</a>
    </StyledTitle>
  );
};
export default Title;