
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <MainLayout initialIsLoggedIn={true}>
      <Header title="About ConnectForum">
        <p>Learn about our platform and community guidelines</p>
      </Header>
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500 to-blue-400 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">#Free Speech</h3>
            <p className="text-sm">
              You may or may not like or dislike any discussion, but never act on your will.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-300 to-red-300 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">#Trust</h3>
            <p className="text-sm">
              This platform appreciates every user's trust as long as it's reasonable and legal.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-300 to-purple-300 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">#Free Speech</h3>
            <p className="text-sm">
              You are free to speak, discuss, as long as you don't hurt other people.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            ConnectForum is designed to be a platform where people can freely express ideas, engage in meaningful discussions, and build communities around shared interests.
          </p>
          <p>
            We believe in the power of open dialogue and the exchange of diverse perspectives. Our mission is to create a safe, respectful environment where everyone feels welcome to participate.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be respectful to others, even when disagreeing</li>
            <li>No hate speech, harassment, or personal attacks</li>
            <li>Do not share misleading or false information</li>
            <li>Respect copyright and intellectual property rights</li>
            <li>No spamming or excessive self-promotion</li>
            <li>Help create a positive and constructive atmosphere</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Join the Conversation</h2>
          <p className="mb-4">
            Ready to dive in? Start exploring threads, join discussions, or create your own topics to share with the community.
          </p>
          <div className="flex gap-4">
            <a href="/threads" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors">
              Explore Threads
            </a>
            <a href="/create" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Create New Thread
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
