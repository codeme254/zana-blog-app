import React from "react";

const PreviewBlog = ({
  image,
  categories,
  date,
  title,
  authorName,
  authorImage,
  blogsPublished,
}) => {
  return (
    <a href="/" className="preview">
      <div className="preview__image">
        <img src={image} alt="blog img" className="preview__image--img" />
      </div>
      <div className="preview__side">
        <header className="preview__header">
          <p className="preview__header--categories">{categories}</p>
          <span>&mdash;</span>
          <p className="preview__header--date">{date}</p>
        </header>
        <h5 className="preview__side--title">{title}</h5>
        <div className="preview__author">
          <div className="preview__author__image">
            <img
              src={authorImage}
              alt="author img"
              className="preview__author__image--img"
            />
          </div>
          <div className="preview__author__side">
            <p className="preview__author__side--name">{authorName}</p>
            <p className="preview__author__side--details">
              Author, {blogsPublished} published posts
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
export default PreviewBlog;
