import styled from "styled-components";

export const SearchBarStyled = styled.input`
 border: none;
 outline: none;
 padding: 1rem 1.5rem;
 font-size: 1.5rem;
 background-color: ${({theme}) => theme.colors.whiteLight1};
 border-radius: 100px;
 font-style: oblique;
 font-weight: 800;
`