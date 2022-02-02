import styled from 'styled-components';

export const StyledBlogLink = styled.a`
 &:link, &:visited{
    text-decoration: none;
    display: flex;
    align-items: flex-start;
   height: 100%;
   &>*{
      height: 100%;
   }
 }
 @media screen and (max-width: 17.5em) {
   display: flex;
   flex-direction: column;
    &>*:not(:last-child){
      margin-bottom: 1rem;
    }
 }
`