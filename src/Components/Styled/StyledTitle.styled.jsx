import styled from "styled-components";

export const StyledTitle = styled.h2`
  display: flex;
  align-items: baseline;
  padding: 1rem 2rem;
  text-transform: capitalize;

  h3{
      font-size: 3rem;
      margin-right: auto;
  }
  a{
      &:link, &:visited{
        font-size: 2rem;
        color: ${({theme}) => theme.colors.greyDark}
      }
  }
`;
