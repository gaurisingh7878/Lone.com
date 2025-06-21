import React, { useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const testimonials = [
  {
    name: "Maisie",
    role: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo possimus...",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Kevin Smith",
    role: "Designer",
    text: "Dolorem explicabo possimus reprehenderit aspernatur amet odio quos...",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emilia",
    role: "Designer",
    text: "Quam assumenda nesciunt unde id eveniet possimus vero?",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Emilia",
    role: "Designer",
    text: "Quam assumenda nesciunt unde id eveniet possimus vero?",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-full sm:w-96 bg-blue-50 rounded-2xl p-6 m-2 shadow-md">
    {/* Stars */}
    <div className="flex text-yellow-400 mb-4">
      {Array(5).fill().map((_, i) => <FaStar key={i} />)}
    </div>
    <p className="text-gray-700 mb-6">{testimonial.text}</p>
    <div className="flex items-center gap-4">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials.</h2>
      <div className="relative">
        {/* Scroll Left */}
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-full">
          <FaArrowLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth hide-scrollbar px-8"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Scroll Right */}
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
