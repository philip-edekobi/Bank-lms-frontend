import { useOutletContext } from "react-router-dom";
import { userUpdate, changeUserPassword } from "../../utils/requests";

import {
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useState } from "react";

import male from "../../assets/images/male.svg";
import female from "../../assets/images/female.svg";

export default function Profile() {
  const toast = useToast();
  const user = useOutletContext();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [addr, setAddr] = useState("");
  const [dob, setDob] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [editIsLoading, setEditIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassConf, setShowPassConf] = useState(false);
  const [passChangeIsLoading, setPassChangeIsLoading] = useState(false);

  const handleFnameChange = e => setFname(e.target.value);
  const handleLnameChange = e => setLname(e.target.value);
  const handlePhoneChange = e => setPhone(e.target.value);
  const handleDobChange = e => setDob(e.target.value);
  const handleGenderChange = e => setGender(e.target.value);
  const handleAddrChange = e => setAddr(e.target.value);
  const handlePassChange = e => setPass(e.target.value);
  const handlePassConfChange = e => setPassConf(e.target.value);

  const togglePassVisibility = () => setShowPass(!showPass);
  const togglePassConfVisibility = () => setShowPassConf(!showPassConf);

  const showPersistButton = fname || lname || phone || gender || addr || dob;
  const showChangePwdButton = pass && passConf && pass === passConf;

  /*useEffect(() => {
    getUserDetails().then(userDet => {
      if (userDet.error) navigate("/login");

      setUser(userDet);
    });
  }, [navigate]);*/

  const edit = async () => {
    const response = await userUpdate({
      fname,
      lname,
      phone,
      addr,
      dob,
      gender,
    });

    if (response?.success) {
      setEditIsLoading(false);

      toast({
        status: "success",
        title: "Details Successfully Updated",
        duration: 4000,
        isClosable: true,
        position: "top",
      });

      window.location.reload();
    } else {
      setEditIsLoading(false);
      toast({
        status: "error",
        title: "Fail ",
        description: response?.error || "Some Error Occurred",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const changePassword = async () => {
    setPassChangeIsLoading(true);
    const response = await changeUserPassword(pass);

    if (response?.success) {
      setPassChangeIsLoading(false);

      toast({
        status: "success",
        title: "Password Change Successful",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } else {
      setPassChangeIsLoading(false);
      toast({
        status: "error",
        title: "Fail ",
        description: response?.error || "Some Error Occurred",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <hr />
      <Flex w="100%" bgColor="gray.300" h="85%" align="center" px="6">
        <Flex bgColor="white" h="90%" w="50%" mx="2">
          <Flex bgColor="gray.400" w="20%" justify="center">
            <img
              alt="profile"
              src={user?.gender === "M" ? male : female}
              width={100}
              height={100}
            />
          </Flex>

          <Flex flexDir="column" w="80%" px="4" py="6">
            <Flex align="center">
              <Text
                fontWeight="600"
                fontSize="2xl"
              >{`${user?.fname} ${user?.lname}`}</Text>
            </Flex>

            <hr />

            <Flex mt="4rem" align="center" bgColor="gray.100" p="2">
              <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
                Account Number:
              </Text>
              <Text fontWeight="600" fontSize="xl">
                {user?.acc_num}
              </Text>
            </Flex>

            <Flex my="1rem" align="center" bgColor="gray.100" p="2">
              <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
                Balance:
              </Text>
              <Text fontWeight="600" fontSize="xl">
                {`${user?.account?.balance}`}
              </Text>
            </Flex>

            <hr />

            <Text mt="3rem" fontWeight="600">
              Edit Details
            </Text>

            <hr />

            <Flex mt="2rem" align="center">
              <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
                First Name:
              </Text>

              <Spacer />

              <Input
                value={fname}
                onChange={handleFnameChange}
                placeholder={user?.fname}
                variant="filled"
                w="60%"
              />
            </Flex>

            <Flex mt="2rem" align="center">
              <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
                Last Name:
              </Text>

              <Spacer />

              <Input
                value={lname}
                onChange={handleLnameChange}
                placeholder={user?.lname}
                variant="filled"
                w="60%"
              />
            </Flex>

            <Flex mt="2rem" align="center">
              <Text
                type="number"
                mr="4"
                color="gray.700"
                fontWeight="500"
                fontSize="xl"
              >
                Phone Number:
              </Text>

              <Spacer />

              <Input
                type="number"
                onChange={handlePhoneChange}
                value={phone}
                placeholder={user?.phone_num}
                variant="filled"
                w="60%"
              />
            </Flex>
          </Flex>
        </Flex>

        <Spacer />

        <Flex
          bgColor="white"
          h="90%"
          w="50%"
          mx="2"
          flexDir="column"
          px="4rem"
          py="6"
        >
          <hr />

          <Flex mt="1rem" align="center">
            <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
              Gender:
            </Text>

            <Spacer />

            <Input
              placeholder={user?.gender}
              variant="filled"
              onChange={handleGenderChange}
              value={gender}
              w="60%"
            />
          </Flex>

          <Flex mt="1rem" align="center">
            <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
              Birth Date:
            </Text>

            <Spacer />

            <Input
              placeholder={new Date(user?.dob).toLocaleDateString()}
              type="date"
              variant="filled"
              onChange={handleDobChange}
              value={dob}
              w="35%"
            />
          </Flex>

          <Flex mt="1rem" align="center" mb="1rem">
            <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
              Address:
            </Text>

            <Spacer />

            <Input
              value={addr}
              placeholder={user?.address}
              onChange={handleAddrChange}
              variant="filled"
              w="60%"
            />
          </Flex>

          <Button
            w="15rem"
            mx="8rem"
            my="4"
            colorScheme="green"
            onClick={edit}
            isDisabled={!showPersistButton}
          >
            <Text>{editIsLoading ? <Spinner /> : "Persist Changes"}</Text>
          </Button>

          <hr />

          <Text mt="3rem" fontWeight="600">
            Change Password
          </Text>

          <hr />

          <Flex mt="1rem" align="center">
            <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
              New Password:
            </Text>

            <Spacer />

            <InputGroup w="60%">
              <Input
                value={pass}
                onChange={handlePassChange}
                type={showPass ? "text" : "password"}
                variant="filled"
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
                  onClick={togglePassVisibility}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex mt="1rem" align="center" mb="1rem">
            <Text mr="4" color="gray.700" fontWeight="500" fontSize="xl">
              Confirm Password:
            </Text>

            <Spacer />

            <InputGroup w="60%">
              <Input
                value={passConf}
                onChange={handlePassConfChange}
                type={showPassConf ? "text" : "password"}
                variant="filled"
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
                  onClick={togglePassConfVisibility}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Button
            colorScheme="green"
            ml="60%"
            w="5rem"
            onClick={changePassword}
            isDisabled={!showChangePwdButton}
          >
            <Text>{passChangeIsLoading ? <Spinner /> : "Change"}</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
