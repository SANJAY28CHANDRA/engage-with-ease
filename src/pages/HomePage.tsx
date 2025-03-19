
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <MainLayout>
      <Header title="ConnectForum">
        <p>Discussion with anyone, You can say anything #FreeSpeech.</p>
      </Header>

      <div className="flex flex-col items-center text-center">
        <div className="w-full max-w-2xl mb-8">
          <img 
            src="/lovable-uploads/d088fa3e-bfb2-414c-88e5-44febc41c6a0.png" 
            alt="Community discussion" 
            className="w-full rounded-xl"
          />
        </div>
        
        <Link 
          to="/threads"
          className="bg-purple-200 text-purple-800 px-6 py-3 rounded-md font-medium hover:bg-purple-300 transition-colors"
        >
          Go to #Threads
        </Link>
      </div>
    </MainLayout>
  );
};

export default HomePage;
