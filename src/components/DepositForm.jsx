import {
  Flex,
  Text,
  Button,
  Spacer,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeDeposit } from "../utils/requests";

export default function DepositBox() {
  const [isLoading, setIsLoading] = useState(false);
  const [dep, setDep] = useState("");

  const handleDepChange = e => setDep(e.target.value);

  const toast = useToast();
  const navigate = useNavigate();

  const deposit = async () => {
    setIsLoading(true);
    const response = await makeDeposit(dep);

    if (response.error) {
      setIsLoading(false);
      toast({
        status: "error",
        title: "Deposit attempt failed",
        description:
          response.error ||
          "An un-forseen error occurred with your loan application",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(false);
    toast({
      status: "success",
      title: "Deposit Successful",
      description: `${dep} has been added to your account`,
      duration: 2000,
      isClosable: true,
    });
    setDep("");
    navigate("/profile");
  };

  return (
    <Flex w="100%" h="60%" justify="center" align="center">
      <Flex w="55%" style={shadowStyle} px="3rem" py="2rem" flexDir="column">
        <Text color="#D13" fontWeight="600" fontSize="2xl">
          Make a deposit
        </Text>

        <Flex mt="2rem">
          <Input
            w="70%"
            placeholder="Amount to deposit"
            variant="filled"
            type="number"
            value={dep}
            onChange={handleDepChange}
          />
          <Spacer />
          <Button w="20%" colorScheme="green" onClick={deposit}>
            <Text>{isLoading ? <Spinner /> : "Deposit"}</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

const shadowStyle = {
  boxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  WebkitBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  MozBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
};
