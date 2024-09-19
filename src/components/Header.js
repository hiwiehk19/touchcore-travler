// import React from "react";

// const Header = () => (
//     <div className="bg-black h-screen w-full">
//   <header className="flex flex-col items-center p-0 gap-4 absolute   left-1/2 transform -translate-x-1/2 top-[217.46px] bg-black">
   
   
//     <h1 className="w-[956px] h-[166px] text-[64px] font-normal leading-[1.3] text-center text-white font-brfirma">
//       Start selling travel today on your own website
//     </h1>
//     <p class="w-[956px] h-[27px] text-base font-normal leading-[1.7] text-center text-[#6D7C94] font-firma">
//   Customize your travel website, and start selling. Let’s get your business off the ground with our intuitive tools!
// </p>
//     <button className="bg-blue-500 text-white  rounded-lg flex flex-row items-center justify-center gap-[19px] w-[250px] h-[50px]">
//       Try Now
//     </button>
  
//   <div className=" bg-cover bg-hero bg-no-repeat bg-cover bg-center  w-[800px] h-[510px] left-[330.49px] top-[573.46px] bg-[url('../public/images/LinksTemplate13.png')] border-[5px] border-[#D4D8DD] rounded-[15px] box-border"
//  ></div>
//  </header>
//   </div>
// );

// export default Header;

import React from 'react';

const ExistingUserLink = () => {
  return (
    <div className=" h-[898px] bg-black relative">
      {/* Main Text Section */}
      <div className="flex flex-col items-center gap-4 absolute sm:w-full w-[956px] h-[275px] left-1/2 transform -translate-x-1/2 top-[217.46px]">
        {/* Large Title */}
        <h1 className="sm:w-full  h-[166px] text-4xl md:text-[64px]  font-black leading-[1.3] text-center text-white">
          Start selling travel today on your own website
        </h1>

        {/* Description */}
        <p className="w-[956px] h-[27px] text-[16px] font-normal leading-[1.7] text-center text-[#6D7C94]">
          Customize your travel website, and start selling. Let’s get your business off the ground with our intuitive tools!
        </p>

        {/* Button */}
        <div className="flex flex-row items-center gap-[19px] w-[250px] h-[50px]">
          <button className="flex flex-row justify-center items-center w-[250px] h-[50px] bg-[#1E61DC] text-[#E8F4FF] text-[18px] font-normal leading-[1] rounded-[8px]">
            Try it now
          </button>
        </div>
      </div>

      {/* Background Image Template */}
      <div className="sm:hidden md:block absolute bg-hero bg-no-repeat bg-cover bg-center w-[800px] h-[510px] left-[330.49px] top-[573.46px] bg-[url('../public/images/LinksTemplate13.png')] border-[5px] border-[#D4D8DD] rounded-[15px]"></div>

     
      
    </div>
  );
};

export default ExistingUserLink;
