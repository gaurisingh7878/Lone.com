import React from "react";
import { Percent, HandCoins, Home, FileBarChart } from "lucide-react"; // Optional, use your preferred icons

export default function LoanCards() {
  const cards = [
    {
      title: "Home & Property Loan",
      description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <Percent className="h-10 w-10 mx-auto text-white" />,
      bg: "bg-[#1e3a8a]", // dark blue
    },
    {
      title: "Commercial Loans",
      description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <HandCoins className="h-10 w-10 mx-auto text-white" />,
      bg: "bg-[#3b82f6]", // light blue
    },
    {
      title: "Construction Loans",
      description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <Home className="h-10 w-10 mx-auto text-white" />,
      bg: "bg-[#1e3a8a]",
    },
    {
      title: "Business Loan",
      description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <FileBarChart className="h-10 w-10 mx-auto text-white" />,
      bg: "bg-[#3b82f6]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bg} text-white p-6 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-300`}
        >
          <div className="mb-4">{card.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
