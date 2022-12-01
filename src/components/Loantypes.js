import { Flex, Button, Text, Box, Spacer } from "@chakra-ui/react";
import millify from "millify";

const Loan = ({ loan }) => {
  return (
    <Flex w="45%" py="6" my="4" mx="4" style={shadowStyle} px="4">
      <Flex flexDir="column" w="100%">
        <Box w="100%">
          <Text fontWeight="600" fontSize="xl" color="black">
            {loan.name}
          </Text>
        </Box>

        <Box my="1.5rem" w="100%">
          <Text>{loan.desc}</Text>
        </Box>

        <Box w="100%">
          <Flex align="center" w="100%">
            <Text color="green.500" fontSize="lg" fontWeight="700">{`${millify(
              loan.amount,
              {
                space: true,
                precision: 4,
              }
            )} (${loan.interest}%)`}</Text>

            <Spacer />

            <Button color="white" bgColor="#BD1313">
              <Text>Apply Now</Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Loan;

const shadowStyle = {
  boxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  WebkitBoxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  MozBoxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  borderRadius: "1rem",
};
