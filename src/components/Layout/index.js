import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";

export default function Layout({ type }) {
  if (type === "user") {
    return <UserLayout />;
  } else if (type === "admin") {
    return <AdminLayout />;
  }
}
