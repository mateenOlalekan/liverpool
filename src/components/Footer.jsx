import React, { useState } from 'react';

const LFCFooter = () => {
  const [email, setEmail] = useState('');

  const handleOptIn = () => {
    console.log('Opted in with email:', email);
    // Handle opt-in logic here
  };

  return (
    <div className="bg-red-600 text-white">
      {/* Newsletter Section */}
      <div className="px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">GET MORE FROM LFC!</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Do you want to hear about our products, competitions, new signing, tickets, club news, and partner offers?
        </p>
        <p className="text-lg mb-8">Opt in to our mailing list now!</p>
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-0">
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-600 placeholder-gray-400 bg-white border-none outline-none rounded-none sm:rounded-l"
          />
          <button
            onClick={handleOptIn}
            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold uppercase tracking-wide transition-colors rounded-none sm:rounded-r"
          >
            OPT IN
          </button>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="px-6 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Standard</span>
            <span className="text-white font-bold text-xl ml-1">Chartered</span>
          </div>
          <div className="text-white text-4xl font-bold">✓</div>
          <div className="text-white text-2xl font-bold">AXA</div>
          <div className="text-white text-xl font-semibold">Expedia</div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* My Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">My Account</a></li>
            </ul>
          </div>

          {/* Orders */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Orders</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Track an Order</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">My Delivery</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Returns</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Sizing</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Membership Discount</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Student Discount</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Key Worker Discounts</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Store Finder</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Become a Wholesale Partner</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="px-6 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">FOLLOW US</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 py-4 text-center text-sm border-t border-red-500">
        <p>© Liverpoolfc.com 2025. All Rights Reserved. VAT Registration No: 325 1957 56</p>
      </div>
    </div>
  );
};

export default LFCFooter;