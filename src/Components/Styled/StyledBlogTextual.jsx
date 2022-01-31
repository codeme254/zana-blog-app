import styled from "styled-components";

export const StyledBlogTextual = styled.div`
  text-align: left;
  height: fit-content;
  min-height: fit-content;
  max-height: fit-content;
  h6 {
    color: ${({ theme }) => theme.colors.subhead};
    margin-bottom: 1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 900;
  }
  h2 {
    // font-size: ${(type) => (type === "big" ? `${3}rem` : `${2}rem`)};
    //font-size: ${(props) => props.size};
    font-family: verdana;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.greyDark};
    text-transform: capitalize;
    margin-bottom: 2rem;
    font-family: serif;
  }
  p {
    font-size: ${(props) => props.fontSize};
    color: ${({ theme }) => theme.colors.greyDark};
    display: inline-block;
    text-transform: capitalize;
    font-weight: 900;
  }
`;
