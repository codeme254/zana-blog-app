import styled from "styled-components";

export const StyledVideoContainer = styled.section`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 55% 40%;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  justify-items: stretch;
  align-items: stretch;
  margin: 5rem auto;
  background-color: #111;
  padding: 2rem;
  & div:first-child {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  h1 {
    grid-column: 1/2;
    grid-row: 3/-1;

    margin-top: 2rem;
    font-size: 4rem;
    font-weight: 200;
    text-transform: capitalize;
    font-family: serif;
    color: white;
  }

  @media screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
     &>*:not(:last-child){
       margin-bottom: 2rem;
     }
  }
`;
