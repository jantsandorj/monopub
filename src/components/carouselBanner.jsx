import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import carousel1 from "../image/andreas-rasmussen-ZtD4DdClWGI-unsplash.jpg";
import carousel2 from "../image/nordwood-themes-kRNZiGKtz48-unsplash.jpg";
import carousel3 from "../image/s-o-c-i-a-l-c-u-t-EwQhB7yNGOU-unsplash.jpg";
function Item({ item }) {
  return (
    <Paper
      component={"div"}
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        width: "100%",
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      }}
    >
      <picture className="w-full h-full absolute">
        <source srcSet={item.image} media="(max-width: 600px)" />
        <source srcSet={item.image} media="(min-width: 601px)" />
        <img
          src={item.image}
          alt="Flowers"
          className="w-full h-full object-cover banner"
        />
      </picture>
      <Grid
        item
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
        width={"100%"}
        className="xs:items-center xs:justify-start md:items-start md:justify-center px-[25px] lg:px-0 z-[10] pt-[25px] md:pt-0 cont overflow-hidden"
      >
        <h1 className="text-7xl font-bold text-[#ffffff] pb-5 banner_txt">
          {item.maintext}
        </h1>
        <h3 className="text-4xl font-bold text-[#ffffff]  banner_txt">
          {item.subtext}
        </h3>
      </Grid>
    </Paper>
  );
}

const CarouselCom = () => {
  const data = [
    {
      image: carousel1,
      maintext: "SK 텔레콤",
      subtext: "PS&Marketing 홈페이지 제작",
    },
    {
      image: carousel2,
      maintext: "SK 텔레콤",
      subtext: "PS&Marketing 홈페이지 제작",
    },
    {
      image: carousel3,
      maintext: "SK 텔레콤",
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
      margin={"auto"}
      height={"100vh"}
    >
      <Carousel
        animation="fade"
        interval={4500}
        next={(next, active) => console.log()}
        prev={(prev, active) => console.log()}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            zIndex: "1",
            bottom: "40px",
          },
        }}
        className="h-full"
      >
        {data?.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
};

export default CarouselCom;
