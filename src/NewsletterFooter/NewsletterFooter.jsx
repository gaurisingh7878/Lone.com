import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function NewsletterFooter() {
  return (
    <div className="mt-10">
      {/* Newsletter Section */}
      <div
        className="bg-cover bg-center text-white py-16 px-4 text-center"
        style={{
          backgroundImage:
            "url('https://static.joonsite.com/media/JW_2402211652574116.jpg?class=thumb')", // Replace with your image
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Subscribe to our Newsletter</h2>
        <p className="text-lg mb-6">We're open for any suggestion or just to have a chat.</p>
        <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-md">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-2/3 p-3 rounded-md border outline-none text-black"
          />
          <button className="w-full md:w-1/3 bg-blue-500 text-white p-3 mt-6 md:mt-0 md:ml-4 rounded-md hover:bg-blue-600 transition">
            Sent!
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1c3b77] text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <span>💸</span>
              <span>EasyLoans</span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veritatis
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">➤ Home</li>
              <li className="flex items-center gap-2">➤ About Us</li>
              <li className="flex items-center gap-2">➤ Blog</li>
              <li className="flex items-center gap-2">➤ Contact Us</li>
              <li className="flex items-center gap-2">➤ Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope /> <span>contact@easyloans.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone /> <span>+91-9881230098</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>1560 Holden Street San Diego, CA 92139</span>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4 text-lg">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
