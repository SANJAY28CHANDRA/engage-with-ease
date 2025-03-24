
import { ReactNode, useState } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Rightbar from "./layout/Rightbar";

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
    <div className="flex min-h-screen bg-[#1A1F2C] text-white font-sans">
      <Sidebar isLoggedIn={isLoggedIn} />

      <div className="flex-1 flex">
        <div className="flex-1 max-w-4xl">
          <Topbar isLoggedIn={isLoggedIn} onLoginStatusChange={handleLoginStatus} />

          <div className="p-6">
            {children}
          </div>
        </div>

        <Rightbar isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};

export default MainLayout;
