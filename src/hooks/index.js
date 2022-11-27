import { LoanTypeContext } from "../context";
import { useContext } from "react";

const useLoanType = () =>{
    return useContext(LoanTypeContext)
}

export default useLoanType