import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Import images directly
import MyAppBrokerCert from "../assets/MYAPPBROKER_completion_certificate.jpg";

const Certificates = () => {
  const [expandedCertificate, setExpandedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      company: "MyAppBroker",
    date: "Jan-Fab 2025",
      description: "Freelancer Web Developer",
      image: MyAppBrokerCert, // Use imported image
    }
  ];

  const toggleCertificate = (id) => {
    setExpandedCertificate(expandedCertificate === id ? null : id);
  };

  return (
    <div className="min-h-screen px-4 py-12  md:p-12 lg:p-16">
      <h2 className="font-bold sm:text-center mb-12">
        Certificates
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleCertificate(cert.id)}
              className="w-full p-2  flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="text-left p-2">
                <h3 className=" font-semibold">
                  {cert.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {cert.date}
                </p>
              </div>
              <FiChevronDown
                className={`text-2xl transform transition-transform ${
                  expandedCertificate === cert.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedCertificate === cert.id && (
              <div className="p-4 md:p-6 border-t">
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.company} Certificate`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
