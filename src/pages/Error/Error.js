import error from "../../assets/images/error-404.png";
import { Flex } from "@chakra-ui/layout";
export default function Error() {
  return (
    <Flex justifyContent="center" padding="30px">
      <img src={error} alt="error" />
    </Flex>
  );
}
