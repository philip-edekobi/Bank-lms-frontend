import { Flex, Button, Text, Box, Spacer } from "@chakra-ui/react";
import millify from "millify";

const Loan = ({ loan }) => {
  return (
    <Flex w="45%" py="6" my="4" mx="4" style={shadowStyle} px="4">
      <Flex flexDir="column">
        <Box>
          <Text fontWeight="600" fontSize="xl" color="black">
            {loan.name}
          </Text>
        </Box>

        <Box my="1.5rem">
          <Text>{loan.desc}</Text>
        </Box>

        <Box>
          <Flex align="center">
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
  "box-shadow": "3px 4px 115px 5px rgba(170,170,170,0.38)",
  "-webkit-box-shadow": "3px 4px 115px 5px rgba(170,170,170,0.38)",
  "-moz-box-shadow": "3px 4px 115px 5px rgba(170,170,170,0.38)",
  "border-radius": "1rem",
};
