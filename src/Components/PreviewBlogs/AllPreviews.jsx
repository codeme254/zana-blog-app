import React from "react";
import Title from "../Typography/Title";
import PreviewBlog from "./PreviewBlog";
import dennis from "../../Assets/Images/dennis1.png";
import sam from "../../Assets/Images/sam1.png";
import humphrey from "../../Assets/Images/hum1.png";
import nathan from "../../Assets/Images/nathan.jpg";
import freshia from '../../Assets/Images/freshia.jpg';
import ivy from '../../Assets/Images/ivy.jpg';
import iphone from "../../Assets/Images/iphone.jpg";
import techHealth from "../../Assets/Images/tech-health.jpg";
import codeCup from "../../Assets/Images/code.png";
import remote from "../../Assets/Images/remote.jpg";
import funding from "../../Assets/Images/funding.png";
import math from "../../Assets/Images/math.jpg";

const AllPreviews = () => {
  return (
    <section className="previews">
      <Title mainTitle="all updates" subTitle="see all" />
      <div className="previews__container">
        <PreviewBlog
          image={iphone}
          categories="business, technology"
          date="Jan 22, 2022"
          title="why you should be a mobile apps developer in 2022."
          authorName="dennis otwoma"
          authorImage={dennis}
          blogsPublished="35"
        />
        <PreviewBlog
          image={funding}
          categories="business, technology, opinion"
          date="Jan 12, 2022"
          title="all you need to secure fundings for your business or startup."
          authorName="samuel ochiel"
          authorImage={sam}
          blogsPublished="22+"
        />
        <PreviewBlog
          image={techHealth}
          categories="health, technology"
          date="dec 23, 2021"
          title="technology in the health sector, the real game changer"
          authorName="humphrey muriungi kariuki"
          authorImage={humphrey}
          blogsPublished="83"
        />
        <PreviewBlog
          image={codeCup}
          categories="business, technology"
          date="dec 12, 2021"
          title="stop wasting your time on these programming languages."
          authorName="nathan warimwe"
          authorImage={nathan}
          blogsPublished="44"
        />
        <PreviewBlog
          image={math}
          categories="technology, education"
          date="nov 18, 2021"
          title="mathematics in tech is the next thing to a horror movie."
          authorName="Freshia Njoki"
          authorImage={freshia}
          blogsPublished="110"
        />
        <PreviewBlog
          image={remote}
          categories="community, technology"
          date="nov 12, 2021"
          title="taking technology to remote areas, #time for change"
          authorName="ivy mbogo"
          authorImage={ivy}
          blogsPublished="78"
        />
      </div>
    </section>
  );
};
export default AllPreviews;
