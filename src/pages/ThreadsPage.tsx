
import { useState } from "react";
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_THREADS } from "../data/mockData";
import { Smile, Bold, Italic, List, ListOrdered, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Header from "../components/Header";
import { Thread } from "../types";

const ThreadsPage = () => {
  const [newPost, setNewPost] = useState("");
  const [threads, setThreads] = useState(MOCK_THREADS);

  const handlePost = () => {
    if (!newPost.trim()) {
      toast({
        title: "Error",
        description: "Post content cannot be empty",
        variant: "destructive",
      });
      return;
    }

    // Create new thread with the post content
    const newThread: Thread = {
      id: `thread-${Date.now()}`,
      title: `New thread ${new Date().toLocaleDateString()}`,
      content: newPost,
      author: {
        id: "current-user",
        name: "Current User",
        email: "user@example.com",
        image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
        role: "Member",
        bio: "I am a member of this community"
      },
      createdAt: "Just now",
      category: "Discussion",
      likes: 0,
      dislikes: 0,
      responses: [],
      saved: false
    };

    // Add the new thread to the top of the threads list
    setThreads([newThread, ...threads]);

    toast({
      title: "Success",
      description: "Your post has been created!",
    });

    setNewPost("");
  };

  return (
    <MainLayout>
      <div>
        <Header title="Threads">
          <p>Create and explore discussions with the community</p>
        </Header>

        {/* Create Post Area */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <img 
              src="/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png" 
              alt="User avatar" 
              className="w-10 h-10 rounded-md"
            />
            <textarea
              placeholder="Whats on your mind ? post it"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-md p-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={1}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button className="text-gray-400 hover:text-white">
                <Smile size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Bold size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Italic size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <List size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <ListOrdered size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Link2 size={20} />
              </button>
            </div>
            
            <Button 
              className="bg-purple-400 hover:bg-purple-500 px-6"
              onClick={handlePost}
            >
              POST
            </Button>
          </div>
        </div>
        
        {/* Threads */}
        <div>
          {threads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} showResponses={true} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ThreadsPage;
