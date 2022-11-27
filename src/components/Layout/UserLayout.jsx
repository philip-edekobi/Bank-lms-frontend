import { Outlet } from "react-router-dom";
import { Navbar } from "..";

export default function UserLayout() {
  return (
    <>
      <Navbar type="user" />
      <Outlet />
    </>
  );
}
