import React from "react";

export default function ContactForm() {
  return (
    <div className="px-4 py-10 md:px-16 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Info Box */}
        <div className="bg-blue-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-4">Let's get in touch</h2>
          <p className="text-gray-700 mb-8">
            We're open for any suggestion or just to have a chat.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <span className="text-2xl">✉️</span>
              </div>
              <span className="text-gray-800">contact@easyloans.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <span className="text-2xl">📞</span>
              </div>
              <span className="text-gray-800">+91-9881230098</span>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <span className="text-2xl">📍</span>
              </div>
              <span className="text-gray-800">
                1560 Holden Street San Diego, CA 92139
              </span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Enter Your Message"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
