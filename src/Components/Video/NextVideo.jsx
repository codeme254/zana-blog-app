import React from "react";
import { StyledNextVideo } from "../Styled/StyledNextVideo.styled";

const NextVideo = ({ playtime, title, author, image }) => {
  return (
    <StyledNextVideo href="/">
      <div>
        <img src={image} alt="video thumbnail" />
      </div>
      <div>
        <h6><span>playtime:</span> {playtime}</h6>
        <h2>{title}</h2>
        <p>
          by <span>{author}</span>
        </p>
      </div>
    </StyledNextVideo>
  );
};
export default NextVideo;
