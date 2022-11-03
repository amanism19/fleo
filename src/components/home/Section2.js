import React from "react";
import styled from "@emotion/styled";
// import image from "../../images/section_2_ilstr.png";
import image from "../../images/Animation-5 (1500 × 1500px).gif";
// import video from "../../videos/Animation-s2-2.mp4";
import { PlanningSection } from "../../config.data";
// import useVideoPlayer from "../../hooks/useVideoPlayer";
// import useIntersectionObserver from "../../hooks/useIntersectionObserver";
// import {
//   useIntersectionObserver,
//   useTrackVisibility,
// } from "react-intersection-observer-hook";

function Section2() {
  // const videoElement = useRef(null);
  // const { playerState, handleOnTimeUpdate } = useVideoPlayer(videoElement);
  // const [ref, { entry }] = useIntersectionObserver();
  // const isVisible = entry && entry.isIntersecting;
  // const [isPlayed, setIsPlayed] = useState(false);

  // const [ref, isVisible] = useIntersectionObserver();

  // useEffect(() => {
  //   if (isVisible && !isPlayed) {
  //     videoElement.current.play();
  //     console.log("play");
  //   }
  // }, [isVisible, isPlayed]);

  // useEffect(() => {
  //   if (Math.round(playerState.progress) === 100) {
  //     videoElement.current.pause();
  //     setIsPlayed(true);
  //   }
  // }, [playerState.progress]);

  return (
    <Root>
      <Main>
        <Image src={image} />
        {/* <VideoContainer>
          <Video
            src={video}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
            preload
          />
        </VideoContainer> */}
        {/* <video src="" ></video> */}
        <TextSection>
          <h2 className="hidable-h3-">{PlanningSection.title1}</h2>
          {/* <h2>{PlanningSection.title2}</h2> */}

          {PlanningSection.mobileTextList.map(({ title }, index) => (
            <div className="para hidable-forPC" key={index}>
              <h3>{title} </h3>
            </div>
          ))}
          {PlanningSection.pcTextList.map(({ title, description }, index) => (
            <div className="para hidable" key={index}>
              <h3>{title} </h3>
              <span>{description}</span>
            </div>
          ))}
        </TextSection>
      </Main>
    </Root>
  );
}

export default Section2;

const Root = styled.div`
  @media (max-width: 1116px) {
    margin-top: 22px;
  }
  display: flex;
  background: #4e371f;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1116px) {
    box-shadow: inset 0px 5px 12px rgb(255 255 255 / 50%);
  }
`;

const Main = styled.div`
  align-self: center;
  display: flex;
  /* background: #523a23; */
  align-items: center;
  max-width: var(--max-box-width);
  padding-block: 100px;
  gap: 60px;
  @media (max-width: 1325px) {
    padding-inline: 40px;
  }
  @media (max-width: 887px) {
    flex-direction: column-reverse;
    padding-block: 50px;
  }
`;

// const Video = styled.video`
//   width: 103%;
//   height: auto;
//   flex: 1;
//   background: #523a23;
//   background-color: transparent !important;
//   clip-path: inset(1px 1px);
// `;

// const VideoContainer = styled.div`
//   display: flex;
//   /* flex: 0.5; */
//   height: auto;
//   /* overflow: hidden; */
//   width: 50%;
//   @media (max-width: 887px) {
//     flex-direction: column-reverse;
//     padding-block: 50px;
//     width: 80%;
//   }
//   && {
//     border: 0px;
//     outline: none;
//     background: transparent;
//   }
// `;

const Image = styled.img`
  flex: 0.5;
  height: auto;
  width: 50%;
  object-fit: contain;
  @media (max-width: 887px) {
    flex-direction: column-reverse;
    padding-block: 50px;
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  width: 90%;

  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 3.125em;
    line-height: 1.3;
    margin: 0;

    color: #f5f5f5;
  }
  h3 {
    color: #ffc055;
  }

  .para {
    margin: 0;
    margin-top: 10px;

    font-weight: 400;
    font-size: 1.45em;
    /* letter-spacing: 0.1px; */
    line-height: 1.6;
    /* letter-spacing: 0.8px; */
    color: #ffffff;
  }

  @media (max-width: 1490px) {
    font-size: 14px;
  }

  @media (max-width: 1141px) {
    font-size: 12.5px;
  }

  @media (max-width: 1000px) {
    .para {
      font-size: 1.7em;
    }
  }
  .hidable-forPC {
    display: none;
  }
  @media (max-width: 887px) {
    font-size: 12px;
    text-align: center;
    align-items: center;
    .para {
      font-size: 1.7em;
      line-height: 1.4;
    }
    .hidable {
      display: none;
    }
    .hidable-h3 {
      display: none;
    }
    .hidable-forPC {
      display: block;
    }
  }

  @media (max-width: 532px) {
    font-size: 11px;
  }

  @media (max-width: 469px) {
    h2 {
      font-size: 2.95em;
    }
  }

  @media (max-width: 400px) {
    .para {
      width: 88%;
    }
  }
  @media (max-width: 400px) {
    .para {
      width: 100%;
    }
  }
`;
