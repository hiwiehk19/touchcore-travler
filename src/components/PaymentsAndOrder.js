import React from 'react';

const TravelBooking = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
     

     

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
