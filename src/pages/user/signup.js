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

export default function Signup() {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [passConf, setPassConf] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleClick = () => setShow(!show);
  const handleFnameChange = (e) => setFname(e.target.value);
  const handleLnameChange = (e) => setLname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);
  const handlePassConfChange = (e) => setPassConf(e.target.value);

  const submit = () => {};

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
            placeholder="First Name"
            variant="flushed"
            value={fname}
            onChange={handleFnameChange}
          />
        </Box>

        <Box mt="2" mb="4" mx="8">
          <Input
            placeholder="Last Name"
            variant="flushed"
            value={lname}
            onChange={handleLnameChange}
          />
        </Box>

        <Box mt="2" mb="4" mx="8">
          <Input
            placeholder="Email"
            variant="flushed"
            value={email}
            type="email"
            onChange={handleEmailChange}
          />
        </Box>

        <Box mt="2" mb="4" mx="8">
          <Input
            placeholder="Phone Number"
            variant="flushed"
            value={phone}
            type="number"
            onChange={handlePhoneChange}
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

        <Box my="6" mx="8">
          <InputGroup>
            <Input
              placeholder="Confirm Password"
              variant="flushed"
              type={show ? "text" : "password"}
              value={passConf}
              onChange={handlePassConfChange}
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
            isDisabled={
              !(
                pass?.length >= 6 &&
                pass === passConf &&
                fname &&
                lname &&
                phone &&
                email
              )
            }
            color="white"
            bgColor="#D13"
            onClick={submit}
          >
            <Text>Join Us</Text>
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
