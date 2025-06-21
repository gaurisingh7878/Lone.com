import React from "react";

// Sample images – replace with your actual image paths
import John from "../assets/About.webp";
import Jamie from "../assets/About1.webp";
import Smith from "../assets/About.webp";
import Tory from "../assets/About1.webp";

const team = [
  {
    name: "John Doe",
    role: "Lorem, ipsum dolor sit amet consectetur",
    image: John,
  },
  {
    name: "Jamie",
    role: "Lorem, ipsum dolor sit amet consectetur",
    image: Jamie,
  },
  {
    name: "Smith",
    role: "Lorem, ipsum dolor sit amet consectetur",
    image: Smith,
  },
  {
    name: "Tory",
    role: "Lorem, ipsum dolor sit amet consectetur",
    image: Tory,
  },
];

export default function TeamSection() {
  return (
    <div className="bg-[#eaf0ff] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Meet the Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
