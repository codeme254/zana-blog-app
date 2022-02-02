import styled from "styled-components";

export const HeaderNavStyled = styled.nav`
  display: flex;
  margin-right: auto;
  @media screen  and (max-width: 50em){
    display: flex;
    flex-direction: column;
    background-color: #111;
    width: 20rem;
    height: max-content;
    align-items: flex-start;
    position: absolute;
    top: 5rem;
    transition: all 1s ease;
    a{
      color:#fff;
    }
  }
`;
