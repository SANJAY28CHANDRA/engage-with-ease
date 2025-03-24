
import { ReactNode } from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      {children && <div className="header-subtitle">{children}</div>}
    </div>
  );
};

export default Header;
