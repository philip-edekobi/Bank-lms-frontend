import { Flex } from "@chakra-ui/layout";
import card from "../../assets/pexels-pixabay-50987.jpg"
import bank from "../../assets/jonathan-cooper-0O2Pp6-mOkY-unsplash.jpg"
import banking from "../../assets/pexels-mwabonje-1820919.jpg"
import { getLoanTypes } from "../../utils/requests";
import useLoanType from "../../hooks";
import { useEffect } from "react";
export default function Loans() {
  const {loantype, setLoantype} = useLoanType()
  useEffect(()=>{
    async function set(){
      const data = await getLoanTypes()
      setLoantype(data)
    }
    set()
  },[setLoantype])
  const fullLoanTypes = loantype.data.loanTypes
  const theLoanTypes = fullLoanTypes.reduce(
    (acc,loant)=> acc.includes(loant.name) ? acc : acc.concat(loant.name), []
  )
  console.log(theLoanTypes);
  return (
    <>
    <Flex justifyContent="center">
      <section>
        <h1>Customer Loans</h1>
        <div>
          <p>At Lending Loans, we are constantly thinking about you! We are constantly developing new ways to make getting Loans easier for you.</p>
        </div>
        <Flex justifyContent="space-around" marginTop="5%">
          <div className="loan-col">
            <img src={card} alt="card"/>
            <div className="layer"></div>
          </div>
          <div className="loan-col">
            <img src={bank} alt="card"/>
            <div className="layer"></div>
          </div>
          <div className="loan-col">
            <img src={banking} alt="card"/>
            <div className="layer"></div>
          </div>
        </Flex>
      </section>
    </Flex>
    <section>
        <h1>Apply For Loans </h1>
        <form>
          <select>
            {theLoanTypes.map((LT)=>(
              <option key={LT} value={LT}>{LT}</option>
            ))}
          </select>
        </form>
      </section>
    </>
  );
}
