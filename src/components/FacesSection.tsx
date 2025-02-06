import React, { useState, useEffect } from "react";

const FacesSection = () => {
  const [showMobileSection, setShowMobileSection] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowMobileSection(screenWidth >= 360 && screenWidth <= 375);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full bg-[#FFFFFF] flex items-center justify-center">
      <div className="w-[1280px] h-[1265px] sm:h-[1300px]">
        <div className="w-full h-[1043px] flex flex-col gap-[48px] mt-[116px] mb-[141px]">
          <div className="sm:w-[896px] w-[343px] sm:h-[287px] h-[301px] flex flex-col items-center sm:p-2 p-0 sm:gap-[32px] gap-[24px] mx-auto">
            <p className="sm:w-[896px] w-[343px] sm:h-[80px] h-[100px] font-semibold sm:text-[68px] text-[36px] sm:leading-[80px] leading-[50px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
              We know the faces you love
            </p>
            <p className="w-full sm:h-[60px] h-[96px] font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-center text-[#3D3D3D]">
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
          {!showMobileSection ? (
            <div className="w-full flex flex-col gap-[16px]">
              <div className="w-full h-[242px] flex justify-between gap-[16px]">
                <img
                  src="/assets/first.png"
                  alt="first"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/second.png"
                  alt="second"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/third.png"
                  alt="third"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/forth.png"
                  alt="forth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/fifth.png"
                  alt="fifth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
              </div>
              <div className="w-full h-[242px] flex justify-between gap-[16px]">
                <img
                  src="/assets/sizth.png"
                  alt="sixth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/seventh.png"
                  alt="seventh"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/eighth.png"
                  alt="eighth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/nineth.png"
                  alt="nineth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
              </div>
              <div className="w-full h-[242px] flex justify-between gap-[16px]">
                <img
                  src="/assets/tenth.png"
                  alt="tenth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/eleventh.png"
                  alt="eleventh"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
                <img
                  src="/assets/twelth.png"
                  alt="twelth"
                  className="h-full flex-1 object-fit rounded-[12px]"
                />
              </div>
            </div>
          ) : (
            <div className="w-[375px] h-[736px] flex flex-col gap-[8px]">
              <div className="w-full h-[240px] flex gap-[8px]">
                <div className="w-[183.5px] h-[240px] flex flex-col gap-[8px] rounded-[8px]">
                  <img
                    src="/assets/first.png"
                    alt="first"
                    className="w-[183.5px] h-[116px] object-fit rounded-[12px]"
                  />
                  <img
                    src="/assets/sizth.png"
                    alt="sixth"
                    className="w-[183.5px] h-[116px] object-fit rounded-[12px]"
                  />
                </div>
                <img
                  src="/assets/third.png"
                  alt="third"
                  className="w-[183.5px] h-full object-fit rounded-[12px]"
                />
              </div>
              <div className="w-full h-[240px] flex gap-[8px]">
                <img
                  src="/assets/seventh.png"
                  alt="seventh"
                  className="w-[183.5px] h-full object-fit rounded-[12px]"
                />
                <img
                  src="/assets/fifth.png"
                  alt="fifth"
                  className="w-[183.5px] h-full object-fit rounded-[12px]"
                />
              </div>
              <div className="w-full h-[240px] flex gap-[8px]">
                <img
                  src="/assets/eighth.png"
                  alt="eighth"
                  className="w-[183.5px] h-full object-fit rounded-[12px]"
                />
                <div className="w-[183.5px] h-[240px] flex flex-col gap-[8px] rounded-[8px]">
                  <img
                    src="/assets/tenth.png"
                    alt="tenth"
                    className="w-[183.5px] h-[116px] object-fit rounded-[12px]"
                  />
                  <img
                    src="/assets/eleventh.png"
                    alt="eleventh"
                    className="w-[183.5px] h-[116px] object-fit rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacesSection;
