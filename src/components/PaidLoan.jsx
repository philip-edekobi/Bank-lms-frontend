import { Flex, Box, Text } from "@chakra-ui/react";

export default function PaidLoan({ loan }) {
  return (
    <Flex border="1px solid green" my="3" p="2" bgColor="green.200">
      <Text>{loan?.desc}</Text>
    </Flex>
  );
}
