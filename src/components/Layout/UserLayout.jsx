import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "..";
import { getUserDetails } from "../../utils/requests";

export default function UserLayout() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails().then(userDet => {
      if (userDet.error) navigate("/login");

      setUser(userDet);
    });
  }, [navigate]);

  return (
    <>
      <Navbar type="user" />
      <Outlet context={user} />
    </>
  );
}
