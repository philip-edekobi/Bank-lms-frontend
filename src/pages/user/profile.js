import { Flex, Box, Text, Button, Spacer } from "@chakra-ui/react";
import { useUser } from "../../hooks";

import male from "../../assets/images/male.svg";
import female from "../../assets/images/female.svg";

export default function Profile() {
  const user = useUser();

  return (
    <>
      <hr />
      <Flex w="100%" bgColor="gray.300" h="85%" align="center" px="6">
        <Flex bgColor="white" h="90%" w="50%" mx="2">
          <Flex bgColor="gray.400" w="20%" justify="center">
            <img
              alt="profile"
              src={user.gender === "M" ? male : female}
              width={100}
              height={100}
            />
          </Flex>

          <Flex flexDir="column" w="80%" px="4" py="6">
            <Box>
              <Text
                fontWeight="500"
                fontSize="2xl"
              >{`${user.fname} ${user.lname}`}</Text>
            </Box>
            <hr />
          </Flex>
        </Flex>

        <Spacer />

        <Flex bgColor="white" h="90%" w="50%" mx="2" flexDir="column"></Flex>
      </Flex>
    </>
  );
}
