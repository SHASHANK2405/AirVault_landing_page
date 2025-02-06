import React, { useState, useEffect } from "react";

const ImagesMovesSection = () => {
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
    <div className="sm:w-[1152px] w-[343px] sm:h-[720px] h-[880px] flex flex-col mx-auto gap-[16px] mb-[160px]">
      <div className="sm:w-[1152px] w-[343px] sm:h-[206px] h-[148px] flex flex-col items-center p-2 gap-[16px] mx-auto">
        <p className="w-full sm:h-[160px] h-[100px] font-semibold sm:text-[68px] text-[36px] sm:leading-[80px] leading-[50px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          Your memories are worth everything!
        </p>
        <p className="w-full sm:h-[30px] h-[24px] font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-center text-[#3D3D3D]">
          No one understands it better than us
        </p>
      </div>
      {showMobileSection ? (
        <div className="relative w-[343px] h-[684px] ">
          <img
            src="/assets/image 1.png"
            alt="image 1"
            className="absolute w-[207px] h-[273px] top-[72.6px] left-[-46px] rounded-[36px]"
            style={{ transform: "rotate(-2.78deg)" }}
          />

          <img
            src="/assets/image 2.png"
            alt="image 2"
            className="absolute w-[207px] h-[273px] top-[5px] left-[187px] rounded-[36px]"
          />

          <img
            src="/assets/image3.png"
            alt="image 3"
            className="absolute w-[207px] h-[273px] top-[237px] left-[91.6px] z-8 rounded-[36px] rotate-[8.57deg]"
          />

          <img
            src="/assets/image 4.png"
            alt="image 4"
            className="absolute w-[207px] h-[273px] top-[406.7px] left-[-101px] rounded-[36px] z-10"
            style={{ transform: "rotate(-2.69deg)" }}
          />

          <img
            src="/assets/image 5.png"
            alt="image 5"
            className="absolute w-[207px] h-[273px] top-[385px] left-[213.6px] rounded-[36px]"
            style={{ transform: "rotate(2.65deg)" }}
          />
        </div>
      ) : (
        <div className="w-[1152px] h-[466px] relative mt-[32px]">
          <img
            src="/assets/image 1.png"
            alt="image 1"
            className="absolute w-[276px] h-[363px] top-[-28.5px] left-[-119.5px] rounded-[48px]"
            style={{ transform: "rotate(-2.78deg)" }}
          />

          <img
            src="/assets/image 2.png"
            alt="image 2"
            className="absolute w-[276px] h-[364px] top-[93.5px] left-[193.5px] rounded-[48px]"
          />

          <img
            src="/assets/image3.png"
            alt="image 3"
            className="absolute w-[276px] h-[364px] top-0 left-[467px] rounded-[48px] rotate-[8.57deg]"
          />

          <img
            src="/assets/image 4.png"
            alt="image 4"
            className="absolute w-[276px] h-[364px] top-[102px] left-[771px] rounded-[48px] z-10"
            style={{ transform: "rotate(-2.69deg)" }}
          />

          <img
            src="/assets/image 5.png"
            alt="image 5"
            className="absolute w-[276px] h-[364px] top-[12px] left-[996px] rounded-[48px]"
            style={{ transform: "rotate(2.65deg)" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImagesMovesSection;
