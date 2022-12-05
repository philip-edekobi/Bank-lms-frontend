import { Flex, Text, Spacer, Box } from "@chakra-ui/layout";
const CustomerPaidLoans = ({ paid }) => {
  return (
    <>
      <Flex w="45%" py="6" my="4" mx="4" style={shadowStyle} px="4">
        <Flex flexDir="column" w="100%">
          <Box w="100%">
            <Text fontWeight="600" fontSize="xl" color="black">
              {paid?.desc}
            </Text>
          </Box>

          <Box my="1.5rem" w="100%">
            <Text>{paid?.collateral}</Text>
          </Box>

          <Box w="100%">
            <Flex align="center" w="100%">
              <Text color="green.500" fontSize="lg" fontWeight="700">
                Paid
              </Text>

              <Spacer />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
const shadowStyle = {
  boxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  WebkitBoxSshadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  MozBoxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  borderRadius: "1rem",
};

export default CustomerPaidLoans;
