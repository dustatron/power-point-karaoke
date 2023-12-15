import React from "react";
import { FlexBox, Heading, Slide, Text, Box } from "spectacle";

import Image from "next/image";

type SlideProps = {
  slideNumber?: number | string;
  title: string;
  subTitle: string;
  copy?: string;
  img?: string;
  imgPrompt?: string;
};

const SlideTemplate = ({ title, subTitle, copy, img }: SlideProps) => {
  return (
    <Slide>
      <FlexBox alignItems="left" flexDirection="row" height="90%">
        <FlexBox
          height="100%"
          width="50%"
          flexDirection="column"
          alignItems="left"
          padding="1rem"
        >
          <Heading
            textAlign="left"
            fontSize="3.5rem"
            fontWeight="400"
            margin="0px"
            padding="0px"
          >
            {title}
          </Heading>
          <Text
            fontWeight="200"
            color="secondary"
            fontSize="2rem"
            margin="0px"
            padding="1rem"
          >
            {subTitle}
          </Text>
          <Box
            borderRadius="15px"
            padding="0px"
            border="2px solid #4c6781"
            marginTop="15px"
            minHeight="20rem"
          >
            <Text
              fontWeight="200"
              textWrap="balance"
              hyphens="none"
              fontSize="1.5rem"
            >
              {copy}
            </Text>
          </Box>
        </FlexBox>
        {/* // Image Box */}
        <FlexBox
          width="50%"
          height="100%"
          padding="1rem"
          alignItems="center"
          justifyContent="center"
          overFlow="none"
        >
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              layout="fill"
              src={img || "https://source.unsplash.com/random/500×600"}
              alt="random image"
            />
          </div>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default SlideTemplate;
