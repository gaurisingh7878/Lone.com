import React from "react";
import Illustration from "../assets/About.webp"; // Update path as needed

export default function FeatureGrid() {
  return (
    <div className="py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
            Magical Interface
          </h2>
          <p className="text-gray-600 mb-8">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-200 p-5 rounded-lg flex items-start gap-4">
              <div className="text-white text-3xl">📄</div>
              <div>
                <h3 className="text-lg font-semibold text-black">Business Loan</h3>
                <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-200 p-5 rounded-lg flex items-start gap-4">
              <div className="text-white text-3xl">🏠</div>
              <div>
                <h3 className="text-lg font-semibold text-black">Home Loans</h3>
                <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-200 p-5 rounded-lg flex items-start gap-4">
              <div className="text-white text-3xl">⚙️</div>
              <div>
                <h3 className="text-lg font-semibold text-black">Construction</h3>
                <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-200 p-5 rounded-lg flex items-start gap-4">
              <div className="text-white text-3xl">💰</div>
              <div>
                <h3 className="text-lg font-semibold text-black">Business Loan</h3>
                <p className="text-sm text-gray-700">Lorem, ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full lg:w-1/2">
          <img src={Illustration} alt="Finance illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

