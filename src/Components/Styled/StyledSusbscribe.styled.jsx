import styled from "styled-components";

export const StyledSubscribe = styled.form`
  width: 60vw;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 4rem;
    text-transform: capitalize;
  }
  h6 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.greyLight};
    font-weight: normal;
    text-transform: uppercase;
  }
  p {
    font-size: 1.3rem;
    justify-self: stretch;
    align-self: stretch;
    color: ${({ theme }) => theme.colors.greyLight};
  }
  div {
    //   border: 2px solid red;
    justify-self: stretch;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    padding: 1rem;
    padding-left: .2rem;
    width: 85%;
    font-size: 2rem;
    border: none;
    outline: none;
    margin-right: -15rem;
    border-bottom: 2px solid #111;
    &::-webkit-input-placeholder {
      text-transform: capitalize;
    }
  }
  button {
    font-size: 2.3rem;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.subhead};
    color: #fff;
    text-transform: capitalize;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
