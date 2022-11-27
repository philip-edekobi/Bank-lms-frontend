import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";

export default function Navbar({ type }) {
  if (type === "user") {
    return <UserNavbar />;
  } else if (type === "admin") {
    return <AdminNavbar />;
  }
}
