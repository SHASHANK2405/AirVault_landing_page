import React from "react";
import Card from "./Card";

const LastSection = () => {
  return (
    <div className="sm:w-[1152px] w-[343px] sm:h-[1432px] h-[2477px] flex sm:flex-col flex-col gap-[48px] items-center mx-auto mb-20">
      <p className="sm:w-[836px] w-[343px] sm:h-[88px] h-[90px] font-medium sm:text-[32px] text-[22px] sm:leading-[44px] leading-[30px] text-center text-[#31323D]">
        Explore our wide selection of products that help you preserve your
        memories, in your own style.
      </p>
      <div className="w-full sm:h-[1296px] h-[2339px] flex flex-col gap-20 items-center mt-96 sm:mt-0">
        <div className="sm:w-fit w-full h-[640px] flex sm:flex-row flex-col gap-4 justify-center">
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
        <div className="relative sm:w-[1152px] w-[343px] sm:h-[640px] h-[907px] rounded-[48px] bg-[#FFFFFF] flex sm:flex-row flex-col mt-80 sm:mt-0">
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
            className="sm:w-[717px] w-[390px] sm:h-[550px] h-[295px] absolute sm:right-0 right-[24px] sm:top-8 top-[551px] sm:rounded-br-[48px] rounded-0"
          />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
