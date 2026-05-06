import { Shield } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-red-500" />
              <span className="text-lg font-bold">Vulota</span>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Vulota. Advanced Offensive Security Operations
              Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
