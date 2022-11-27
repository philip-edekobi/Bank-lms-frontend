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
} from "./pages";

import { Layout } from "./components";

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
          </Route>

          <Route path="/admin" element={<Layout type="admin" />}>
            <Route path="dashboard" element={<AdminDashBoard />} />
          </Route>

          <Route path="/login" element={<UserLogin />} />

          <Route path="/signup" element={<UserSignup />} />

          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
