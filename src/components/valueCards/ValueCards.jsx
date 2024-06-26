import Jump from "/valueImg/Jump.jpeg"
import Room from "/valueImg/Room.jpeg"
import { ReadMore } from "./ReadMore"
import { ValueHeader } from "./ValueHeader"
import { ValueImg } from "./ValueImg"
import { MiddleReadMore } from "./MiddleReadMore"
import middleTraining from "/valueImg/middleTraining.png"
import smallTraining from "/valueImg/smallTraining.png"

export const ValueCards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-1 pt-3 md:gap-y-[47px] md:pt-6 lg:gap-y-5 lg:pt-[144px]">
      <h4 className="text-white text-xl md:text-xl lg:text-3xl ">
        <span className="hidden md:inline lg:inline">
          Why you should train with us!
        </span>
        <span className="inline md:hidden lg:hidden">Why train with us?</span>
      </h4>
      <div className="flex w-full items-center justify-center border-b-[4px] border-pink bg-pink bg-opacity-25 h-[361px] flex-col gap-[30px] gap-y-1 px-[24px] pb-[30px] pt-[20px] md:h-[244px] md:w-full md:flex-row md:gap-y-1 md:px-[33px] md:py-[17px] lg:h-[501px] lg:gap-y-5 lg:px-[113px] lg:py-[45px]">
        <ValueImg image={Room} alt={"a gym room"} />
        <div className="flex flex-col gap-y-[8px] md:gap-y-1 lg:gap-y-[24px]">
          <ValueHeader
            valueHeaderSmall={"New dance hall"}
            valueHeaderBig={"New building catered to dance!"}
          />
          <p className="sm:text-7xl text-wrap md:text-base lg:text-5xl">
            Newly build Zumba dance gym with big halls and luxurious changing
            rooms.
          </p>
          <p className="text-white hidden md:hidden lg:inline lg:text-5xl">
            We have made sure that our premises will ispire you to keep moving
            and explore all of the activities we offer.
          </p>
          <p className="text-white hidden md:hidden lg:inline lg:text-5xl">
            <span className="font-bold">
              Relax after your class in the sauna!
            </span><br/>
            Our main changing rooms each have a sauna connected to the showers.
          </p>
          <ReadMore />
          </div>
      </div>

      <div className="flex w-full items-center justify-center border-b-[4px] border-pink bg-pink bg-opacity-25 h-[361px] sm:flex-col gap-[30px] gap-y-1 px-[24px] pb-[30px] pt-[20px] md:h-[244px] md:w-full md:flex-row-reverse md:gap-y-1 md:px-[33px] md:py-[17px] lg:h-[501px] lg:gap-y-5 lg:px-[113px] lg:py-[45px]">
        <img src={middleTraining} alt="a woman is training" className="rounded-[10px] h-[143px] w-[312px] md:h-[210px] md:w-[245px] lg:h-[411px] lg:w-[481px] md:inline sm:hidden " />
        <img src={smallTraining} alt = "a woman is training" className="rounded-[10px] h-[143px] w-[312px] lg:hidden md:hidden inline" />
        <div className="flex flex-col gap-y-[8px] md:gap-y-1 lg:gap-y-[24px]">
          <ValueHeader
            valueHeaderSmall={"Certified instructors"}
            valueHeaderBig={"Licensed Zumba instructors"}
          />
          <p className="text-7xl text-wrap md:text-base lg:text-5xl">
            Our instructors will make sure your workout sessions are fun,
            challenging and at your level!
          </p>
          <p className="text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            We make sure that all of our Zumba instructors have the license to
            teach Zumba classes.
          </p>
          <p className="text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            They also get time of every six months to renew their license and
            vreat new and exiting classes for our members
          </p>
          <MiddleReadMore />
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-b-[4px] border-pink bg-pink bg-opacity-25 h-[361px] flex-col gap-[30px] gap-y-1 px-[24px] pb-[30px] pt-[20px] md:h-[244px] md:flex-row md:gap-y-1 md:px-[33px] md:py-[17px] lg:h-[501px] lg:gap-y-5 lg:px-[113px] lg:py-[45px]  ">
        <ValueImg image={Jump} alt={"jumping"} />
        <div className="flex flex-col gap-y-[8px] md:gap-y-1 lg:gap-y-[24px]">
          <ValueHeader
            valueHeaderBig={"Changing classes"}
            valueHeaderSmall={"Changing classes"}
          />
          <p className="text-7xl sm:text-wrap lg:text-5xl">
            Change your type of class whenever you want
            <span className="lg:font-bold">-free of charge!</span>
          </p>
          <p className="text-7px text-wrap sm:hidden md:hidden lg:inline lg:text-5xl">
            We want our members to feel free in their class choices, since we
            never know how och when life will throw us a vurve ball.
          </p>
          <p className=" text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            Instead of not exercising, we want our members to be able to find a
            new slot in their life for some Zumba dance.
          </p>
          <ReadMore />
        </div>
      </div>
    </div>
  );
};