import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import dashboardHeader from "../../assets/images/eduardo-soares-utWyPB8_FU8-unsplash.jpg";
import keyboard from "../../assets/images/pexels-vojtech-okenka-392018.jpg";
import tiles from "../../utils/tiles";
import Dashboardinfo from "../../components/Dashboardinfo";
import { nanoid } from "nanoid";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const takeLoan = () => {
    navigate("../loans");
  };
  return (
    <>
      <hr />
      <Box>
        <Image
          src={dashboardHeader}
          alt="ATM image"
          w="100%"
          h="70vh"
          objectFit="cover"
        />
      </Box>
      <Box>
        <Flex w="90%" p="10px" m="auto">
          <Flex py="22px">
            <Text
              flexBasis="69%"
              p="0 20px 0 0"
              fontSize="30px"
              color="#F00905"
              fontWeight="600"
            >
              Pioneering innovation in the banking sector
            </Text>
            <Text fontSize="16px" color="#555" py="10px">
              With multiple awards over the years, LendingClub continues to
              distinguish itself in the financial service industry across
              Africa. We are at the forefront of innovation on the continent as
              we aim to deliver excellent services to our customers to enable
              them apply for loans with ease.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex w="90%" p="10px" m="auto">
          <Box flexBasis="50%">
            <Image src={keyboard} h="40vh" w="100%" />
          </Box>
          <Box alignSelf="center" p="0 0 0 40px">
            <Text fontSize="40px" color="#F00905" fontWeight="600">
              Open a LendingClub Account
            </Text>
            <Text fontSize="18px" color="#aaa">
              Open an account online in minutes, request for a loan and get
              reltime notifications after every transaction.
            </Text>
            <Flex justifyContent="center" py="10px">
              <Button
                backgroundColor="rgba(240, 9, 5,0.9)"
                color="white"
                sx={{
                  "&:hover": {
                    background: "rgba(240, 9, 5,1.8)",
                  },
                }}
                onClick={takeLoan}
              >
                Take a Loan
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex mt="4rem" flexWrap="wrap">
        {tiles.map((tile) => (
          <Dashboardinfo key={nanoid()} dash={tile} />
        ))}
      </Flex>
      <Flex />
    </>
  );
}
