import styled from "styled-components";

export const LinkStyled = styled.a`
  &:link,
  &:visited {
    padding: 1rem 1.5rem;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.greyDark};
    font-size: 1.4rem;
    letter-spacing: 1.1px;
  }
  &:first-of-type{
    padding-left: 0;
  }
`;
