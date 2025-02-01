import React from "react";

const MomentsSection = () => {
  return (
    <div className="w-[910px] h-[779px] flex flex-col mx-auto gap-[32px] my-[160px]">
      <div className="w-full h-[287px] flex flex-col items-center p-2 gap-[16px] mx-auto">
        <p className="w-full h-[160px] font-semibold text-[68px] leading-[80px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          The best moments are the ones you share
        </p>
        <p className="w-full h-[30px] font-medium text-[22px] leading-[30px] text-center text-[#3D3D3D]">
          Share your memories with your friends and family with a single click.{" "}
        </p>
        <button className="w-[188px] h-[49px] py-[12px] px-[24px] gap-[10px] rounded-[67px] mt-[16px] bg-[#FF6A00]">
          <span className="font-manrope text-[18px] font-semibold leading-[24.59px] text-center text-[#F9F9F9]">
            Try AirVault now
          </span>
        </button>
      </div>
      <div className="w-[891] h-[460px] relative">
        <img
          src="/assets/pic 3.png"
          alt="pic 3"
          width={200}
          height={241}
          className="absolute top-[40px] left-[16px] rounded-[20px]"
        />
        <img
          src="/assets/pic 2.png"
          alt="pic 2"
          width={192}
          height={230}
          className="absolute top-[223px] left-[59px] rounded-[20px]"
        />
        <img
          src="/assets/pic 1.png"
          alt="pic 1"
          width={329}
          height={394}
          className="absolute top-[10px] left-[232px] rounded-[20px]"
        />
        <img
          src="/assets/pic 4.png"
          alt="pic 4"
          width={420}
          height={362}
          className="absolute top-[70px] left-[471px] rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default MomentsSection;
