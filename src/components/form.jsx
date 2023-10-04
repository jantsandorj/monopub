import React from "react";

const ContactForm = () => {
  return (
    <div className="border border-[#aaaaaa] rounded-[10px] w-full">
      <form className="mx-[35px] mt-[47px] flex flex-col gap-[15px]">
        <div className="bg-[#f7f7f7] h-[73px] rounded-[10px] flex items-center px-[34px]">
          <label
            htmlFor="name"
            className="ps-[4px] w-[97px] text-base text-[#393939] font-preten"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            className="w-[292px] h-[45px] rounded-[10px] ps-[15px] placeholder-[#d3d3d3] text-sm font-preten focus:outline outline-offset-2 outline-1"
            placeholder="연락처를 입력하세요."
            required
          />
        </div>
        <div className="bg-[#f7f7f7] h-[73px] rounded-[10px] flex items-center px-[34px]">
          <label
            htmlFor="contact"
            className="ps-[4px] w-[97px] text-base text-[#393939] font-preten"
          >
            연락처
          </label>
          <input
            type="text"
            id="contact"
            className="w-[292px] h-[45px] rounded-[10px] ps-[15px] placeholder-[#d3d3d3] text-sm font-preten focus:outline outline-offset-2 outline-1"
            placeholder="연락처를 입력하세요."
            required
          />
        </div>
        <div className="bg-[#f7f7f7] h-[73px] rounded-[10px] flex items-center px-[34px]">
          <label
            htmlFor="email"
            className="ps-[4px] w-[97px] text-base text-[#393939] font-preten"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="w-[292px] h-[45px] rounded-[10px] ps-[15px] placeholder-[#d3d3d3] text-sm font-preten focus:outline outline-offset-2 outline-1"
            placeholder="이메일 주소를 입력하세요."
            required
          />
        </div>
        <div className="bg-[#f7f7f7] h-[73px] rounded-[10px] flex items-center px-[34px]">
          <label
            htmlFor="inquiry"
            className="ps-[4px] w-[97px] text-base text-[#393939] font-preten"
          >
            문의종류
          </label>
          <select
            id="inquiry"
            className=" w-[292px] h-[45px] rounded-[10px] ps-[15px] text-sm font-preten focus:outline outline-offset-2 outline-1 "
            required
          >
            <option value={""} hidden>
              선택
            </option>
            <option value="의뢰 문의">의뢰 문의</option>
            <option value="유지보수 문의">유지보수 문의</option>
            <option value="기타 문의">기타 문의</option>
          </select>
        </div>
        <div className="bg-[#f7f7f7] h-[73px] rounded-[10px] flex items-center px-[34px]">
          <label
            htmlFor="title"
            className="ps-[4px] w-[97px] text-base text-[#393939] font-preten"
          >
            제목
          </label>
          <input
            type="text"
            id="title"
            className="w-[935px] h-[45px] rounded-[10px] ps-[15px] placeholder-[#d3d3d3] text-sm font-preten focus:outline outline-offset-2 outline-1"
            placeholder="제목을 입력하세요."
            required
          />
        </div>
        <div className="bg-[#f7f7f7] rounded-[10px] flex items-center px-[34px]">
          <label
            htmlFor="detail"
            className="ps-[4px] w-[97px] text-base text-[#393939] font-preten"
          >
            내용
          </label>
          <input
            type="text"
            id="detail"
            className="w-[935px] h-[215px] rounded-[10px] ps-[15px] my-[15.5px] placeholder-[#d3d3d3] text-sm font-preten focus:outline outline-offset-2 outline-1"
            placeholder="내용을 입력하세요."
            required
          />
        </div>
        <div className="bg-[#f7f7f7] rounded-[10px] flex items-center px-[34px] mt-[5px] h-[73px]">
          <p className="ps-[4px] w-[97px] text-base text-[#393939] font-preten">
            첨부파일
          </p>
          <input
            type="file"
            id="file"
            className="w-[292px] h-[45px] rounded-[10px] ps-[15px] text-sm font-preten focus:outline outline-offset-2 outline-1 border-0 bg-[#ffffff]"
            required
          />
          <label
            htmlFor="file"
            className="ms-[16px] w-[127px] h-[45px] text-sm text-[#393939] font-preten border-[5px] border-[#ffffff] flex items-center justify-center active:scale-95"
          >
            찾아보기
          </label>
        </div>
        <div className="flex justify-center gap-x-[15px] mb-[31px]">
          <button className="w-[134px] h-[48px] inline-flex items-center justify-center bg-[#F6624F] rounded-[12px] active:scale-95 before:ease relative overflow-hidden shadow-md transition-all before:absolute before:right-[-100%] before:top-0 before:h-full before:w-6 before:translate-x-0 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-button hover:before:-translate-x-96">
            <span className="text-sm font-medium text-white">등록</span>
          </button>
          <button className="w-[134px] h-[48px] inline-flex items-center justify-center bg-[#B6B6B6] rounded-[12px] active:scale-95 before:ease relative overflow-hidden shadow-md transition-all before:absolute before:right-[-100%] before:top-0 before:h-full before:w-6 before:translate-x-0 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-button hover:before:-translate-x-96">
            <span className="text-sm font-medium text-[#F4F4F5]">취소</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
