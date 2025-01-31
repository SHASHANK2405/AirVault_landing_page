import React from "react";

const MomentsSection = () => {
  return (
    <div className="w-[71%] h-[779px] flex flex-col mx-auto gap-[32px] my-[160px]">
      <div className="w-full h-[287px] flex flex-col items-center p-2 gap-[16px] mx-auto">
        <p className="w-full h-[160px] font-semibold text-[68px] leading-[80px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          The best moments are the <br /> ones you share
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
      <div className="w-[70%] h-[460px] rounded-[16px] bg-[#CED3D6] mx-auto flex items-center justify-center">
        <p className="w-[184px] h-[27px] text-[22px] font-normal leading-[26px] text-center text-[#31323D]">
          video clip / GIF
        </p>
      </div>
    </div>
  );
};

export default MomentsSection;
