
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_USER, MOCK_THREADS } from "../data/mockData";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";

const ProfilePage = () => {
  // Filter threads to only show those created by the current user
  const userThreads = MOCK_THREADS.filter(thread => thread.author.id === MOCK_USER.id);
  
  return (
    <MainLayout isLoggedIn={true}>
      <div>
        <Header title="My Profile">
          <p>Manage your profile and view your contributions</p>
        </Header>
        
        {/* Profile Header */}
        <div className="mb-8">
          <div className="h-40 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-lg mb-4"></div>
          
          <div className="flex flex-col items-center -mt-16">
            <img 
              src={MOCK_USER.image}
              alt={MOCK_USER.name}
              className="w-32 h-32 rounded-full border-4 border-[#1A1F2C] mb-4"
            />
            
            <h1 className="text-2xl font-bold uppercase mb-1">{MOCK_USER.name}</h1>
            <p className="text-gray-400 mb-4">{MOCK_USER.role}</p>
            
            <p className="text-center max-w-md mb-6">
              {MOCK_USER.bio}
            </p>
          </div>
        </div>
        
        {/* Profile Tabs */}
        <div className="border-b border-gray-700 mb-6">
          <div className="flex">
            <Button 
              variant="ghost" 
              className="px-6 py-2 border-b-2 border-purple-500 text-white"
            >
              Threads
            </Button>
            <Button 
              variant="ghost" 
              className="px-6 py-2 text-gray-400 hover:text-white"
            >
              Responses
            </Button>
            <Button 
              variant="ghost" 
              className="px-6 py-2 text-gray-400 hover:text-white"
            >
              Likes
            </Button>
          </div>
        </div>
        
        {/* User Threads */}
        <div>
          {userThreads.length > 0 ? (
            userThreads.map(thread => (
              <ThreadCard key={thread.id} thread={thread} />
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No threads yet</h3>
              <p className="text-gray-400 mb-6">Start a conversation by creating your first thread</p>
              <Button className="bg-purple-500 hover:bg-purple-600">
                Create Thread
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
