"use client";
import { Button, Container, Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import presentations from "../presentations";

export default function Home() {
  const route = useRouter();
  const getRandom = (max: number) => Math.floor(Math.random() * max);
  const numberOfDecks = presentations.length;
  const selected = String(getRandom(numberOfDecks));

  const handleGoToRandom = () => {
    route.push(`/present/${getRandom(numberOfDecks)}`);
  };
  return (
    <main>
      <Container padding="15px">
        <Heading textAlign="center">PowerPoint Karaoke</Heading>
        <Flex
          padding={5}
          justifyContent="center"
          alignItems="center"
          height="100px"
        >
          <Button onClick={() => handleGoToRandom()} colorScheme="facebook">
            Start
          </Button>
          <Link
            href={{
              pathname: "/present/" + selected,
            }}
          ></Link>
        </Flex>
      </Container>
    </main>
  );
}
