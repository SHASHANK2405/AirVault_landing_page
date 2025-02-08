import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface CardProps {
  GradientText: string;
  PlainText: string;
  BoldText: string;
  PlainText2: string;
  BoldText2: string;
  PlainText3: string;
  Text: string;
}

const Card: React.FC<CardProps> = ({
  GradientText,
  PlainText,
  BoldText,
  PlainText2,
  BoldText2,
  PlainText3,
  Text,
}) => {
  const [isAirVaultGo, setIsAirVaultGo] = useState(false);
  const [isAirVaultCloud, setIsAirVaultCloud] = useState(false);

  useEffect(() => {
    setIsAirVaultGo(GradientText === "AirVaultGo");
    setIsAirVaultCloud(GradientText === "AirVaultCloud");
  }, [GradientText]);

  const gradientClass =
    GradientText === "AirVault Pro"
      ? "bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF]"
      : "bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB]";

  return (
    <div className="max-w-[568px] w-full rounded-[48px] bg-[#FFFFFF] sm:p-[60px] p-[24px] flex flex-col gap-[24px] relative overflow-hidden pb-[120px] sm:pb-[80px]">
      <p className="w-full text-left sm:text-[40px] text-[36px] sm:leading-[55px] leading-[50px] font-medium text-[#58585C]">
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

      <p
        className={clsx(
          "font-medium sm:text-[22px] text-[18px] sm:leading-[30px] leading-[24px] text-[#64667A]",
          Text === "AirVaultGo"
            ? "max-w-[285px] w-[198px] md:w-full"
            : "max-w-[448px] w-full"
        )}
      >
        {PlainText2}{" "}
        <span className="text-[#31323D] font-bold">{BoldText2}</span>{" "}
        {PlainText3}
      </p>

      <button className="w-[188px] h-[49px] px-5 py-3 mt-[30px] rounded-[67px] border border-black text-[#31323D] text-[18px] font-semibold leading-[24.59px] text-center">
        Try AirVault Now
      </button>

      {/* Image with absolute positioning, bottom and right aligned */}
      {(Text === "AirVaultCloud" || Text === "AirVaultGo") && (
        <div
          className={clsx(
            "absolute sm:w-auto sm:h-auto",
            Text === "AirVaultCloud"
              ? "bottom-[-15px] right-0 sm:bottom-[-30px] sm:right-[20px]" // Positioning for AirVaultCloud
              : "bottom-[30px] right-0 sm:bottom-[10px] sm:right-[40px]" // Positioning for AirVaultGo
          )}
        >
          {Text === "AirVaultCloud" && (
            <img
              src="/assets/AirVaultCloud.png"
              alt="AirVaultCloud"
              className="object-contain w-full h-full sm:rounded-br-[48px]"
            />
          )}
          {Text === "AirVaultGo" && (
            <img
              src="/assets/AirVaultGo.png"
              alt="AirVaultGo"
              className="object-contain w-full h-full"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
