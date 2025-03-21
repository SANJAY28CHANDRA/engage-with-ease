
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Search, HelpCircle, Book, MessageSquare, Settings, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn] = useState(false);

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <div>
        <Header title="Help & Support">
          <p>Find answers to your questions and get assistance</p>
        </Header>

        <div className="relative max-w-xl mx-auto mt-6 mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 border-gray-700 pl-10"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Button variant="outline" className="flex flex-col items-center gap-2 h-auto p-6 bg-gray-800 hover:bg-gray-700 border-gray-700">
            <Book size={24} className="text-purple-400" />
            <span className="font-medium">User Guides</span>
            <span className="text-xs text-gray-400">How to use the platform</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col items-center gap-2 h-auto p-6 bg-gray-800 hover:bg-gray-700 border-gray-700">
            <MessageSquare size={24} className="text-purple-400" />
            <span className="font-medium">Community Forum</span>
            <span className="text-xs text-gray-400">Ask the community</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col items-center gap-2 h-auto p-6 bg-gray-800 hover:bg-gray-700 border-gray-700">
            <HelpCircle size={24} className="text-purple-400" />
            <span className="font-medium">FAQ</span>
            <span className="text-xs text-gray-400">Frequently asked questions</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="bg-gray-800 rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">How do I create an account?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To create an account, click on the "Login" button at the top of the page, 
                  then select "Register" option. Fill out the required information and submit the form.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-gray-800 rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">How do I create a thread?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To create a thread, navigate to the Threads page and use the post creation area at the top. 
                  Enter your content and click the "POST" button. You must be logged in to create a thread.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-gray-800 rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">How do I save a thread?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To save a thread, click the save icon (bookmark) on the thread you want to save. 
                  Saved threads can be accessed from the "Saved" section in the sidebar.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-gray-800 rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">How do I create a community?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To create a community, click on the "Create Community" button in the sidebar. 
                  Fill in the details about your community and submit the form. You need to be logged in to create a community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Get Help By Category</h2>
            <div className="space-y-4">
              <Button variant="outline" className="flex justify-between w-full p-4 bg-gray-800 hover:bg-gray-700 border-gray-700">
                <div className="flex items-center gap-3">
                  <User size={20} className="text-purple-400" />
                  <span>Account & Profile</span>
                </div>
                <span className="text-gray-400">→</span>
              </Button>
              
              <Button variant="outline" className="flex justify-between w-full p-4 bg-gray-800 hover:bg-gray-700 border-gray-700">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-purple-400" />
                  <span>Threads & Responses</span>
                </div>
                <span className="text-gray-400">→</span>
              </Button>
              
              <Button variant="outline" className="flex justify-between w-full p-4 bg-gray-800 hover:bg-gray-700 border-gray-700">
                <div className="flex items-center gap-3">
                  <Settings size={20} className="text-purple-400" />
                  <span>Settings & Preferences</span>
                </div>
                <span className="text-gray-400">→</span>
              </Button>
            </div>
            
            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Still need help?</h3>
              <p className="text-gray-300 mb-4">
                If you couldn't find what you were looking for, please contact our support team.
              </p>
              <Button className="bg-purple-400 hover:bg-purple-500">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HelpPage;
