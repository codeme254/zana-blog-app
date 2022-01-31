import React from "react";
import BlogTextual from "../BlogTextual/BlogTextual";
import { StyledBlogLink } from "../Styled/StyledBlogLink.styled";

const BlogLink = ({ image, blogAuthor, blogCategory, blogTitle }) => {
    return(
        <StyledBlogLink href="/" className="blog__link">
            <div className="blog__link--img">
                <img src={image} alt="blog representation imaage" className="blog__link--image" />
            </div>
            <BlogTextual category={blogCategory} title={blogTitle} author={blogAuthor} />
        </StyledBlogLink>
    )
}
export default BlogLink;