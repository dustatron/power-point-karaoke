"use client";
import { Button, Container, Heading } from "@chakra-ui/react";
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
      <Container>
        <Heading>PowerPoint Karaoke</Heading>
        <Button onClick={() => handleGoToRandom()}>Random</Button>
        <Link
          href={{
            pathname: "/present/" + selected,
          }}
        ></Link>
      </Container>
    </main>
  );
}
