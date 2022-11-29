import { useState } from "react";
import { userLogin } from "../../utils/requests";
import { Link, useNavigate } from "react-router-dom";

import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Spinner,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import logo from "../../assets/images/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const toast = useToast();

  const [show, setShow] = useState(false);
  const [accNum, setAccNum] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => setShow(!show);
  const handlePassChange = e => setPass(e.target.value);
  const handleAccChange = e => setAccNum(e.target.value);

  const submit = async () => {
    setIsLoading(true);
    const response = await userLogin(accNum, pass);

    if (response.success) {
      navigate("/dashboard");
    } else {
      setIsLoading(false);
      toast({
        status: "error",
        title: "Failed to Log In",
        description: response.error,
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Flex
        px="8"
        py="1"
        w="50%"
        style={innerBoxStyle}
        justify="flex-start"
        flexDir="column"
      >
        <Box>
          <img alt="logo" src={logo} width={200} height={200} />
        </Box>

        <Box mt="2" mb="4" mx="8">
          <Input
            placeholder="Account Number"
            variant="flushed"
            value={accNum}
            type="number"
            onChange={handleAccChange}
          />
        </Box>

        <Box my="6" mx="8">
          <InputGroup>
            <Input
              placeholder="Password"
              variant="flushed"
              type={show ? "text" : "password"}
              value={pass}
              onChange={handlePassChange}
            />
            <InputRightElement>
              <ViewIcon
                fontSize="xl"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "#aaa",
                  },
                }}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
        </Box>

        <Flex ml="6" my="6" align="center">
          <Button
            isDisabled={!(pass?.length >= 6 && accNum)}
            color="white"
            bgColor="#D13"
            onClick={submit}
            type="submit"
          >
            <Text>{isLoading ? <Spinner /> : "Login"}</Text>
          </Button>

          <Spacer />

          <Link to="/signup">
            <Text
              sx={{
                color: "#11F",
                fontStyle: "italic",
                "&:hover": {
                  textDecor: "underline",
                  color: "#33F",
                },
              }}
            >
              New user? Create account
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

const innerBoxStyle = {
  boxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  WebkitBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  MozBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
};
