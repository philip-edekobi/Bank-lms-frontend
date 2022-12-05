import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { usePath } from "../../hooks";

const map = {
  dashboard: "Home",
  loan: "My Loans",
  loans: "Get Loan",
  profile: "Profile",
};

const revMap = {
  Home: "dashboard",
  "My Loans": "loan",
  "Get Loan": "loans",
  Profile: "profile",
  "Make Deposit": "deposit",
};

export default function Navlink({ text }) {
  const path = usePath();
  const navigate = useNavigate();

  const jp = () => {
    navigate(revMap[text]);
  };

  return (
    <Box mx="6">
      <Text
        fontSize="xl"
        color={map[path] === text ? "#DD1133" : null}
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: "#E66",
          },
        }}
        onClick={jp}
      >
        {text}
      </Text>
    </Box>
  );
}
