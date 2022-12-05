import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "..";
import { getUserDetails } from "../../utils/requests";

export default function UserLayout() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const prevLocation = useLocation();

  useEffect(() => {
    getUserDetails().then(userDet => {
      if (userDet.error) navigate(`/login?reDir=${prevLocation}`);

      setUser(userDet);
    });
  }, [navigate, prevLocation]);

  return (
    <>
      <Navbar type="user" />
      <Outlet context={user} />
    </>
  );
}
