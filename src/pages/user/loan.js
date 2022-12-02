import { useEffect, useState } from "react";
import { getLoans, getUserDetails } from "../../utils/requests";
import { Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
export default function Loan() {
  const [loans, setLoans] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const loans = await getLoans();
      const userDet = await getUserDetails();
      if (userDet.error) navigate("/login");
      setUser(userDet);
      setLoans(loans.loans);
    })();
  }, [navigate]);
  console.log(user.id);
  console.log(loans);
  // const ll = loans.loans;
  // console.log(ll[1].customer);
  const userLoan = loans.reduce(
    (acc, pos) =>
      pos.customer.id === user.id
        ? acc.push(pos.customer.id)
        : acc.push("djdk"),
    []
  );
  console.log(userLoan);
  return (
    <>
      <>
        <hr />
        <Flex mt="4rem" flexWrap="wrap"></Flex>
      </>
    </>
  );
}
