
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  // Redirect to the home page
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading ConnectForum...</h1>
        <p className="text-xl text-gray-400">Please wait</p>
      </div>
    </div>
  );
};

export default Index;
