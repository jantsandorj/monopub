import React from "react";
import { lazy } from "react";
import Loadable from "./Loadable";
import pic1 from "../image/61b344e7c9c2513005ab3f00248e3faa.png";
const CarouselCom = Loadable(lazy(() => import("../components/carousel")));

const main = () => {
  return (
    <div>
      <section className="h-screen">
        <CarouselCom />
      </section>
      <section className="h-screen">
        <div className="flex flex-col gap-[102px] container justify-center h-full relative border">
          <img
            src={pic1}
            alt="bg"
            className="absolute scale-x-[-1] w-[760px] aspect-square h-auto z-[-1] left-[-400px]"
          />
          <p className="font-bold text-6xl text-center text-[black]">
            퍼블리싱 전문 업체 - 디자인을 현실로
          </p>
          <p className="text-4xl text-center text-[red] font-medium">
            디자인을 현실로 만들어내는 전문 퍼블리셔 팀입니다. 창의적인 디자인을
            <br />
            완벽하게 웹에 구현하고, 최고의 사용자 경험을 제공합니다. 프로젝트를
            <br />
            성공으로 이끌어드립니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default main;
