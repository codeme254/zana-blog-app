import React from "react";
import BlogLink from "../BlogLink/BlogLink";
import BlogTextual from "../BlogTextual/BlogTextual";
import coding from "../../Assets/Images/coding.jpg";
import computer from "../../Assets/Images/computer.jpg";
import developer from "../../Assets/Images/developer.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="home__background">
        <img
          src={coding}
          alt=""
          width="40rem"
          height="40rem"
          className="home__background--image"
        />
      </div>
      <div className="home__title--placer">
        <BlogTextual
          category="technology"
          author="dennis otwoma"
          title="will artificial intelligence replace developers and programmers"
          size="3.5rem"
        />
      </div>
      {/* <div className="home__links"> */}
      <BlogLink
        image={developer}
        blogAuthor="dennis otwoma"
        blogTitle="will artificial intelligence replace developers and programmers"
        blogCategory="technology"
      />
      <BlogLink
        image={coding}
        blogAuthor="samuel ochiel"
        blogTitle="web3 is here, this is how you can get started as a web3.0 developer"
        blogCategory="technology"
      />
      <BlogLink
        image={computer}
        blogAuthor="humphrey muriungi"
        blogTitle="how to set up your workspace for a professional coding environment."
        blogCategory="technology"
      />
      {/* </div> */}
    </section>
  );
};
export default Home;
