/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import test1 from "../../../images/test-1.jpg";
import test2 from "../../../images/test-2.jpg";
import test3 from "../../../images/test-3.jpg";
import BackCardButton from "./BackCardButton";
import NextCardButton from "./NextCardButton";
import ShowCard from "./ShowCard";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import useWindowSize from "../../../hooks/useWindowResize";
import { TestimonialSection } from "../../../config.data";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Testimonial = () => {
  const ref = useRef();
  const size = useWindowSize();
  const [buttonHeight, setButtonHeight] = useState();
  const [buttonWidth, setButtonWidth] = useState();
  const messages = TestimonialSection.list;
  const [[page, direction], setPage] = useState([0, 0]);
  const msgIndex = wrap(0, messages.length, page);

  const paginate = useCallback(
    (newDirection) => {
      setPage([page + newDirection, newDirection]);
    },
    [page, setPage]
  );

  useEffect(() => {
    setButtonHeight(ref?.current?.offsetHeight);
    setButtonWidth(ref?.current.offsetWidth);
  }, [ref?.current, size.width, size.height]);

  return (
    <Root>
      <Body>
        <Title>
          <h4>{TestimonialSection.title}</h4>
        </Title>
        <Main button_height={buttonHeight} button_width={buttonWidth}>
          <BackCardButton
            item={
              messages[msgIndex - 1 === -1 ? messages.length - 1 : msgIndex - 1]
            }
            ref={ref}
            onClick={() => paginate(-1)}
          />
          <main>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="display"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <ShowCard
                  buttonHeight={buttonHeight}
                  item={messages[msgIndex]}
                />
              </motion.div>
            </AnimatePresence>
          </main>
          <NextCardButton
            onClick={() => paginate(1)}
            item={messages[msgIndex === messages.length - 1 ? 0 : msgIndex + 1]}
          />
        </Main>
        <ShowBarContainer>
          {messages.map((item, index) => (
            <ShowBar
              key={index}
              animate={{
                width: msgIndex === index ? 90 : 10,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(e) => {
                if (index < msgIndex) {
                  setPage([index, -1]);
                } else if (index > msgIndex) {
                  setPage([index, 1]);
                }
              }}
            >
              <strong
                style={{
                  color: msgIndex === index ? "#56402a" : "#F1BAA2",
                  transition: "color .3s ease-in",
                }}
              >
                0{index + 1}
              </strong>
              <span />
            </ShowBar>
          ))}
        </ShowBarContainer>
      </Body>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  gap: 20px;
  width: 100%;
  padding-block: 80px;
  @media (max-width: 477px) {
    padding-block: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: var(--max-box-width);
  gap: 40px;
  @media (max-width: 477px) {
    gap: 10px;
  }
`;

const Main = styled.div`
  display: flex;
  height: 320px;

  main {
    width: calc(100% - ${({ button_width }) => button_width}px);
    height: ${({ button_height }) => button_height}px;
    @media (max-width: 835px) {
      width: 100%;
      height: 100%;
      max-width: 95vw;
    }
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-inline: 14px;
  }
  .display {
    position: absolute;
    width: 100%;
    height: 100%;
    @media (max-width: 835px) {
      max-width: 95vw;
    }
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  h4 {
    font-weight: 800;
    font-size: 3.125em;
    color: #56402a;
    white-space: nowrap;
    line-height: 1.6;
    margin: 0;
  }
  align-items: center;

  @media (max-width: 1490px) {
    font-size: 14px;
  }
  @media (max-width: 619px) {
    font-size: 12px;
  }

  @media (max-width: 536px) {
    font-size: 11px;
  }

  @media (max-width: 469px) {
    h4 {
      font-size: 2.95em;
    }
  }
  @media (max-width: 426px) {
    font-size: 10.8px;
  }
  @media (max-width: 400px) {
    font-size: 10.2px;
  }
`;

export const ShowBarContainer = styled.div`
  display: flex;
  gap: 20px;
  align-self: center;
  cursor: pointer;
  user-select: none;
`;
export const ShowBar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 10;
  border-radius: 5px;
  strong {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #56402a;
  }
  span {
    background: #56402a;
    height: 2px;
    flex: 1;
    margin-left: 5px;
    margin-right: -7px;
  }
`;

export default Testimonial;

const list = [
  {
    image: test1,
    name: "Harriet Mitchell",
    position: "Marketing Director",
    title: "Make effective leadership",
    description:
      "Lorem ipsum dolor sit amet, consctetur adipiscing elit. Lorem ipsum dolor sit. Lorem ipsum dolLorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consctetur adipiscing elit. Lorem",
  },
  {
    image: test2,
    name: "Jhon Fleo",
    position: "Managing Director",
    title: "Make effective leadership",
    description:
      "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews. it will be your go- to tool for internal business reviews",
  },
  {
    image: test3,
    name: "Fleo Harriet",
    position: "Product Analyst",
    title: "Take faster and impactful decision using Fleo",
    description:
      "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
  },
];
