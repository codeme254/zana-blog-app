import React from "react";
import { StyledBlogTextual } from "../Styled/StyledBlogTextual";

const BlogTextual = ({ category, title, author, size }) => {
  return (
    <StyledBlogTextual>
      <h6>{category}</h6>
      <h2 style={{fontSize: `${size}`}}>{title}</h2>
      <span> <span style={{color: '#333'}}>by</span> <p>{author}</p></span>
    </StyledBlogTextual>
  );
};
export default BlogTextual;
