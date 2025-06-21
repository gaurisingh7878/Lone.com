import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 p-10">
      {/* Left Content */}
      <div className="space-y-6" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          We Promise Sustainable Future For You.
        </h2>
        <p className="text-gray-600">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: "/icons/business.png", title: "Business Loan" },
            { icon: "/icons/commercial.png", title: "Commercial Loans" },
            { icon: "/icons/construction.png", title: "Construction Loans" },
            { icon: "/icons/tablet.png", title: "Business Loan" },
          ].map((item, index) => (
            <div className="flex items-start gap-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <button className="mt-4 bg-blue-300 text-black px-6 py-2 rounded-lg hover:bg-blue-400 transition-all">
          Read more
        </button>
      </div>

      {/* Right Image */}
      <div data-aos="fade-left">
        <img src="/images/building.jpg" alt="Building" className="w-full h-full object-cover rounded" />
      </div>
    </div>
  );
};

export default FeatureSection;
