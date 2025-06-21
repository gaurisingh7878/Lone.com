import React from "react";

export default function HeroSection() {
  const scrollToSection = () => {
    const element = document.getElementById("next-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://static.joonsite.com/media/JW_2402211652528756.jpg?class=thumb')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Small Business Loan For Daily Expenses
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
        </p>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
          Get Loan Now
        </button>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full border border-white transition"
        aria-label="Scroll Down"
      >
        <svg className="h-6 w-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
