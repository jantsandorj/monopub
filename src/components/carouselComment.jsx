import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import carousel1 from "../image/ann1.png";
import carousel2 from "../image/ann2.png";
function ItemCom({ item }) {
  return (
    <Grid
      component={"div"}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "375px",
      }}
      className="cont"
    >
      <Grid
        item
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
        width={"55%"}
        gap={5}
        className="xs:items-center xs:justify-start md:items-start md:justify-center px-[25px] lg:px-0 z-[10] pt-[25px] md:pt-0 overflow-hidden"
      >
        <p className="text-base font-medium text-[#000000] text-right w-full">
          {item.maintext}
        </p>
        <h3 className="text-2xl font-medium text-[#000000] text-right w-full">
          {item.subtext}
        </h3>
      </Grid>
      <picture className="w-[40%] h-full bottom-0 border-b border-[#000000]">
        <source srcSet={item.image} media="(max-width: 600px)" />
        <source srcSet={item.image} media="(min-width: 601px)" />
        <img
          src={item.image}
          alt="Flowers"
          className="w-full h-full object-cover"
        />
      </picture>
    </Grid>
  );
}

const CarouselComment = () => {
  const data = [
    {
      image: carousel1,
      maintext: `사실 저희 사업내용을 알려주고 제작문의를 했을 때 \n 자신 없다고 한 업체가 많았어요.\r\n견적가가 맞지 않는 곳도 많았고 제작이 어렵다고 하는 곳도 많았는데,\r\n매스티지와 상담을 진행하고, \n미팅을 진행하면서 제작 가능하다는 답변에 믿음을 가졌고 여러가지로 잘 맞을 것 같아 선택하게 되었습니다."`,
      subtext: "굿레이트 유정웅 대표",
    },
    {
      image: carousel2,
      maintext:
        "사실 저희 사업내용을 알려주고 제작문의를 했을 때 \n 자신 없다고 한 업체가 많았어요.\r\n견적가가 맞지 않는 곳도 많았고 제작이 어렵다고 하는 곳도 많았는데,",
      subtext: "PS&Marketing 홈페이지 제작",
    },
  ];
  return (
    <Grid
      container
      direction="column"
      position={"relative"}
      width={"100%"}
      maxWidth={"1920px"}
      zIndex={10}
    >
      <Carousel
        animation="slide"
        interval={45000}
        next={(next, active) => console.log()}
        prev={(prev, active) => console.log()}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            zIndex: "1",
            bottom: "0px",
          },
        }}
        className="h-full"
      >
        {data?.map((item, i) => (
          <ItemCom key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
};

export default CarouselComment;
