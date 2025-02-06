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
    <div className="sm:w-[568px] w-[343px] sm:h-[640px] min-h-[700px] rounded-[48px] bg-[#FFFFFF] sm:p-[60px] p-[24px] flex flex-col gap-[24px] relative overflow-hidden">
      <p className="sm:w-[448px] w-[295px] sm:h-[165px] h-[196px] text-left sm:text-[40px] text-[36px] mt-[40px] sm:leading-[55px] leading-[50px] font-medium text-[#58585C]">
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
            ? "sm:w-[285px] w-[198px] sm:h-[150px] h-[175px]"
            : "sm:w-[448px] w-[295px] sm:h-[90px] h-[75px]"
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
          className="absolute w-[272px] h-[557px] sm:w-[234px] sm:h-[480px] 
                     sm:top-[363px] sm:left-[335px] top-[766px] left-[165px] 
                     sm:translate-x-0 sm:translate-y-0 -translate-x-1/2 -translate-y-1/2 
                     sm:rounded-br-[48px] z-10 "
        />
      )}
      {Text === "AirVaultGo" && (
        <img
          src="/assets/AirVaultGo.png"
          alt="AirVaultGo"
          width={313}
          height={358}
          className="sm:w-[313px] sm:h-[358px] w-[236.6px] h-[339px] absolute sm:top-[160px] sm:left-[256px] top-[340.5px] left-[220px] 
                     sm:translate-x-0 sm:translate-y-0 -translate-x-1/2 -translate-y-1/2 
                     z-10"
        />
      )}
    </div>
  );
};

export default Card;
