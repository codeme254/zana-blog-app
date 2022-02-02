import styled from "styled-components";

export const StyledTitle = styled.h2`
  display: flex;
  align-items: baseline;
  padding: 1rem 2rem;
  text-transform: capitalize;
  @media screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 1rem auto;
  }

  h3{
      font-size: 3rem;
      margin-right: auto;
  }
  a{
      &:link, &:visited{
        font-size: 2rem;
        color: ${({theme}) => theme.colors.greyDark};
      }
  }
`;
