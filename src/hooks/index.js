import { useLocation } from "react-router-dom";

export function usePath() {
  const location = useLocation();

  return location.pathname.slice(1);
}
