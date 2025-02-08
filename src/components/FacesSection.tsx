import React, { useState, useEffect } from "react";

const FacesSection = () => {
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
    <div className="w-full bg-[#FFFFFF] flex flex-col gap-[48px] mt-[116px] mb-[141px]">
      <div className="w-full max-w-[1280px] flex mx-auto">
        <div className="w-full flex mx-auto gap-[48px] mt-[116px] mb-[48px]">
          <div className="w-full flex flex-col items-center sm:p-2 p-0 sm:gap-[32px] gap-[24px] mx-auto">
            <p className="w-full font-semibold sm:text-[68px] text-[36px] sm:leading-[80px] leading-[50px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
              We know the faces you love
            </p>
            <p className="w-full max-w-[800px] sm:h-[60px] h-[96px] font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-center text-[#3D3D3D]">
              AirVault uses AI to find your loved ones, across all your
              memories. Letting you live those happy moments that truly happen
              only once.
            </p>
            <button className="w-[188px] h-[49px] py-[12px] px-[24px] gap-[10px] rounded-[67px] bg-[#FF6A00]">
              <span className="font-manrope text-[18px] font-semibold leading-[24.59px] text-center text-[#F9F9F9]">
                Try AirVault now
              </span>
            </button>
          </div>
        </div>
      </div>
      {!showMobileSection ? (
        <div className="w-full flex flex-col gap-[16px]">
          <div className="w-full flex justify-between gap-[16px]">
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/first.png"
                alt="first"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/second.png"
                alt="second"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/third.png"
                alt="third"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/forth.png"
                alt="forth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/fifth.png"
                alt="fifth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex justify-between gap-[16px]">
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/sizth.png"
                alt="sixth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/seventh.png"
                alt="seventh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/eighth.png"
                alt="eighth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/nineth.png"
                alt="nineth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex justify-between gap-[16px]">
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/tenth.png"
                alt="tenth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/eleventh.png"
                alt="eleventh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full flex-1 rounded-[12px] overflow-hidden">
              <img
                src="/assets/twelth.png"
                alt="twelfth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-none flex flex-col gap-[8px]">
          <div className="w-full h-[240px] flex gap-[8px]">
            <div className="flex-1 h-[240px] flex flex-col gap-[8px] rounded-[8px]">
              <div className="w-full h-[116px] rounded-[12px] overflow-hidden">
                <img
                  src="/assets/first.png"
                  alt="first"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[116px] rounded-[12px] overflow-hidden">
                <img
                  src="/assets/sizth.png"
                  alt="sixth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 h-full rounded-[12px] overflow-hidden">
              <img
                src="/assets/third.png"
                alt="third"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[240px] flex gap-[8px]">
            <div className="flex-1 h-full rounded-[12px] overflow-hidden">
              <img
                src="/assets/seventh.png"
                alt="seventh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 h-full rounded-[12px] overflow-hidden">
              <img
                src="/assets/fifth.png"
                alt="fifth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[240px] flex gap-[8px]">
            <div className="flex-1 h-full rounded-[12px] overflow-hidden">
              <img
                src="/assets/eighth.png"
                alt="eighth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 h-[240px] flex flex-col gap-[8px] rounded-[8px]">
              <div className="w-full h-[116px] rounded-[12px] overflow-hidden">
                <img
                  src="/assets/tenth.png"
                  alt="tenth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[116px] rounded-[12px] overflow-hidden">
                <img
                  src="/assets/eleventh.png"
                  alt="eleventh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacesSection;
