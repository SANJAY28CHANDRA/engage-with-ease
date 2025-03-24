
import { ReactNode, useState } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Rightbar from "./layout/Rightbar";
import "./MainLayout.css";

interface MainLayoutProps {
  children: ReactNode;
  initialIsLoggedIn?: boolean;
}

const MainLayout = ({ children, initialIsLoggedIn = false }: MainLayoutProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  const handleLoginStatus = (status: boolean) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="main-layout">
      <Sidebar isLoggedIn={isLoggedIn} />

      <div className="main-content">
        <div className="content-container">
          <Topbar isLoggedIn={isLoggedIn} onLoginStatusChange={handleLoginStatus} />

          <div className="page-content">
            {children}
          </div>
        </div>

        <Rightbar isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};

export default MainLayout;
