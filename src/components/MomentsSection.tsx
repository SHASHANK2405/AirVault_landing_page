import React, { useState, useEffect } from "react";

const MomentsSection = () => {
  const [showMobileSection, setShowMobileSection] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowMobileSection(screenWidth >= 300 && screenWidth <= 575);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="max-w-[910px] w-full  flex flex-col mx-auto gap-[32px] my-[160px]">
      <div className="w-full  flex flex-col items-center sm:p-2 p-0 sm:gap-[16px] gap-[24px] mx-auto">
        <p className="w-full font-semibold sm:text-[68px] text-[36px] sm:leading-[80px] leading-[50px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          The best moments are the ones you share
        </p>
        <p className="w-full sm:h-[30px] h-[48px] font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-center text-[#3D3D3D]">
          Share your memories with your friends and family with a single click.{" "}
        </p>
        <button className="w-[188px] h-[49px] py-[12px] px-[24px] gap-[10px] rounded-[67px] mt-[20px] bg-[#FF6A00]">
          <span className="font-manrope text-[18px] font-semibold leading-[24.59px] text-center text-[#F9F9F9]">
            Try AirVault now
          </span>
        </button>
      </div>
      {showMobileSection ? (
        <div className="w-[343px] h-[295.6px] rounded-[24.5px] flex mx-auto">
          <img
            src="/assets/pic 4.png"
            alt="pic 4"
            className="w-[343px] h-[295.6px] rounded-[20px] ml-10"
          />
        </div>
      ) : (
        <div className="max-w-[891px] w-full h-[460px] relative">
          <div className="absolute top-[40px] left-[16px] w-[200px] h-[241px] rounded-[20px] overflow-hidden">
            <img
              src="/assets/pic 3.png"
              alt="pic 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[223px] left-[59px] w-[192px] h-[230px] rounded-[20px] overflow-hidden">
            <img
              src="/assets/pic 2.png"
              alt="pic 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[10px] left-[232px] w-[329px] h-[394px] rounded-[20px] overflow-hidden">
            <img
              src="/assets/pic 1.png"
              alt="pic 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[70px] left-[471px] w-[420px] h-[362px] rounded-[20px] overflow-hidden">
            <img
              src="/assets/pic 4.png"
              alt="pic 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MomentsSection;
