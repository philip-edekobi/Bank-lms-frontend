import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserDetails } from "../utils/requests";

export function usePath() {
  const location = useLocation();

  return location.pathname.slice(1);
}

export function useUser() {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const userDetails = await getUserDetails();

      setUser(userDetails);
    })();
  }, []);

  return user ? user : null;
}

export function useUserLoggedInStatus() {
  const user = useUser();

  return user ? true : false;
}
