import {
  Button,
  Card,
  CardBody,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SlideProps } from "../app/present/SlideTemplate";
import { Deck } from "@/presentations";
import Link from "next/link";
import { Box } from "spectacle";

type Props = {
  decks: Deck[];
};

function ListDecks({ decks }: Props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Stack spacing="5" width="50%">
      <Button
        onClick={() => setIsShowing(!isShowing)}
        colorScheme={isShowing ? "gray" : "linkedin"}
      >
        Show All Presentations
      </Button>
      {isShowing && (
        <Card width="100%">
          <CardBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Presentations</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {decks.map((deck, index) => (
                    <Tr>
                      <Link color="teal.500" href={`/present/${index}`}>
                        <Td color="teal.500">{deck[0].title}</Td>
                      </Link>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      )}
    </Stack>
  );
}

export default ListDecks;
