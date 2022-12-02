import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Button,
  Text,
  Input,
  Textarea,
  Spinner,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { getLoanType, applyForLoan } from "../utils/requests";

export default function LoanApplyForm() {
  const { loanTypeId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [loan, setLoan] = useState();
  const [desc, setDesc] = useState("");
  const [collateral, setCollateral] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDescChange = e => setDesc(e.target.value);
  const handleCollateralChange = e => setCollateral(e.target.value);
  const handleDueDateChange = e => setDueDate(e.target.value);

  useEffect(() => {
    async function loadLoan() {
      const loanType = await getLoanType(loanTypeId);

      if (loanType.error) {
        toast({
          status: "error",
          title: "An un-forseen error occurred",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }

      return loanType;
    }

    loadLoan().then(loanType => setLoan(loanType));
  }, [loanTypeId, toast]);

  const apply = async () => {
    setIsLoading(true);

    const response = await applyForLoan({
      desc,
      collateral,
      loanTypeId,
      dueDate,
    });

    if (response.error) {
      setIsLoading(false);

      toast({
        status: "error",
        title: "Unsuccessful Application",
        description: "An un-forseen error occurred with your loan application",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(false);

    toast({
      status: "success",
      title: "Loan application Successful",
      description: "Your loan has been approved for processing",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => navigate("/loan"), 4000);
  };

  return (
    <Flex w="100%" h="80%" justify="center" align="center">
      <Flex w="65%" style={shadowStyle} px="3rem" py="2rem" flexDir="column">
        <Text fontSize="2xl" fontWeight="600" color="#D13">
          Apply For {loan?.name}
        </Text>

        <Box mt="3rem" mb="2rem">
          <Textarea
            value={desc}
            onChange={handleDescChange}
            placeholder="Loan Description"
          />
        </Box>

        <Box my="2rem">
          <Input
            placeholder="Collateral"
            value={collateral}
            onChange={handleCollateralChange}
            variant="flushed"
          />
        </Box>

        <Box my="2rem">
          <Text ml="1" color="gray.600">
            Due Date:{" "}
          </Text>
          <Input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            variant="filled"
          />
        </Box>

        <Flex>
          <Spacer />

          <Button
            color="white"
            bgColor="#D13"
            onClick={apply}
            isDisabled={!(desc && dueDate && collateral)}
          >
            <Text>{isLoading ? <Spinner /> : "Complete Application"}</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

const shadowStyle = {
  boxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  WebkitBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
  MozBoxShadow: "3px 4px 115px 5px rgba(78,73,73,0.72)",
};
