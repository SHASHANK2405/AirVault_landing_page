import React from "react";
import Card from "./Card";

const LastSection = () => {
  return (
    <div className="w-[1152px] h-[1432px] flex flex-col gap-[48px] items-center mx-auto">
      <p className="w-[836px] h-[88px] font-medium text-[32px] leading-[44px] text-center text-[#31323D]">
        Explore our wide selection of products that help you preserve your
        memories, in your own style.
      </p>
      <div className="w-full h-[1296px] flex flex-col gap-4 items-center">
        <div className="w-fit h-[640px] flex gap-4 justify-center">
          <Card
            GradientText={"AirVault Cloud"}
            PlainText={"is built for people who like to keep it"}
            BoldText={"simple."}
            PlainText2={
              "AirVault Cloud lets you pack light on your trips so you can"
            }
            BoldText2={"explore the world with just your phone"}
            PlainText3={""}
            Text={"AirVaultCloud"}
          />
          <Card
            GradientText={"AirVault Go"}
            PlainText={"is built for people who like to keep it"}
            BoldText={"close."}
            PlainText2={"AirVault Go lets you"}
            BoldText2={"keep all your memories in your pocket,"}
            PlainText3={
              "so you can take them with you even on the craziest of adventures."
            }
            Text={"AirVaultGo"}
          />
        </div>
        <div className="relative w-[1152px] h-[640px] rounded-[48px] bg-[#FFFFFF] flex">
          <Card
            GradientText={"AirVault Pro"}
            PlainText={"is built for people who are hungry for"}
            BoldText={"power."}
            PlainText2={
              "AirVault Pro lets your team work on all, so you can take them with you even on the craziest of adventures."
            }
            BoldText2={""}
            PlainText3={""}
            Text={""}
          />
          <img
            src="/assets/AirVaultPro.png"
            alt="AirVaultPro"
            width={717}
            height={550}
            className="absolute right-0 top-14"
          />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
