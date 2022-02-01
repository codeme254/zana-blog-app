import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #111;
  padding: 2rem 1rem;
  & div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-template-rows: repeat(2, min-content);
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }
  p {
    text-align: center;
    color: #fff;
    padding-top: 3rem;
    border-top: .1px solid #ccc;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
  h3{
      color: ${({theme}) => theme.colors.white};
      text-transform: capitalize;
      margin-bottom: 3rem;
  }
  a{
      &:visited, &:link{
          text-decoration: none;
          color: ${({theme}) => theme.colors.white};
        //   text-transform: capitalize;
        font-size: 1.2rem;
      }
  }
`;
