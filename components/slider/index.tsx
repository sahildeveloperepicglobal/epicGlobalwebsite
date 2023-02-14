import react from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css/sea-green";
import css from "../../styles/slider.module.scss";
import Link from "next/link";

const Slider = () => {
  return (
    <div className={css["container"]}>
      <div className={`${css["aws-partner"]}`}>
        <h2>Technology Partner</h2>
      </div>
      <Splide
        options={{
          autoplay: true,
          interval: 2500,
          speed: 2000,
          arrows: false,
          rewind: true,
          type: "loop",
          height: "450px",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <SlideItem
            imageUrl={"/DigitalOcean_logo.jpg"}
            description="Epic Global has partnered with DigitalOcean, a cloud infrastructure provider, to provide a comprehensive cloud-based solution for our customers. The partnership will enable Epic Global customers to leverage DigitalOcean’s cloud infrastructure and services to build and manage their cloud-native applications and services."
          />
        </SplideSlide>
        <SplideSlide>
          <SlideItem
            imageUrl={
              "https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg"
            }
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
          <Link
            href={"https://www.google.com/partners/agency?id=6296859055"}
            target={"_blank"}
          >
            <Image src={imageUrl} alt="Image 2" height={400} width={400} />
          </Link>
        </div>
        <div className={css["slider-content"]}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
