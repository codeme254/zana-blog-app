import styled from 'styled-components';

export const StyledBlogCard = styled.a`
 &:link, &visited{
    display: block;
    width: 40rem;
    min-width: 40rem;
    max-width: 40rem;
    margin-bottom: 4rem;
    text-decoration: none;
 }
 & div:first-of-type{
    width: 100%;
    height: 25rem;
    margin-bottom: 2rem;
    border-radius: 6px;
    overflow: hidden;
 }
 & img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
 h6{
     font-size: 1.4rem;
     text-transform: uppercase;
     color: ${({theme}) => theme.colors.subhead};
     font-weight: bold;
     margin-bottom: 2rem;
 }
 h2{
     color:${({theme}) => theme.colors.greyDark};
     text-transform: capitalize;
     font-size: 2.5rem;
     margin-bottom: 2rem;
 }
 p{
     color:${({theme}) => theme.colors.greyDark};
     & span{
         font-size: 1.6rem;
         text-transform: capitalize;
     }
 }
`