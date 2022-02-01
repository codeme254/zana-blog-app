import React from "react";
import { StyledBlogCard } from "../Styled/StyledBlogCard";

const BlogCard = ({ category, title, author, image }) => {
  return (
    <StyledBlogCard href="/">
      <div className="blog-card__image">
        <img
          src={image}
          alt="blog photoImage"
          className="blog-card__image--img"
        />
      </div>
      <div className="blog-card__body">
        <h6 className="blog-card__body--category">{category}</h6>
        <h2 className="blog-card__body--title">{title}</h2>
        <p className="blog-card__body--author">by <span>{author}</span></p>
      </div>
    </StyledBlogCard>
  );
};
export default BlogCard;
