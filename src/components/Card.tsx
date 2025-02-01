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
  }, [GradientText]); // Runs when GradientText changes

  const gradientClass =
    GradientText === "AirVault Pro"
      ? "bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF]"
      : "bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB]";

  return (
    <div className="w-[568px] h-[640px] rounded-[48px] bg-[#FFFFFF] p-[60px] flex flex-col gap-[24px] relative">
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
      <p
        className={clsx(
          "font-medium text-[22px] leading-[30px] text-[#64667A]",
          Text === "AirVaultGo" ? "w-[285px] h-[150px]" : "w-[448px] h-[90px]"
        )}
      >
        {PlainText2}{" "}
        <span className="text-[#31323D] font-bold">{BoldText2}</span>{" "}
        {PlainText3}
      </p>

      <button className="w-[188px] h-[49px] px-5 py-3 mt-[30px] rounded-[67px] border border-black text-[#31323D] text-[18px] font-semibold leading-[24.59px] text-center">
        Try AirVault Now
      </button>

      {/* Conditionally render images based on state */}
      {Text === "AirVaultCloud" && (
        <img
          src="/assets/AirVaultCloud.png"
          alt="AirVaultCloud"
          width={234}
          height={480}
          className="absolute top-[323px] left-[335px] rounded-br-[48px]"
        />
      )}
      {Text === "AirVaultGo" && (
        <img
          src="/assets/AirVaultGo.png"
          alt="AirVaultGo"
          width={313}
          height={358}
          className="absolute top-[160px] left-[256px]"
        />
      )}
    </div>
  );
};

export default Card;
