import React from "react";
import BlogCard from "../BlogCard";
import Title from "../../Typography/Title";
import apple from "../../../Assets/Images/apple.jpg";
import covid from "../../../Assets/Images/corona.jpg";
import diet from "../../../Assets/Images/diet.jpg";

const BlogCategoryScience = () => {
  return (
    <section className="blog-category-container">
      <Title mainTitle="science" subTitle="see all" />
      <div className="blog-cards-holder">
        <BlogCard
          image={apple}
          category="science and health"
          title="should kids really eat the following food..."
          author="luke ger"
        />
        <BlogCard
          image={diet}
          category="science and health"
          title="eat the following each time you come from a morning exercise."
          author="maasai doctor"
        />
        <BlogCard
          image={covid}
          category="science and health"
          title="deal with covid like a pro."
          author="luke ger"
        />
        {/* <BlogCard />
        <BlogCard /> */}
      </div>
    </section>
  );
};
export default BlogCategoryScience;
