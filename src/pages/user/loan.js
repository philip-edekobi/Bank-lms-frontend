import { useEffect, useState } from "react";
import { getLoans } from "../../utils/requests";
import { Flex } from "@chakra-ui/layout";
export default function Loan() {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    (async () => {
      const loanTypes = await getLoans();

      setLoans(loanTypes);
    })();
  }, [setLoans]);
  console.log(loans);
  return (
    <>
      <>
        <hr />
        <Flex mt="4rem" flexWrap="wrap"></Flex>
      </>
    </>
  );
}
