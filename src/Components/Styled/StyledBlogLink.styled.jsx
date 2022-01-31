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
`