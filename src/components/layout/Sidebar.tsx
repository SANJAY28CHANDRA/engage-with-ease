
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../data/mockData";
import { Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import "./Sidebar.css";

interface SidebarProps {
  isLoggedIn: boolean;
}

const Sidebar = ({ isLoggedIn }: SidebarProps) => {
  const navigate = useNavigate();

  const handleAuthLink = (e: React.MouseEvent<HTMLAnchorElement>, destination: string, actionName: string) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast({
        title: "Authentication Required",
        description: `Please login to ${actionName}`,
        variant: "destructive",
      });
      setTimeout(() => navigate("/login"), 1500);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img 
          src="/lovable-uploads/3643078d-e026-4cc8-9c94-04fe222cf4bc.png" 
          alt="ConnectForum" 
          className="sidebar-logo"
        />
        <div>
          <h1 className="sidebar-title">ConnectForum.io</h1>
          <p className="sidebar-subtitle">Platform Discussion</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <Link 
          to="/profile" 
          className="sidebar-link"
          onClick={(e) => handleAuthLink(e, "/profile", "view your profile")}
        >
          <div className="sidebar-icon">
            <Users size={18} />
          </div>
          <span>Profile</span>
        </Link>
        <Link 
          to="/profile" 
          className="sidebar-link"
          onClick={(e) => handleAuthLink(e, "/profile", "view your threads")}
        >
          <div className="sidebar-icon">
            <span className="text-xl">#</span>
          </div>
          <span>Your Threads</span>
        </Link>
        <Link 
          to="/saved" 
          className="sidebar-link"
          onClick={(e) => handleAuthLink(e, "/saved", "view your saved threads")}
        >
          <div className="sidebar-icon">
            <span className="text-xl">📑</span>
          </div>
          <span>Saved</span>
        </Link>
      </nav>

      <div className="sidebar-categories">
        <h3 className="sidebar-heading">Categories</h3>
        <div className="category-list">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="category-link"
            >
              <div className="category-color" style={{ backgroundColor: getCategoryColor(category.color) }}></div>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="create-container">
        <Link 
          to="/create-community" 
          className="create-link"
          onClick={(e) => handleAuthLink(e, "/create-community", "create a community")}
        >
          <div className="create-icon">
            +
          </div>
          <span>Create Community</span>
        </Link>
      </div>

      <div className="sidebar-footer">
        <div className="social-links">
          <Link to="#" className="social-link">
            <span className="text-xl">🚀</span>
          </Link>
          <Link to="#" className="social-link">
            <span className="text-xl">𝕏</span>
          </Link>
          <Link to="#" className="social-link">
            <span className="text-xl">📷</span>
          </Link>
        </div>
        <div className="copyright">
          <p>©2023</p>
          <p>ConnectForum. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

// Helper function to convert Tailwind color classes to CSS colors
const getCategoryColor = (colorClass: string): string => {
  const colorMap: Record<string, string> = {
    "bg-red-500": "#ef4444",
    "bg-blue-500": "#3b82f6",
    "bg-green-500": "#22c55e",
    "bg-yellow-500": "#eab308",
    "bg-purple-500": "#a855f7",
    "bg-indigo-500": "#6366f1",
    "bg-pink-500": "#ec4899"
  };
  
  return colorMap[colorClass] || "#6b7280"; // Default gray
};

export default Sidebar;
