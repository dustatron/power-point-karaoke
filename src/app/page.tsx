"use client";
import { Button, Heading, Box, Stack, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import presentations from "../presentations";
import ListDecks from "./ListDecks";

export default function Home() {
  const route = useRouter();
  const getRandom = (max: number) => Math.floor(Math.random() * max);
  const numberOfDecks = presentations.length;

  const handleGoToRandom = () => {
    route.push(`/present/${getRandom(numberOfDecks)}`);
  };
  return (
    <Box padding="15px" height="vh" width="100%">
      <Heading textAlign="center">PowerPoint Karaoke</Heading>
      <Stack
        padding={5}
        justifyContent="center"
        alignItems="center"
        height="100px"
        spacing={5}
      >
        <Button onClick={() => handleGoToRandom()} colorScheme="facebook">
          Random Start
        </Button>
      </Stack>
      <Center>
        <ListDecks decks={presentations} />
      </Center>
    </Box>
  );
}
