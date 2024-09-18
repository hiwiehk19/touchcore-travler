import React from "react";

const Header = () => (
    <div className="bg-black h-screen w-full">
  <header className="flex flex-col items-center p-0 gap-4 absolute w-[956px] h-[275px] left-1/2 transform -translate-x-1/2 top-[217.46px] bg-black">
   
   
    <h1 className="text-4xl font-bold mb-4 text-white">
      Start selling travel today on your own website
    </h1>
    <p class="w-[956px] h-[27px] text-base font-normal leading-[1.7] text-center text-[#6D7C94] font-firma">
  Customize your travel website, and start selling. Let’s get your business off the ground with our intuitive tools!
</p>
    <button className="bg-blue-500 text-white  rounded-lg flex flex-row items-center justify-center gap-[19px] w-[250px] h-[50px]">
      Try Now
    </button>
  </header>
  </div>
);

export default Header;
