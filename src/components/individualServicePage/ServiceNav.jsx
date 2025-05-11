// src/components/ServiceNav.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { services } from "./servicesList";

const ServiceNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = services.findIndex((s) => s.link === location.pathname);



  const goTo = (index) => {
  console.log("current index",index)

    if (index >= 0 && index < services.length) {
      navigate(services[index].link);
    }
  };

  return (
    <div className="flex justify-between mt-10 px-5">
      {currentIndex > 0 && (
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          ← {services[currentIndex - 1].title}
        </button>
      )}
      {currentIndex < services.length - 1 && (
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 ml-auto"
        >
          {services[currentIndex + 1].title} →
        </button>
      )}
    </div>
  );
};

export default ServiceNav;
