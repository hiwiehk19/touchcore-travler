import React from 'react';

const FastestWay = () => {
  return (
    <div className="z-50 flex flex-col item-center justify-center p-[96px]   gap-[66px] h-[506px] bg-white">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-[8px] w-[1160.75px] h-[47px]">
        <h1 className="w-[1160.75px] h-[47px] text-[36px] font-bold leading-[1.3] text-center text-black">
          The fastest way to sell travel
        </h1>
      </div>

      {/* Card Grid */}
      <div className="flex flex-row flex-wrap items-center gap-[24px] w-[1200px] h-[201px]">
        
        {/* Card 1 */}
        <div className="flex flex-col items-start gap-[8px] w-[384px] h-[201px]">
          <div className="flex flex-row justify-center items-center gap-[10px] w-[100px] h-[100px] bg-[#E7F6FF] rounded-[8px]">
            <p className="text-[24px] font-bold leading-[1.3] text-black">1</p>
          </div>
          <h2 className="w-[384px] h-[31px] text-[24px] font-bold leading-[1.3] text-black">Subscribe</h2>
          <p className="w-[384px] h-[54px] text-[16px] font-normal leading-[1.7] text-[#6D7C94]">
            Offer your customer a seamless travel booking experience, customised to your brand.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start gap-[8px] w-[384px] h-[201px]">
          <div className="flex flex-row justify-center items-center gap-[10px] w-[100px] h-[100px] bg-[#E7F6FF] rounded-[8px]">
            <p className="text-[24px] font-bold leading-[1.3] text-black">2</p>
          </div>
          <h2 className="w-[384px] h-[31px] text-[24px] font-bold leading-[1.3] text-black">Customize</h2>
          <p className="w-[384px] h-[54px] text-[16px] font-normal leading-[1.7] text-[#6D7C94]">
            Customize every content on your website to fit your brand.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start gap-[8px] w-[384px] h-[201px]">
          <div className="flex flex-row justify-center items-center gap-[10px] w-[100px] h-[100px] bg-[#E7F6FF] rounded-[8px]">
            <p className="text-[24px] font-bold leading-[1.3] text-black">3</p>
          </div>
          <h2 className="w-[384px] h-[31px] text-[24px] font-bold leading-[1.3] text-black">Start selling</h2>
          <p className="w-[384px] h-[54px] text-[16px] font-normal leading-[1.7] text-[#6D7C94]">
            Publish to your own domain and start selling instantly.
          </p>
        </div>
      </div>

      {/* Hidden Element */}
      <div className="hidden w-[1200px] h-[201px] bg-[#0F0A26] rounded-[8px]"></div>
    </div>
  );
};

export default FastestWay;
