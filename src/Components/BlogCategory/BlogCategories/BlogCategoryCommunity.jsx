import React from "react";
import BlogCard from "../BlogCard";
import Title from "../../Typography/Title";
import community from "../../../Assets/Images/remote.jpg";

const BlogCategoryCommunity = () => {
  return (
    <section className="blog-category-container">
      <Title mainTitle="community" subTitle="see all" />
      <div className="blog-cards-holder">
        <BlogCard
          image={community}
          category="community"
          title="this is how people should be spending time together"
          author="zanablog"
        />
        <BlogCard
          image={community}
          category="community and opinion"
          title="social media vs evening gatherings with grandys or friends."
          author="festus andayi"
        />
        <BlogCard
          image={community}
          category="community"
          title="stop denouncing silent antisocial people, do this instead."
          author="zanablog"
        />
        {/* <BlogCard />
        <BlogCard /> */}
      </div>
    </section>
  );
};
export default BlogCategoryCommunity;
