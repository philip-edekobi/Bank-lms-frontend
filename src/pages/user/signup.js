import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../utils/requests";

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
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import logo from "../../assets/images/logo.png";

export default function Signup() {
  const navigate = useNavigate();
  const toast = useToast();

  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [passConf, setPassConf] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => setShow(!show);
  const handleFnameChange = e => setFname(e.target.value);
  const handleLnameChange = e => setLname(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePhoneChange = e => setPhone(e.target.value);
  const handlePassChange = e => setPass(e.target.value);
  const handlePassConfChange = e => setPassConf(e.target.value);

  const submit = async () => {
    setIsLoading(true);
    const response = await userSignup(fname, lname, email, pass, phone);

    if (response.success) {
      navigate("/profile");
    } else {
      setIsLoading(false);
      toast({
        status: "error",
        title: "Failed to Create Account",
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
            w="5.5rem"
            color="white"
            bgColor="#D13"
            onClick={submit}
          >
            <Text>{isLoading ? <Spinner /> : "Join Us"}</Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

const innerBoxStyle = {
  boxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  WebkitBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  MozBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
};
