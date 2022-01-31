import styled from "styled-components";

export const ButtonTransparent = styled.button`
 border:none;
 outline: none;
 background-color: transparent;
 font-size: 1.5rem;
 font-weight: bold;
 text-transform: capitalize;
 cursor: pointer;
 padding: 1rem 1.5rem;
 border-radius: 5px;
 transition: all .2s ease;

 &:hover{
     background-color: ${({ theme }) => theme.colors.whiteLight2};
 }
`;

export const ButtonPrimary = styled.button`
 border: none;
 outline: none;
 background-color: ${({ theme }) => theme.colors.subhead};
 font-size: 1.5rem;
 font-weight: bold;
 text-transform: capitalize;
 cursor: pointer;
 padding: 1rem 1.5rem;
 border-radius: 5px;
 color: ${({ theme }) => theme.colors.white};
`
