import { useEffect, useState } from "react";

import {
  Box,
  Flex,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
} from "@chakra-ui/react";
import { getLoanType } from "../utils/requests";

export default function PaidLoan({ loan }) {
  const [type, setType] = useState("");

  useEffect(() => {
    (async () => {
      const type = await getLoanType(loan?.loanTypeId);
      setType(type?.name);
    })();
  });

  return (
    <AccordionItem
      sx={{
        bgColor: "green.100",
        my: "1rem",
      }}
    >
      <AccordionButton fontSize="xl">
        <Box flex="1" textAlign="left">
          <Text>{loan?.desc}</Text>
        </Box>

        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel>
        <Flex justify="center" flexDir="column" mx="15%">
          <Flex>
            <Text mr="6rem">Type:</Text>
            <Spacer />
            <Text>{type}</Text>
          </Flex>

          <Flex>
            <Text mr="6rem">Collateral:</Text>
            <Spacer />
            <Text>{loan?.collateral}</Text>
          </Flex>

          <Flex>
            <Text mr="6rem">Date Repaid:</Text>
            <Spacer />
            <Text>{Date(loan?.repayDate)}</Text>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
