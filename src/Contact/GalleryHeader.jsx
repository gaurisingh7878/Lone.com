import React from "react";

export default function GalleryHeader() {
  return (
    <div
      className="w-full h-64 bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('https://static.joonsite.com/media/JW_2402211652574116.jpg')", // Replace with actual path
      }}
    >
      <div className="text-center text-white  bg-opacity-50 px-6 py-4 rounded">
        <h1 className="text-4xl font-bold mb-2">Our Gallery</h1>
        <div className="text-lg space-x-2">
           <a href="/" className="hover:underline">
          Home
        </a>
          <span>&gt;</span>
          <span className="italic">Contact-us</span>
        </div>
      </div>
    </div>
  );
}
