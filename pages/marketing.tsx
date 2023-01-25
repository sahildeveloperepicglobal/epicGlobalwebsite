import React from "react";
import Image from "next/image";
import css from "../styles/marketing.module.scss";

const OnlineMarketing = () => {
  return (
    <div className={`${css["marketing-parent"]}`}>
      <div className={`${css["complete-section"]} container2 mcenter`}>
        <div className={`${css["top-section"]}`}>
          <h1>Online Marketing </h1>
          <p>
            Epic Global is a full-service online marketing agency that provides
            comprehensive services to help your business succeed online. Our
            team of experienced professionals has the skills and know-how to
            help you reach your online marketing goals. We offer a wide range of
            services, including website design and development, search engine
            optimization (SEO), pay-per-click (PPC) advertising, social media
            marketing (SMM), email marketing, content marketing, and more.
          </p>
        </div>
        <div className={`${css["marketing-cards"]}`}>
          <div className={css["marketing-card1"]}>
            <Image
              src={"/future.jpg"}
              alt={"marketing-image"}
              width={500}
              height={500}
            ></Image>
            <p>
              Epic Global has the expertise and resources to help you create an
              effective digital marketing strategy that will increase brand
              visibility, generate leads, and drive sales. We use the latest
              tools and techniques to ensure your campaigns are successful. Our
              team of experts will provide you with personalized guidance and
              support to ensure your online marketing goals are achieved.
            </p>
          </div>
          <div className={css["marketing-card2"]}>
            <Image
              src={"/future.jpg"}
              alt={"marketing-image"}
              width={500}
              height={500}
            ></Image>
            <p>
              We understand that online marketing can be a complex process, and
              that’s why we offer a range of services to make it simpler. We’ll
              work with you to create an effective online marketing plan that
              meets your needs and budget. Whether you’re just starting out or
              want to enhance your existing campaigns, we’ll help you take your
              online presence to the next level
            </p>
          </div>
          <div className={css["marketing-card3"]}>
            <Image
              src={"/future.jpg"}
              alt={"marketing-image"}
              width={500}
              height={500}
            ></Image>
            <p>
              At Epic Global, we’re committed to providing top-notch online
              marketing services to help your business succeed. Our goal is to
              help you get the most out of your online marketing efforts and
              maximize your ROI. With our comprehensive services, you can trust
              that your campaigns are in good hands. Contact us today to learn
              more about how we can help you achieve your digital marketing
              goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineMarketing;
