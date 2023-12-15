"use client";

import React from "react";
import presentations from "../../../presentations";
import {
  FlexBox,
  Heading,
  Slide,
  Deck,
  Text,
  Box,
  DefaultTemplate,
} from "spectacle";
import SlideTemplate from "../SlideTemplate";
import EndSlide from "../EndSlide";

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: "white",
    secondary: "#F0FFFF",
    // tertiary: "white",
    // quaternary: "red",
    // quinary: "yellow",
  },
  fonts: {
    header: "Helvetica, Arial, sans-serif",
    text: "Helvetica, Arial, sans-serif",
  },
};

const template = <DefaultTemplate />;

function Page({ params }: { params: { id: string } }) {
  const presentationId = params.id || 0;
  const currentDeck = presentations[Number(presentationId)];
  if (currentDeck?.length > 0) {
    const slideDeck = currentDeck.slice(1);
    const firstSlide = currentDeck[0];
    return (
      <Deck theme={theme} template={template}>
        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Heading fontSize="100px">
              ✨<i>{firstSlide.title}</i> ✨
            </Heading>
            <Heading margin="0px" fontSize="h3">
              {firstSlide.subTitle}
            </Heading>
          </FlexBox>
        </Slide>
        {slideDeck.map((slide) => (
          <SlideTemplate
            key={slide.slideNumber}
            slideNumber={slide.slideNumber}
            copy={slide.copy}
            subTitle={slide.subTitle}
            title={slide.title}
            img={slide?.img}
          />
        ))}
        <EndSlide />
      </Deck>
    );
  }
  return <div>Deck not found</div>;
}

export default Page;
