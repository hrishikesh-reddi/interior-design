import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm Lumina's virtual assistant. How can I help you design your dream home today?", isBot: true }
  ]);

  const presetReplies = [
    "I want a free quote",
    "What is the starting price?",
    "Do you do modular kitchens?"
  ];

  const handleReply = (text: string) => {
    // Add user message
    setMessages(prev => [...prev, { text, isBot: false }]);
    
    // Simulate bot typing
    setTimeout(() => {
      let botReply = "Our team will contact you shortly to discuss this!";
      if (text.includes("quote")) botReply = "Great! Please fill out the form at the bottom of the page to get a free 3D design and quote.";
      if (text.includes("price")) botReply = "Our full home interiors start from ₹3.5L, and modular kitchens from ₹1.2L. You can use our Cost Calculator above for an estimate!";
      if (text.includes("kitchen")) botReply = "Yes! We specialize in smart, space-saving modular kitchens. Check out our portfolio section.";
      
      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-amber-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-700 transition-transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="bg-gray-900 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
                  L
                </div>
                <div>
                  <h4 className="font-bold text-sm">Lumina Assistant</h4>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isBot 
                        ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm' 
                        : 'bg-amber-600 text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Preset Replies */}
            <div className="p-3 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              {presetReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => handleReply(reply)}
                  className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors whitespace-nowrap"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Area (Fake) */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                disabled
              />
              <button className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center shrink-0 opacity-50 cursor-not-allowed">
                <Send size={18} className="-ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
