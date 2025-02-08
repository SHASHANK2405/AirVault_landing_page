import React from "react";
import Card from "./Card";

const LastSection = () => {
  return (
    <div className="max-w-[1152px] w-full flex sm:flex-col flex-col gap-[48px] items-center mx-auto mb-20">
      <p className="max-w-[836px] w-full font-medium sm:text-[32px] text-[22px] sm:leading-[44px] leading-[30px] text-center text-[#31323D]">
        Explore our wide selection of products that help you preserve your
        memories, in your own style.
      </p>
      <div className="w-full flex flex-col gap-4 items-center ">
        <div className="w-full flex md:flex-row flex-col gap-4 justify-center ">
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
        <div className=" max-w-[1152px] w-full rounded-[48px] bg-[#FFFFFF] flex md:flex-row flex-col">
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
          <div className="max-w-[717px] w-full sm:rounded-br-[48px] rounded-0 my-auto">
            <img src="/assets/AirVaultPro.png" alt="AirVaultPro" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
