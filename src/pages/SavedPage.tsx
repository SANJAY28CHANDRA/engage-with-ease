
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_THREADS } from "../data/mockData";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const SavedPage = () => {
  // Filter threads to only show saved ones
  const savedThreads = MOCK_THREADS.filter(thread => thread.saved);
  
  return (
    <MainLayout isLoggedIn={true}>
      <div>
        <Header title="Saved Threads">
          <p>Access your bookmarked threads for easy reference</p>
        </Header>
        
        {savedThreads.length > 0 ? (
          savedThreads.map(thread => (
            <ThreadCard key={thread.id} thread={thread} />
          ))
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No saved threads</h3>
            <p className="text-gray-400">
              Threads you save will appear here for easy access
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SavedPage;
