import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#001931] via-[#002b50] to-[#001931] text-white ">
      <div className="max-w-7xl mx-auto px-10   py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-white">Hero.IO</h2>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Empowering your digital life with simplicity, security, and speed.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-100">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors duration-200">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors duration-200">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-100">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><span className="text-white font-medium">Email:</span> support@myapp.com</li>
            <li><span className="text-white font-medium">Phone:</span> +880 1234 567 890</li>
            <li><span className="text-white font-medium">Address:</span> Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} <span className="text-white font-medium">MyApp</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
