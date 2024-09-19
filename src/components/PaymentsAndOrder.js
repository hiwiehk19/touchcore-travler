import React from 'react';

const TravelBooking = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
     

      {/* Payments and Order Management Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Payments Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Payments</h2>
          <p>Take payments securely from your customers using our payments.</p>
          <div className="flex items-center mt-4">
            <img
              src="https://paystack.com/logo.png" // Replace with actual image
              alt="Paystack"
              className="w-16 h-8"
            />
            <div className="ml-4">
              <span className="text-gray-700">**** **** **** 3920</span>
              <span className="text-gray-500 ml-2">| MM/YY CVC</span>
              <button className="bg-blue-500 text-white py-2 px-4 rounded ml-4">Pay</button>
            </div>
          </div>
        </div>

        {/* Order Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Order Management</h2>
          <p className="text-gray-500">Register interest today...</p>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-700">
              <span>00:10 - 06:40</span>
              <p>TK490390, AP109302</p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Issue Ticket</button>
            <p className="ml-4 text-gray-700">₦8,500,400</p>
          </div>
        </div>
      </section>

      {/* Easy to Use Travel Booking Platform */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">An easy to use travel booking platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 gap-4">
              {[
                'Hero Section',
                'About us',
                'Tours',
                'Flights',
                'Navigation',
                'Hotels',
                'Chat',
                'Contact Us',
                'FAQs',
                'Listing Style',
                'Footer',
                'Search Engine',
                'ETC',
              ].map((item, index) => (
                <button
                  key={index}
                  className="bg-blue-100 py-2 px-4 rounded-lg text-blue-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Example Image Box (Can replace with actual booking search form or image) */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
              <p>Flight | Stays | Tours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelBooking;
