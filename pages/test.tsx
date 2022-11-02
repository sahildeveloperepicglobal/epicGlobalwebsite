import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";

const TestSlider = () => {
  const imagesArray = [
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
    {
      imageUrl: "",
    },
  ];

  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        perPage: 4,
        autoplay: true,
        loop: true,
        height: 200,
        interval: 2000,
        arrows: false,
      }}
      aria-label="My Favorite Images"
    >
      {imagesArray.map((d, i) => {
        return (
          <SplideSlide key={i}>
            <img src={d.imageUrl} alt="Image 3" />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default TestSlider;
