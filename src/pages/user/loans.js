import { useEffect, useState } from "react";
import { getLoanTypes } from "../../utils/requests";

import { Loan } from "../../components";
import { Flex } from "@chakra-ui/react";

export default function Loans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    (async () => {
      const loanTypes = await getLoanTypes();

      setLoans(loanTypes);
    })();
  }, []);

  return (
    <>
      <hr />
      <Flex mt="4rem" flexWrap="wrap">
        {loans.map(loan => (
          <Loan loan={loan} />
        ))}
      </Flex>
    </>
  );
}
