import React from "react";
import { lazy } from "react";
import Loadable from "./Loadable";
import pic1 from "../image/61b344e7c9c2513005ab3f00248e3faa.png";
import pic2 from "../image/e9cd64066aa90cc81a75d3716d453a60.png";
import pic3 from "../image/811b1fbb987207ad0b0c01167fe3b4b9.png";
import pic4 from "../image/Frame 50.png";
import pic5 from "../image/86bea11d7b45101d1685154a6218463f.png";
import pic6 from "../image/8d8b2b498de6fc99855946e3ffd03d83.png";
import pic7 from "../image/Frame 48.png";
import pic8 from "../image/8d0b3da488e360fcb93103240156f714.png";
import pic9 from "../image/0dadda15819562ae90af3be3b9daefba.png";
import { Briefcase, Refresh, Correct } from "../components/svg/briefcase";

const CarouselCom = Loadable(
  lazy(() => import("../components/carouselBanner"))
);
const CarouselComment = Loadable(
  lazy(() => import("../components/carouselComment"))
);
const ContactForm = Loadable(lazy(() => import("../components/form")));
const Bglogo = Loadable(lazy(() => import("../components/bglogo")));

const Main = () => {
  return (
    <div className="main relative">
      <section className="h-screen bg-black">
        <CarouselCom />
      </section>
      <section className="h-screen" id="motionStart">
        <div className="flex flex-col gap-[102px] cont justify-center h-full relative">
          <img
            src={pic1}
            alt="bg"
            className="absolute w-[760px] aspect-square h-auto z-[1] left-[-400px] bouncer"
          />

          <p className="font-normal text-6xl text-center text-[black] font-title fade-in-left">
            아이티 코더를 선택해야 하는 이유
          </p>
          <div>
            <p className="grayTxt text-up">
              디자인을 현실로 만들어내는 전문 퍼블리셔 팀입니다.
            </p>
            <p className="grayTxt text-up">
              창의적인 디자인을완벽하게 웹에 구현하고, 최고의 사용자 경험을
              제공합니다.
            </p>
            <p className="grayTxt text-up">
              프로젝트를 성공으로 이끌어드립니다.
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen relative overflow-hidden">
        <div className="cont mx-auto flex flex-col justify-center gap-[96px] h-full">
          <h2 className="text-6xl text-center text-[#393939] font-title fade-in-left">
            아이티 코더를 만나보세요!
          </h2>
          <img
            src={pic2}
            alt="robot"
            className="w-[977px] aspect-square h-auto absolute top-0 bottom-0 right-[-248px] fade-right"
          />
          <div className="flex justify-around">
            <div className="rounded-[60px] w-[350px] h-[570px] relative shadow-card fade-left card">
              <p className="text-[#393939] duration-500 text-2xl font-normal ms-[26px] mt-[92px] mb-[8px] leading-[29px]">
                총 계약된 프로젝트
              </p>
              <p className="text-[#393939] duration-500 text-4xl font-bold ms-[26px] leading-[48px]">
                1
                <span className="text-[#393939] duration-500 text-2xl font-medium ">
                  건
                </span>
              </p>
              <Briefcase />
            </div>
            <div className="rounded-[60px] w-[350px] h-[570px] relative shadow-card fade-left card">
              <p className="text-[#393939] duration-500 text-2xl font-normal ms-[26px] mt-[92px] mb-[8px] leading-[29px]">
                총 계약된 프로젝트
              </p>
              <p className="text-[#393939] duration-500 text-4xl font-bold ms-[26px] leading-[48px]">
                1
                <span className="text-[#393939] duration-500 text-2xl font-medium ">
                  건
                </span>
              </p>
              <Refresh />
            </div>
            <div className="rounded-[60px] w-[350px] h-[570px] relative shadow-card fade-left card">
              <p className="text-[#393939] duration-500 text-2xl font-normal ms-[26px] mt-[92px] mb-[8px] leading-[29px]">
                총 계약된 프로젝트
              </p>
              <p className="text-[#393939] duration-500 text-4xl font-bold ms-[26px] leading-[48px]">
                1
                <span className="text-[#393939] duration-500 text-2xl font-medium ">
                  건
                </span>
              </p>
              <Correct />
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="flex flex-col gap-[102px] cont justify-center h-full relative">
          <img
            src={pic3}
            alt="bg"
            className="absolute w-[760px] aspect-square h-auto z-[-1] left-0 right-0 mx-auto bouncer"
          />
          <p className="font-normal text-6xl text-center text-[black] font-title fade-in-left">
            퍼블리싱 전문 업체 - 디자인을 현실로
          </p>
          <div>
            <p className="grayTxt text-up">
              우리는 기술, 품질, 그리고 혁신을 통한 서비스 제공에 자부심을
              가집니다.
            </p>
            <p className="grayTxt text-up">
              고객 중심의 접근 방식으로 당신의 프로젝트를 향상시키고 결과를
              극대화합니다.
            </p>
            <br />
            <p className="grayTxt text-up">
              우리와 함께하면 고품질 웹 퍼블리싱, 뛰어난 웹 접근성, 검색 엔진
              최적화,그리고 놀라운 사용자 경험을 얻게 됩니다.
            </p>
            <p className="grayTxt text-up">
              프로젝트 성공을 위한 우리의 전문 지식을 경험하세요.
            </p>
          </div>
        </div>
      </section>
      <section className="h-[1080px] relative">
        <div className="flex flex-col justify-center gap-[72px] h-full">
          <div className="relative cont w-full">
            <div className="service cont rounded-[10px] h-[301px] mx-auto px-[63px] py-[60px] w-full relative z-10 fade-left">
              <h2 className="text-[#393939] text-[32px] font-bold leading-[38px]">
                서비스 소개
              </h2>
              <p className="text-[#393939] text-base leading-normal font-normal py-[30px]">
                누적 거래 402만 건! 700여 개의 카테고리와 6만여 개 서비스에서
                <br /> 필요한 모든 전문가를 만나보세요.
              </p>
              <div className="btn_wrap flex gap-5">
                <button className="btn w-[155px] h-[40px] active:scale-95 before:ease relative overflow-hidden shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-full before:translate-x-24 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-button hover:before:-translate-x-40">
                  <span className="font-normal text-sm leading-normal text-[#393939] py-3">
                    자세히 보기
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M0.999895 10.4852C0.802145 10.4852 0.608847 10.4265 0.444437 10.3167C0.280027 10.2068 0.151887 10.0506 0.0762167 9.8679C0.000546657 9.6852 -0.0192557 9.48417 0.0193119 9.29022C0.0578795 9.09626 0.153086 8.9181 0.292895 8.77825L3.82798 5.24257L0.292865 1.70693C0.105347 1.51941 9.37688e-07 1.26509 0 0.999898C-9.37676e-07 0.73471 0.105344 0.480382 0.29286 0.292865C0.480376 0.105347 0.734703 9.37688e-07 0.999891 0C1.26508 -9.37676e-07 1.51941 0.105344 1.70693 0.29286L5.94911 4.53557C6.04199 4.6284 6.11567 4.73862 6.16594 4.85994C6.21621 4.98125 6.24208 5.11128 6.24208 5.2426C6.24208 5.37392 6.21621 5.50395 6.16594 5.62526C6.11567 5.74658 6.04199 5.8568 5.94911 5.94963L1.70693 10.1923C1.61419 10.2853 1.50398 10.3591 1.38264 10.4093C1.26131 10.4596 1.13123 10.4854 0.999895 10.4852Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button className="btn w-[155px] h-[40px] active:scale-95 before:ease relative overflow-hidden shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-button hover:before:-translate-x-40">
                  <span className="font-normal text-sm leading-normal text-[#393939] py-3">
                    퍼블리싱 의뢰
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                  >
                    <path
                      d="M0.999895 10.4852C0.802145 10.4852 0.608847 10.4265 0.444437 10.3167C0.280027 10.2068 0.151887 10.0506 0.0762167 9.8679C0.000546657 9.6852 -0.0192557 9.48417 0.0193119 9.29022C0.0578795 9.09626 0.153086 8.9181 0.292895 8.77825L3.82798 5.24257L0.292865 1.70693C0.105347 1.51941 9.37688e-07 1.26509 0 0.999898C-9.37676e-07 0.73471 0.105344 0.480382 0.29286 0.292865C0.480376 0.105347 0.734703 9.37688e-07 0.999891 0C1.26508 -9.37676e-07 1.51941 0.105344 1.70693 0.29286L5.94911 4.53557C6.04199 4.6284 6.11567 4.73862 6.16594 4.85994C6.21621 4.98125 6.24208 5.11128 6.24208 5.2426C6.24208 5.37392 6.21621 5.50395 6.16594 5.62526C6.11567 5.74658 6.04199 5.8568 5.94911 5.94963L1.70693 10.1923C1.61419 10.2853 1.50398 10.3591 1.38264 10.4093C1.26131 10.4596 1.13123 10.4854 0.999895 10.4852Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <img
              src={pic5}
              alt="bg"
              className="absolute w-[450px] aspect-square h-auto bottom-0 right-[91px] z-[11] fade-right"
            />
          </div>
          <div className="bg-[#eeeeee] relative overflow-hidden">
            <img
              src={pic6}
              alt="bg"
              className="absolute w-[645px] aspect-square h-auto left-[-80px] top-[-80px] iframeImg"
            />
            <div className="cont flex my-[40px] justify-between z-10 relative fade-right">
              <div className="flex flex-col justify-center gap-[42px]">
                <h2 className="text-[#393939] text-[32px] font-semibold leading-normal">
                  우리의 서비스를 만나보세요
                </h2>
                <p className="text-[#393939] text-base font-normal leading-normal">
                  저렴하고 빠른 웹 퍼블리싱... <br />
                  우리는 웹 퍼블리싱 분야에서 가장 저렴하고 빠른 작업을
                  제공합니다.
                  <br />
                  고품질 웹사이트를 원하시나요? 우리와 함께하세요!
                </p>
              </div>
              <div className="w-[700px] aspect-[700/400] h-auto relative overflow-hidden pointer-events-none flex justify-center">
                <div className="absolute h-[130%] w-full my-auto top-[-15%]">
                  <iframe
                    src="https://www.youtube.com/embed/_AoXPB55G0o?autoplay=1&rel=0&controls=0&mute=1"
                    title="video"
                    className="object-cover absolute h-full aspect-video m-auto w-full left-0 right-0 top-0 bottom-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={pic4}
          alt="bg"
          className="absolute top-0 aspect-[1708/490] w-[89%] h-auto z-[-1] mx-auto left-0 right-0"
        />
      </section>
      <section className="h-[1080px] relative" id="comment">
        <img
          src={pic7}
          alt="bg"
          className="absolute w-[1540px] h-[686px] z-[-1] left-0 right-0 mx-auto top-[70px]"
        />
        <div className="cont flex flex-col gap-[70px] justify-center h-full">
          <div className="flex flex-col gap-[102px] cont justify-center relative">
            <p className="font-normal text-6xl text-center text-[black] font-title fade-in-left">
              우리와 함께한 프로젝트의 성공 사례
            </p>
            <div>
              <p className="grayTxt text-up">
                우리는 다양한 프로젝트에서 뛰어난 성과를 이뤘습니다.
              </p>
              <p className="grayTxt text-up">
                저희와 함께한 클라이언트들은 웹사이트 퍼블리싱의 높은 수준과
                결과에 감명을 받았습니다.{" "}
              </p>
              <p className="grayTxt text-up">몇몇 사례는 다음과 같습니다.</p>
            </div>
          </div>
          <CarouselComment />
        </div>
      </section>
      <section className="h-[1080px] bg-move" id="bg-move">
        <div className="wrap flex flex-col justify-center gap-[88px] relative h-full ">
          <div className="cont relative w-full">
            <img
              src={pic9}
              alt="bg"
              className="absolute top-[-135%] right-[-3%] w-[347px] aspect-square h-auto z-[-1] rocket"
            />
            <h2 className="text-[#393939] font-title leading-normal text-[40px] text-center fade-in-left">
              현재와 과거를
              <span className="text-[#393939] font-title text-6xl">
                아이티코더와
              </span>
              협업을 통해 함께 성장한
            </h2>
            <h3 className="text-[#bbbbbb] font-title leading-normal text-[40px] text-center fade-in-left">
              <span className="text-[#bbbbbb] font-title text-6xl">
                파트너사
              </span>{" "}
              들에게 진심으로 감사드립니다.
            </h3>
            <img
              src={pic8}
              alt="bg"
              className="absolute top-[150%] left-0 w-[614px] aspect-square h-auto z-[-1]"
            />
          </div>
          <Bglogo />
        </div>
      </section>
      <section className="h-screen">
        <div className="cont h-full flex flex-col justify-center">
          <h2 className="text-[#393939] font-title text-[40px] text-center mb-[68px] fade-in-left">
            빠르게{" "}
            <span className="text-[#393939] font-title text-[64px] leading-normal">
              새로운 소식{" "}
            </span>{" "}
            을 전합니다!
          </h2>
          <table>
            <tbody className="border-t border-[#393939]">
              <tr className="h-[120px] news">
                <td className="text-[#F6624F] font-preten text-[20px] w-[12%] text-center">
                  공지사항
                </td>
                <td className="text-[#393939] font-semibold font-preten text-[24px] w-[74.3%] text-left ps-[30px]">
                  넉넉한 마음으로 풍성한 한가위 보내시길 바랍니다!
                </td>
                <td className="text-[#393939] font-normal font-preten text-[20px] w-[13.7%] text-center">
                  2023.09.28
                </td>
              </tr>
              <tr className="h-[120px] news">
                <td className="text-[#328CFF] font-preten text-[20px] w-[12%] text-center">
                  뉴스
                </td>
                <td className="text-[#393939] font-semibold font-preten text-[24px] w-[74.3%] text-left ps-[30px]">
                  넉넉한 마음으로 풍성한 한가위 보내시길 바랍니다!
                </td>
                <td className="text-[#393939] font-normal font-preten text-[20px] w-[13.7%] text-center">
                  2023.09.28
                </td>
              </tr>
              <tr className="h-[120px] news">
                <td className="text-[#328CFF] font-preten text-[20px] w-[12%] text-center">
                  뉴스
                </td>
                <td className="text-[#393939] font-semibold font-preten text-[24px] w-[74.3%] text-left ps-[30px]">
                  넉넉한 마음으로 풍성한 한가위 보내시길 바랍니다!
                </td>
                <td className="text-[#393939] font-normal font-preten text-[20px] w-[13.7%] text-center">
                  2023.09.28
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-[53px]">
            <p className="grayTxt text-up">
              우리의 공지사항 게시판은 항상 최신 소식과 유용한 정보로 가득 차
              있습니다.{" "}
            </p>
            <p className="grayTxt text-up">
              언제든지 최신 업데이트를 확인하세요!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col cont gap-[30px]">
          <div className="border border-[#aaaaaa] rounded-[10px] w-full">
            <div className="text-anime">
              <h3 className="text-[#393939] text-2xl font-preten font-semibold text-center mb-[21px] mt-[30px]">
                개인정보 수집동의
              </h3>
              <p className="bg-[#f7f7f7] rounded-[10px] mx-[35px] px-[40px] whitespace-pre-wrap h-[250px] py-4 overflow-y-scroll text-[#393939] font-preten text-sm font-semibold leading-normal">
                이용자는 개인정보 수집 및이용에 동의하지 않을 권리가 있습니다.{" "}
                <br />
                동의하지 않으실 경우 익명 신고로 접수되며, 결과 통보가 제한될 수
                있습니다. <br />
                기타 개인정보 처리에 관한 자세한 사항은 홈페이지 하단 개인정보
                처리방침을 참고하시길 바랍니다.
                <br />
                개인정보 수집 이용에 관한 동의 <br />
                회사는 아래와 같은 개인정보를 수집하고 있습니다. <br />- 수집
                항목 : 이름, 이메일, 전화번호, 주소 <br />- 수집 목적 : 신고
                접수, 처리 및 결과 통보 <br />- 개인정보 수집방법 : 이용자가
                홈페이지상에 직접 입력 <br />- 서비스 이용과정이나 사업 처리
                과정에서 자동으로 수집될 수 있는 항목 : 서비스 이용기록,
                접속로그, 쿠키, 접속 IP정보
                <br />
                개인정보의 보유 및 이용기간 <br />
                회사는 수집 이용 목적이 달성된 때에는 고객의 개인정보를 지체없이
                파기합니다. <br />
                다만 상법, 전자상거래등에서의 소비자보호에 관한 법률 등 법령의
                규정에 의하여 보존할 필요성이 있는 경우에는 아래의 예시와 같이
                고객의 개인정보를 보관할 수 있습니다.
                <br />
                관계법령에 의한 보존 사유(예시) 이 경우 회사는 보관하는 정보를
                그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
                <br />
                1) 계약 또는 청약철회 등에 관한 기록 : 5년 <br />
                2) 대금결제 및 재화 등의 공급에 관한 기록 : 5년 <br />
                3) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
              </p>
              <div className="flex justify-center mt-[22px] mb-[18px] items-center slide">
                <span className="text-[#828282] font-preten font-normal text-[20px]">
                  동의하지 않습니다.
                </span>
                <label className="relative inline-flex items-center cursor-pointer mx-[9px] active:scale-95 duration-300 slider-label">
                  <input
                    className="sr-only peer slider"
                    value=""
                    type="checkbox"
                  />
                  <div className="group peer  bg-[#d9d9d9] rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#ffffff]   peer-checked:after:rotate-180 peer-checked:after:[background:#ffffff] after:outline-none after:h-8 after:w-8 after:top-2 after:left-2 peer-checked:after:translate-x-12 peer-checked:bg-[#F6624F] peer-hover:after:scale-110 peer-checked:peer-[text-[#E92927]]"></div>
                </label>
                <span className="text-[#828282] font-preten font-normal text-[20px] sliderSpan">
                  위의 정책에 동의합니다.
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Main;
