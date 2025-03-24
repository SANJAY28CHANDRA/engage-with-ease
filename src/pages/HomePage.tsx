
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <MainLayout>
      <Header title="ConnectForum">
        <p>Discussion with anyone, You can say anything #FreeSpeech.</p>
      </Header>

      <div className="flex-center">
        <div className="home-image-container">
          <img 
            src="/lovable-uploads/d088fa3e-bfb2-414c-88e5-44febc41c6a0.png" 
            alt="Community discussion" 
            className="home-image"
          />
        </div>
        
        <Link 
          to="/threads"
          className="threads-link"
        >
          Go to #Threads
        </Link>
      </div>
    </MainLayout>
  );
};

export default HomePage;
