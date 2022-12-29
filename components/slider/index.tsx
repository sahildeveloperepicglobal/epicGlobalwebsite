import react from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css/sea-green";
import css from "../../styles/slider.module.scss";

const Slider = () => {
  return (
    <div className={css["container"]}>
      <div className={`${css["aws-partner"]}`}>
        <h2>We are AWS Consulting Partner</h2>
      </div>
      <Splide
        options={{
          autoplay: true,
          interval: 2500,
          speed: 2000,
          arrows: false,
          rewind: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <SlideItem
            imageUrl={"/amazon.png"}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nobis ex inventore a error molestias assumenda odio nesciunt odit neque harum sequi, obcaecati cum ducimus eveniet officiis? Natus, nemo a."
          />
        </SplideSlide>
        <SplideSlide>
          <SlideItem
            imageUrl={"/amazon.png"}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nobis ex inventore a error molestias assumenda odio nesciunt odit neque harum sequi, obcaecati cum ducimus eveniet officiis? Natus, nemo a."
          />
        </SplideSlide>
        <SplideSlide>
          <SlideItem
            imageUrl={"/amazon.png"}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nobis ex inventore a error molestias assumenda odio nesciunt odit neque harum sequi, obcaecati cum ducimus eveniet officiis? Natus, nemo a."
          />
        </SplideSlide>
        <SplideSlide>
          <SlideItem
            imageUrl={"/amazon.png"}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nobis ex inventore a error molestias assumenda odio nesciunt odit neque harum sequi, obcaecati cum ducimus eveniet officiis? Natus, nemo a."
          />
        </SplideSlide>
        <SplideSlide>
          <SlideItem
            imageUrl={"/amazon.png"}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nobis ex inventore a error molestias assumenda odio nesciunt odit neque harum sequi, obcaecati cum ducimus eveniet officiis? Natus, nemo a."
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};
export default Slider;

interface SlideItemProps {
  description?: string;
  imageUrl: string;
}

const SlideItem = ({ description, imageUrl }: SlideItemProps) => {
  return (
    <div className={` ${css["slide-container"]} container2 mcenter`}>
      <div className={css["slide-item"]}>
        <div className={css["images"]}>
          <Image src={imageUrl} alt="Image 2" height={400} width={400} />
        </div>
        <div className={css["slider-content"]}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
