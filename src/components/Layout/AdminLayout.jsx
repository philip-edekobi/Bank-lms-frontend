import { Outlet } from "react-router-dom";
import { Navbar } from "..";

export default function AdminLayout() {
  return (
    <>
      <Navbar type="admin" />
      <Outlet />
    </>
  );
}
