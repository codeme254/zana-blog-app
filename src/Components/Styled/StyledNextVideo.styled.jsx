import styled from "styled-components";

export const StyledNextVideo = styled.a`
  &:link,
  &:visited {
      width: 100%;
    display: flex;
    align-items: flex-start;
    text-decoration: none;
  }
  & div:first-of-type {
    width: 40%;
    min-width: 40%;
    max-width: 40%;
    height: 20rem;
    min-height: 20rem;
    max-height: 20rem;
    margin-right: 2rem;
  }
  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  h6 {
    // color: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 2rem;
    span {
      color: ${({ theme }) => theme.colors.subhead};
    //   color: ${({ theme }) => theme.colors.white};
    }
  }
  h2 {
    font-size: 2rem;
    // color: ${({ theme }) => theme.colors.greyDark};
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.6rem;
    // color: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.white};
    span {
      font-size: 1.8rem;
      text-transform: capitalize;
    //   color: ${({ theme }) => theme.colors.greyDark};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bolder;
    }
  }
  @media screen and (max-width: 25em) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    &>*:not(:last-child){
      margin-bottom: 1.5rem;
    }
    & div:first-of-type {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: 20rem;
      min-height: 20rem;
      max-height: 20rem;
    }
  }
`;
