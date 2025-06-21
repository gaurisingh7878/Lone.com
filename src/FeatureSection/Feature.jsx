import React from "react";
import Image from "../assets/About.webp"; // Your image path

export default function FeatureSection() {
  return (
    <div className="bg-[#e8f1ff] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Image with Blob Shape */}
        <div className="w-full lg:w-1/2 relative">
          <div className="w-full h-full">
            <img
              src={Image}
              alt="Finance support"
              className="w-full h-auto object-cover blob-shape"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Building a Brighter Financial Future & Good Support.
          </h2>
          <p className="text-gray-700 mb-6">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
