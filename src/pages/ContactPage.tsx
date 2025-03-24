
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <MainLayout initialIsLoggedIn={isLoggedIn}>
      <div>
        <Header title="Contact Us">
          <p>Get in touch with our team</p>
        </Header>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name *
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="bg-purple-400 hover:bg-purple-500 w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            
            <div className="bg-gray-800 p-4 rounded-lg flex gap-4">
              <div className="bg-purple-400 bg-opacity-20 p-2 rounded">
                <Mail className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-400">support@connectforum.io</p>
                <p className="text-gray-400">info@connectforum.io</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg flex gap-4">
              <div className="bg-purple-400 bg-opacity-20 p-2 rounded">
                <Phone className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg flex gap-4">
              <div className="bg-purple-400 bg-opacity-20 p-2 rounded">
                <MapPin className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-400">123 Forum Street</p>
                <p className="text-gray-400">Tech City, TC 10101</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Business Hours</h3>
              <p className="text-gray-400">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-400">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
