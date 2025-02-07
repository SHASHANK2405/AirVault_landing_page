import React from "react"; // Import React
// You don't need to import the image here for HTML <img>

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen sm:h-[580px] h-[812px] flex flex-col sm:px-[63px] px-[20px] py-[24px] ">
      <img
        src="/assets/Logo.png"
        alt="Logo"
        width={166}
        height={24}
        className=""
      />
      <div className=" w-full h-auto flex flex-col items-center sm:p-2 p-0 sm:gap-[32px] gap-[24px] mx-auto my-auto">
        <p className="w-full font-semibold sm:text-[68px] text-[36px] sm:leading-[80px] leading-[50px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          Your photo gallery is a mess!
          <br />
          We can fix it.
        </p>
        <p className="w-full  font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-center text-[#3D3D3D]">
          AirVault is the easiest way to capture and relive your memories.
        </p>
        <button className="w-[188px] py-[12px] px-[24px] gap-[10px] rounded-[67px] bg-[#FF6A00]">
          <span className="text-[18px] font-semibold leading-[24.59px] text-center text-[#F9F9F9]">
            Try AirVault now
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
