import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";

interface ImagesArrayType {
  imageUrl: string;
  description?: string;
  heading?: string;
}

interface SliderComponentProps extends SplideProps {
  imagesArray: ImagesArrayType[];
}

const SliderComponent = ({
  imagesArray,
  options,
  ...rest
}: SliderComponentProps) => {
  return (
    <Splide
      options={{
        ...options,
      }}
      aria-label="My Favorite Images"
      {...rest}
    >
      {imagesArray.map((data, i) => {
        return (
          <>
            <SplideSlide key={i}>
              <img src={data.imageUrl} alt="Image 3" />
              <h2>{data.heading}</h2>
              <p>{data.description}</p>
            </SplideSlide>
          </>
        );
      })}
    </Splide>
  );
};

export default SliderComponent;
