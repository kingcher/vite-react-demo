import { Link, Outlet } from "react-router-dom";
import "./index.css";
import { useUserStore } from "@/store/UserStore";

const Layout = () => {
  const { userInfo } = useUserStore();

  return (
    <div className="container">
      <div className="menu">
        <Link to="/login">login</Link>
        <Link to="/main/page1">page1</Link>
        <Link to="/main/page2">page2</Link>
      </div>
      <div className="content">
        <h1>{userInfo?.username}</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
