
import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="mb-6 pb-4 border-b border-gray-700">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {children && <div className="text-gray-400">{children}</div>}
    </div>
  );
};

export default Header;
