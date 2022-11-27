import { createContext, useState } from "react";

export const LoanTypeContext = createContext([])

export const LoanTypeProvider =({children}) =>{
    const [loantype, setLoantype] = useState([])
    return(
        <LoanTypeContext.Provider value={{loantype, setLoantype}}>
            {children}</LoanTypeContext.Provider>
    )
}
