
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1F2C] text-white p-4">
      <Header title="404">
        <p>Oops, we couldn't find this page</p>
      </Header>
      
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <p className="text-gray-400 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
