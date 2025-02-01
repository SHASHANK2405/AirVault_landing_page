import React from "react";

const ImagesMovesSection = () => {
  return (
    <div className="w-[1152px] h-[720px] flex flex-col mx-auto gap-[16px] mb-[160px]">
      <div className="w-[1152px] h-[206px] flex flex-col items-center p-2 gap-[16px] mx-auto">
        <p className="w-full h-[160px] font-semibold text-[68px] leading-[80px] text-center text-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          Your memories are worth everything!
        </p>
        <p className="w-full h-[30px] font-medium text-[22px] leading-[30px] text-center text-[#3D3D3D]">
          No one understands it better than us
        </p>
      </div>
      <div className="w-[1152px] h-[466px] relative mt-[32px]">
        <img
          src="/assets/image 1.png"
          alt="image 1"
          className="absolute w-[276px] h-[363px] top-[-19.5px] left-[-72.5px] rounded-[48px]"
        />

        <img
          src="/assets/image 2.png"
          alt="image 2"
          className="absolute w-[276px] h-[364px] top-[93.5px] left-[193.5px] rounded-[48px]"
        />

        <img
          src="/assets/image3.png"
          alt="image 3"
          className="absolute w-[276px] h-[364px] top-0 left-[427px] rounded-[48px] rotate-[8.57deg]"
        />

        <img
          src="/assets/image 4.png"
          alt="image 4"
          className="absolute w-[276px] h-[364px] top-[102px] left-[771px] rounded-[48px] rotate-[2.69deg]"
        />

        <img
          src="/assets/image 5.png"
          alt="image 5"
          className="absolute w-[276px] h-[364px] top-[12px] left-[996px] rounded-[48px] rotate-[-2.65deg]"
        />
      </div>
    </div>
  );
};

export default ImagesMovesSection;
