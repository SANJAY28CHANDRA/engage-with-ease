
import { useState } from "react";
import MainLayout from "../components/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Header from "../components/Header";

const CommunityPage = () => {
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleCreateCommunity = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!communityName || !communityDescription) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would create the community in the database
    toast({
      title: "Feature in development",
      description: "Sorry #PeopleSpeech, community feature not yet available, but don't worry, this feature is being worked on by professional developers.",
    });
  };

  return (
    <MainLayout initialIsLoggedIn={true}>
      <div className="max-w-2xl mx-auto">
        <Header title="Communities">
          <p>Join existing communities or create your own</p>
        </Header>
        
        <h1 className="text-3xl font-bold mb-8 text-center">
          Top community that you can join & discuss
        </h1>
        
        <p className="text-center text-gray-400 mb-8">
          You can join the community you want to discuss with anyone, anywhere, and anytime.
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border-2 border-gray-700">
          <div className="flex flex-col items-center text-center px-4 py-6">
            <span className="text-3xl mb-4">💬</span>
            <h2 className="text-xl font-bold mb-4">Nothing Community</h2>
            <p className="text-gray-400 mb-4">
              sorry #PeopleSpeech, community feature not yet available, but don't worry, this feature is being worked on by professional developers. see you again...
            </p>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Create a New Community</h2>
          
          <form onSubmit={handleCreateCommunity}>
            <div className="mb-4">
              <label htmlFor="community-name" className="block text-gray-400 mb-2">
                Community Name *
              </label>
              <Input
                id="community-name"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                placeholder="Enter community name"
                className="w-full bg-gray-700 border-gray-600"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="community-description" className="block text-gray-400 mb-2">
                Community Description *
              </label>
              <textarea
                id="community-description"
                value={communityDescription}
                onChange={(e) => setCommunityDescription(e.target.value)}
                placeholder="Describe what your community is about"
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <input
                  id="private-community"
                  type="checkbox"
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded"
                />
                <label htmlFor="private-community" className="ml-2 text-gray-400">
                  Make this community private
                </label>
              </div>
              <p className="text-gray-500 text-sm mt-1 ml-6">
                Private communities require admin approval for new members
              </p>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600"
            >
              Create Community
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
