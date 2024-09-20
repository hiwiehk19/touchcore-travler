import React from "react";

const ResponsiveComponent = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
       <section className="p-6 text-center ">
        <h2 className="text-2xl font-bold my-10">An easy to use travel booking platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-screen">
         
          <div className="flex flex-col items-start gap-2 w-[555px] h-[140px]">
      {/* Main Heading */}
      <div className="py-[217.46px]">
      <h1 className="w-[555px] h-[78px] font-bold text-[30px] leading-[130%] text-black ">
        Customize every content on your website
      </h1>

      {/* Subtext */}
      <p className="w-[555px] h-[54px] font-normal text-[16px] leading-[170%] text-[#6D7C94]">
        Offer your customer a seamless travel booking experience, customized to your brand.
      </p>
      </div>
    </div>
          

          
          <div className="bg-hero bg-no-repeat bg-cover bg-center w-full h-fill   bg-[url('../public/images/Frame1.png')]">
            
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-screen">
         
          <div className="flex flex-col items-start gap-2 w-[555px] h-[140px]">
      {/* Main Heading */}
      <div className="py-[217.46px]">
      <h1 className="w-[555px] h-[78px] font-bold text-[30px] leading-[130%] text-black ">
        Customize every content on your website
      </h1>

      {/* Subtext */}
      <p className="w-[555px] h-[54px] font-normal text-[16px] leading-[170%] text-[#6D7C94]">
        Offer your customer a seamless travel booking experience, customized to your brand.
      </p>
      </div>
    </div>
          

          
          <div className="bg-hero bg-no-repeat bg-cover bg-center w-full h-fill   bg-[url('../public/images/Frame1.png')]">
            
          </div>
        </div>
      </section>
    
    </div>
  
  );
};

export default ResponsiveComponent;
