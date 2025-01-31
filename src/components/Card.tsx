import React from "react";
import clsx from "clsx";

interface CardProps {
  GradientText: string;
  PlainText: string;
  BoldText: string;
  PlainText2: string;
  BoldText2: string;
  PlainText3: string;
}

const Card: React.FC<CardProps> = ({
  GradientText,
  PlainText,
  BoldText,
  PlainText2,
  BoldText2,
  PlainText3,
}) => {
  const gradientClass =
    GradientText === "AirVault Pro"
      ? "bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF]"
      : "bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB]";

  return (
    <div className="w-[568px] h-[640px] rounded-[48px] bg-[#FFFFFF] p-[60px] flex flex-col gap-[24px]">
      <p className="w-[448px] h-[165px] text-left text-[40px] leading-[55px] font-medium text-[#58585C]">
        <span
          className={clsx(
            gradientClass,
            "text-transparent bg-clip-text font-extrabold"
          )}
        >
          {GradientText}
        </span>{" "}
        {PlainText}{" "}
        <span className="text-[#31323D] font-extrabold">{BoldText}</span>
      </p>
      <p className="w-[448px] h-[90px] font-medium text-[22px] leading-[30px] text-[#64667A]">
        {PlainText2}{" "}
        <span className="text-[#31323D] font-bold">{BoldText2}</span>{" "}
        {PlainText3}
      </p>
      <button className="w-[188px] h-[49px] px-6 py-3 mt-[30px] rounded-[67px] border border-black text-[#31323D] font-manrope text-[18px] font-semibold leading-[24.59px] text-center">
        Try AirVault Now
      </button>
    </div>
  );
};

export default Card;
