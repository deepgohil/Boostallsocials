import React from "react";


function Footer() {
  return (
    <footer className="mt-5 w-full bg-[#F5F5F7] text-black">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium">About</h3>
            <p className="mt-2 text-sm"> Welcome to Boostallsocials, your one-stop solution for boosting your social media presence. We understand the importance of having a strong online presence, and our services are designed to help you achieve just that.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-2 text-sm">
              <li>123 Main St</li>
              <li>Suite 200</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-2 text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="mt-2 text-sm">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Trademark Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base">&copy; 2023 Boostallsocials, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;