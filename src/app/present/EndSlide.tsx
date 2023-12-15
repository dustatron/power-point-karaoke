"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FlexBox,
  Heading,
  Slide,
  Deck,
  Text,
  Box,
  DefaultTemplate,
} from "spectacle";

type Props = {};

const EndSlide = (props: Props) => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="100px">
          ✨<i>The End</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h3">
          You did it!
        </Heading>
        <Link href="/">
          <Button colorScheme="blue">👈 Back</Button>
        </Link>
      </FlexBox>
    </Slide>
  );
};

export default EndSlide;
