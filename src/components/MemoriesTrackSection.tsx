import React from "react";

const MemoriesTrackSection = () => {
  return (
    <div className="w-full p-3 flex flex-col justify-between items-center gap-[120px] mx-auto my-[40px]">
      <div className="w-full gap-[8px] flex flex-col justify-between">
        <p className="w-full sm:text-[40px] text-[24px] font-normal sm:leading-[54px] leading-[33px] text-center text-[#31323D]">
          AirVault doesn’t just store your media.
        </p>
        <div className="sm:w-full w-[95%] sm:h-[287px] h-[230px] flex flex-col items-center sm:p-2 p-0 gap-[16px] mx-auto">
          <p className="w-full font-semibold sm:text-[68px] text-[36px] sm:leading-[80px] leading-[50px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
            We track your memories.
          </p>
          <p className="w-full  font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-center text-[#3D3D3D]">
            Your entire life-story right at your fingertips.
          </p>
          <button className="w-[188px] h-[49px] py-[12px] px-[24px] gap-[10px] rounded-[67px] bg-[#FF6A00]">
            <span className="font-manrope text-[18px] font-semibold leading-[24.59px] text-center text-[#F9F9F9]">
              Try AirVault now
            </span>
          </button>
        </div>
      </div>
      <img
        src="/assets/Mobile.png"
        alt="Mobile"
        className="sm:w-[880.36px] w-[343px] "
      />
    </div>
  );
};

export default MemoriesTrackSection;
