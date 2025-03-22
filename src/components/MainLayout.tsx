
import { ReactNode } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Rightbar from "./layout/Rightbar";

interface MainLayoutProps {
  children: ReactNode;
  isLoggedIn?: boolean;
}

const MainLayout = ({ children, isLoggedIn = false }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#1A1F2C] text-white font-sans">
      <Sidebar isLoggedIn={isLoggedIn} />

      <div className="flex-1 flex">
        <div className="flex-1 max-w-4xl">
          <Topbar />

          <div className="p-6">
            {children}
          </div>
        </div>

        <Rightbar />
      </div>
    </div>
  );
};

export default MainLayout;
