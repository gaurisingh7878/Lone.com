import React, { useState, useEffect, useRef } from "react";
import { FaMugHot, FaUser, FaLayerGroup, FaTrophy } from "react-icons/fa";

function StatItem({ target, label, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animation settings
            const duration = 2000; // 2 seconds
            const intervalTime = 30; // ms
            const steps = duration / intervalTime;
            const increment = target / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              setCount(Math.floor(current));
            }, intervalTime);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center  p-6  cursor-pointer"
    >
      {/* Icon */}
      <div className="mb-3">{icon}</div>
      {/* Animated Number with a plus */}
      <p className="text-3xl font-bold text-white">
        {count}+
      </p>
      {/* Label */}
      <p className="text-[1.6rem] italic text-white">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { target: 500, label: "Featured Events", icon: <FaMugHot className="text-white w-12 h-12" /> },
    { target: 60, label: "Clients", icon: <FaUser className="text-white w-12 h-12" /> },
    { target: 2000, label: "Creatives Delivered", icon: <FaLayerGroup className="text-white w-12 h-12" /> },
    { target: 5, label: "Trophies Won", icon: <FaTrophy className="text-white w-12 h-12" /> },
  ];

  return (
   <div className="relative w-full py-30 bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: "url('https://static.joonsite.com/media/JW_2402211732422341.png')" }}>
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <StatItem key={index} target={stat.target} label={stat.label} icon={stat.icon} />
      ))}
    </div>
  </div>
</div>

  );
}













// import React, { useEffect, useState } from 'react';

// const MessagingApp = () => {
//   const [messages, setMessages] = useState(() => {
//     return JSON.parse(localStorage.getItem('chatMessages')) || [];
//   });
//   const [inputValue, setInputValue] = useState('');
//   const messagesEndRef = React.createRef();

//   useEffect(() => {
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleSend = () => {
//     if (!inputValue.trim()) return;

//     const newMessage = { text: inputValue, type: 'sent' };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setInputValue('');

//     // Simulate a response
//     setTimeout(() => {
//       const responseText = generateResponse(inputValue);
//       const responseMessage = { text: responseText, type: 'received' };
//       setMessages((prevMessages) => [...prevMessages, responseMessage]);
//     }, 800);
//   };

//   const generateResponse = (input) => {
//     const lower = input.toLowerCase();
//     if (lower.includes('hello')) return 'Hi there! How can I help you?';
//     if (lower.includes('how are you')) return "I'm just a demo app, but I'm doing great!";
//     if (lower.includes('bye')) return "Goodbye! Have a great day!";
//     return "You said: " + input;
//   };

//   return (
//     <div className="flex flex-col h-screen max-w-md mx-auto bg-white rounded-lg shadow-lg">
//       <header className="bg-blue-600 text-white text-lg font-bold text-center p-4">
//         Cool Messaging App
//       </header>
//       <section className="flex-1 p-4 overflow-y-auto bg-gray-200">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`max-w-xs p-2 rounded-lg mb-2 ${
//               msg.type === 'sent'
//                 ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white self-end'
//                 : 'bg-white text-gray-800 self-start'
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </section>
//       <footer className="p-4 bg-gray-100 flex">
//         <input
//           type="text"
//           className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
//           placeholder="Type your message..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               handleSend();
//             }
//           }}
//         />
//         <button
//           className="ml-2 bg-blue-600 text-white rounded-lg px-4 py-2 disabled:opacity-50"
//           onClick={handleSend}
//           disabled={!inputValue.trim()}
//         >
//           Send
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default MessagingApp;
