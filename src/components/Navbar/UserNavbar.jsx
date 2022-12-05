import { Flex, Box, Spacer } from "@chakra-ui/react";
import { nanoid } from "nanoid";

import logo from "../../assets/images/logo.png";
import Navlink from "./Navlink";

const navs = ["Home", "Get Loan", "My Loans", "Profile", "Make Deposit"];

export default function UserNavbar() {
  return (
    <Flex align="center" justify="space-between">
      <Box>
        <img src={logo} alt="logo" width={150} height={150} />
      </Box>

      <Spacer />

      <Flex mx="">
        {navs.map(nav => (
          <Navlink key={nanoid()} text={nav} />
        ))}
      </Flex>

      <Spacer />
    </Flex>
  );
}
