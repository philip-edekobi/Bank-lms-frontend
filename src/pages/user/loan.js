import { useEffect, useState } from "react";
import { getLoans } from "../../utils/requests";
import { UnpaidLoan, PaidLoan } from "../../components";

import {
  Flex,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Loan() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getLoans();
      setLoans(response.loans);
    })();
  }, []);

  const user = useOutletContext();

  const pending = loans.find(val => val?.isSettled === false);
  const paid = loans.filter(val => val?.isSettled === true);

  return (
    <>
      <hr />
      <Flex
        bgColor="gray.300"
        minH="100%"
        align="center"
        flexDir="column"
        px="8rem"
      >
        <Box bgColor="white" w="100%" mx="8rem" px="2rem" mt="0.5" h="100%">
          <Text
            fontSize="3xl"
            mb="2rem"
          >{`${user?.fname} ${user?.lname}`}</Text>

          <Box>
            <Accordion allowMultiple defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton fontSize="2xl">
                  <Box flex="1" textAlign="left">
                    <Text> Outstanding</Text>
                  </Box>

                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  {pending ? (
                    <UnpaidLoan loan={pending} />
                  ) : (
                    <Text color="gray.500">
                      You have no outstanding loan repayments to make.
                    </Text>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box mt="4rem">
            <Accordion allowMultiple defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton fontSize="2xl">
                  <Box flex="1" textAlign="left">
                    <Text>Settled</Text>
                  </Box>

                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  {paid.length > 0 ? (
                    <Accordion allowMultiple defaultIndex={[0]}>
                      {paid.map(loan => (
                        <PaidLoan key={nanoid()} loan={loan} />
                      ))}
                    </Accordion>
                  ) : (
                    <Text color="gray.500">You have no settled loans.</Text>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
