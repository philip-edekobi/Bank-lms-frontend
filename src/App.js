import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  AdminDashBoard,
  AdminLogin,
  UserDashboard,
  UserLoan,
  UserLoans,
  UserLogin,
  UserProfile,
  UserSignup,
  ErrorPage,
} from "./pages";

import { Layout, LoanApplyForm, DepositForm } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout type="user" />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="loans" element={<UserLoans />} />
            <Route path="loan" element={<UserLoan />} />
            <Route path="apply/:loanTypeId" element={<LoanApplyForm />} />
            <Route path="deposit" element={<DepositForm />} />
          </Route>

          <Route path="/admin" element={<Layout type="admin" />}>
            <Route path="dashboard" element={<AdminDashBoard />} />
          </Route>

          <Route path="/login" element={<UserLogin />} />

          <Route path="/signup" element={<UserSignup />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
