import { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  Spinner,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { payLoan } from "../utils/requests";

export default function UnpaidLoan({ loan }) {
  const [payLoading, setPayLoading] = useState(false);
  const toast = useToast();

  const pay = async () => {
    setPayLoading(true);

    const response = await payLoan();

    if (response.error) {
      toast({
        status: "error",
        title: "Failed to pay loan",
        description: response?.error || "Some Error Occurred",
        duration: 2000,
        isClosable: true,
      });
      setPayLoading(false);
      return;
    }

    toast({
      status: "success",
      title: "Loan Payment Successful",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    setPayLoading(false);
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <Flex w="45%" py="6" my="4" mx="4" style={shadowStyle} px="4">
      <Flex flexDir="column" w="100%">
        <Box w="100%">
          <Text fontWeight="600" fontSize="xl" color="black">
            {loan?.name}
          </Text>
        </Box>

        <Box my="1.5rem" w="100%">
          <Text>{loan?.desc}</Text>
        </Box>

        <Box w="100%">
          <Flex align="center" w="100%">
            <Spacer />

            <Button color="white" bgColor="#BD1313" onClick={pay}>
              <Text>{payLoading ? <Spinner /> : "Pay"}</Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

const shadowStyle = {
  boxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  WebkitBoxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  MozBoxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  borderRadius: "1rem",
};
