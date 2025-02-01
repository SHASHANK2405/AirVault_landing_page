import React from "react";

const FacesSection = () => {
  return (
    <div className="w-full h-[1300px] bg-[#FFFFFF]">
      <div className="w-full h-[1043px] flex flex-col gap-[48px] mt-[116px] mb-[141px]">
        <div className="w-[896px] h-[287px] flex flex-col items-center p-2 gap-[32px] mx-auto">
          <p className="w-[896px] h-[80px] font-semibold text-[68px] leading-[80px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
            We know the faces you love
          </p>
          <p className="w-full h-[60px] font-medium text-[22px] leading-[30px] text-center text-[#3D3D3D]">
            AirVault uses AI to find your loved ones, across all your memories.
            Letting you live those happy moments that truly happen only once.
          </p>
          <button className="w-[188px] h-[49px] py-[12px] px-[24px] gap-[10px] rounded-[67px] bg-[#FF6A00]">
            <span className="font-manrope text-[18px] font-semibold leading-[24.59px] text-center text-[#F9F9F9]">
              Try AirVault now
            </span>
          </button>
        </div>
        <div className="w-full flex flex-col gap-[16px]">
          <div className="w-full h-[242px] flex justify-between gap-[9px]">
            <img
              src="/assets/first.png"
              alt="first"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/second.png"
              alt="second"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/third.png"
              alt="third"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/forth.png"
              alt="forth"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/fifth.png"
              alt="fifth"
              className="h-full flex-1 object-fit"
            />
          </div>
          <div className="w-full h-[242px] flex justify-between gap-[9px]">
            <img
              src="/assets/sizth.png"
              alt="sixth"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/seventh.png"
              alt="seventh"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/eighth.png"
              alt="eighth"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/nineth.png"
              alt="nineth"
              className="h-full flex-1 object-fit"
            />
          </div>
          <div className="w-full h-[242px] flex justify-between gap-[9px]">
            <img
              src="/assets/tenth.png"
              alt="tenth"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/eleventh.png"
              alt="eleventh"
              className="h-full flex-1 object-fit"
            />
            <img
              src="/assets/twelth.png"
              alt="twelth"
              className="h-full flex-1 object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacesSection;
