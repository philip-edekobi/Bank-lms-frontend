import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
const Dashboardinfo = ({ dash }) => {
  return (
    <Flex w="45%" my="4" mx="4" style={shadowStyle} basis="30%">
      <Flex flexDir="column" w="100%">
        <Box position="relative" overflow="hidden">
          <Image
            src={dash.src}
            alt={dash.title}
            display="block"
            objectFit="cover"
            w="100%"
            h="28vh"
          />
          <Box
            background="transparent"
            height="100%"
            width="100%"
            position="absolute"
            top="0"
            left="0"
            opacity="0"
            transition="1s"
            sx={{
              "&:hover": {
                background: "rgba(240, 9, 5,0.4)",
                opacity: "1",
              },
            }}
          >
            <Text
              w="100%"
              fontWeight="500"
              color="white"
              bottom="40%"
              left="85%"
              transform="translateX(-50%)"
              position="absolute"
              transiton="0,5s"
              fontSize="23px"
            >
              {dash.title}
            </Text>
          </Box>
        </Box>

        <Box my="1.5rem">
          <Text px="15px" m="auto" color="#555">
            {dash.info}
          </Text>
          <Text px="15px" m="auto" py="10px" fontSize="20px" color="#F00905">
            Learn More
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

const shadowStyle = {
  boxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  WebkitBoxSshadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  MozBoxShadow: "3px 4px 115px 5px rgba(170,170,170,0.38)",
  borderRadius: "1rem",
};

export default Dashboardinfo;
