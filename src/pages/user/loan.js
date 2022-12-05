import { useEffect, useState } from "react";
import { getLoans, payforLoan } from "../../utils/requests";
import { Flex, Text } from "@chakra-ui/layout";
import { CustomerLoans, CustomerPaidLoans } from "../../components";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";
import { useToast } from "@chakra-ui/react";
export default function Loan() {
  const [loans, setLoans] = useState([]);
  const [arrow, setArrow] = useState(true);
  const toast = useToast();
  const [IsLoading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const loans = await getLoans();
      setLoans(loans.loans);
    })();
  }, []);
  const pay = async () => {
    setLoading(true);
    const response = await payforLoan();
    console.log(response);
    if (response?.data?.success) {
      setLoading(false);
      toast({
        status: "success",
        title: "Payed Loan Succesfully",
        description: "Success",
        duration: 4000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      setLoading(false);
      toast({
        status: "error",
        title: "Insufficient Funds",
        description: response.error,
        duration: 4000,
        isClosable: true,
      });
      // window.location.reload();
    }
  };
  // console.log(loans);
  const user = useOutletContext();
  // console.log(user);
  const pending = loans.filter((val) => val?.isSettled === false);
  const paid = loans.filter((val) => val?.isSettled === true);
  // console.log(pending);
  // const pay = async ()=>{
  //   const response = await pa
  // }
  return (
    <>
      <>
        <hr />
        <Flex flexDir="column" p="0 0 0 20px ">
          <Text fontSize="64px">{`${user?.lname} ${user?.fname}`}</Text>
          <Text fontSize="32px">Account Number: {user?.acc_num}</Text>
        </Flex>
        <Flex flexDir="column" p="0 0 0 20px">
          <Text fontSize="64px" color="#F00905">
            Current Loan
          </Text>
        </Flex>
        <Flex flexDir="row">
          {pending.length !== 0 ? (
            pending.map((pending) => (
              <CustomerLoans
                key={nanoid()}
                pending={pending}
                IsLoading={IsLoading}
                pay={pay}
              />
            ))
          ) : (
            <Text>You do not have any Current Loans</Text>
          )}
        </Flex>
        <Flex>
          <Text
            onClick={() => {
              setArrow(!arrow);
            }}
            cursor="pointer"
            fontSize="60px"
            color="#F00905"
            p="0 0 20px 20px"
          >
            Previous Loans
            {arrow === true ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Text>
        </Flex>
        <Flex flexWrap="wrap">
          {arrow === false ? (
            paid.length !== 0 ? (
              paid.map((paid) => (
                <CustomerPaidLoans key={nanoid()} paid={paid} />
              ))
            ) : (
              <Text>No Previous Loans</Text>
            )
          ) : null}
        </Flex>
      </>
    </>
  );
}
