import { useState } from "react";

import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import logo from "../../assets/images/logo.png";

export default function Login() {
  const [show, setShow] = useState(false);
  const [accNum, setAccNum] = useState(null);
  const [pass, setPass] = useState(null);

  const handleClick = () => setShow(!show);
  const handlePassChange = (e) => setPass(e.target.value);
  const handleAccChange = (e) => setAccNum(e.target.value);
  const submit = () => {
    (async () => {})();
  };

  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Flex
        px="8"
        py="1"
        w="50%"
        h="60%"
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

        <Box mx="6" my="6">
          <Button
            isDisabled={!(pass?.length >= 6 && accNum)}
            color="white"
            bgColor="#D13"
            onClick={submit}
            type="submit"
          >
            <Text>Login</Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

const innerBoxStyle = {
  "box-shadow": "3px 4px 115px 5px rgba(78,73,73,0.72)",
  "-webkit-box-shadow": "3px 4px 115px 5px rgba(78,73,73,0.72)",
  "-moz-box-shadow": "3px 4px 115px 5px rgba(78,73,73,0.72)",
};
