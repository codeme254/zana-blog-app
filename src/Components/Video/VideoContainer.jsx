import React, { useRef } from "react";
import { StyledVideoContainer } from "../Styled/StyledVideoContainer.styled";
import NextVideo from "./NextVideo";
import Title from "../Typography/Title";
import softwareDeveloper from "../../Assets/Images/developer.jpg";
import funding from "../../Assets/Images/funding.png";
import code from "../../Assets/Images/code.png";
import video from "../../Assets/Videos/vid1.mp4";

const VideoContainer = () => {
  const vidRef = useRef(null);
  const btnRef = useRef(null);
  const handleTogglePlay = () => {
    if (vidRef.current.paused) {
      vidRef.current.play();
      btnRef.current.textContent = "pause video";
    } else {
      vidRef.current.pause();
      btnRef.current.textContent = "play video";
    }
  };
  const handleHover = () => {
    btnRef.current.classList.add("come-to-top");
  };
  const handleHoverOut = () => {
    btnRef.current.classList.remove("come-to-top");
  };
  return (
    <section className="videos">
      <Title mainTitle="video gallery" subTitle="see all" />
      <StyledVideoContainer>
        <div className="video__background" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
          <video
            ref={vidRef}
            src={video}
            autoPlay={false}
            loop={true}
            muted={true}
          ></video>
          <button
            ref={btnRef}
            className="video__play--button"
            onClick={handleTogglePlay}
          >
            Play Video
          </button>
        </div>
        <h1>
          The tech, health, business and education sectors will never die.
        </h1>
        <NextVideo
          image={softwareDeveloper}
          title="software developers salary 2022"
          author="dennis otwoma"
          playtime="22:33:15"
        />
        <NextVideo
          image={funding}
          title="transform your startup into a multibillions company with these tips."
          author="samuel ochiel"
          playtime="01:03:55"
        />
        <NextVideo
          image={code}
          title="JavaScript will not rule the web forever and here is why."
          author="humphrey muriungi"
          playtime="33: 12: 18"
        />
      </StyledVideoContainer>
    </section>
  );
};
export default VideoContainer;
