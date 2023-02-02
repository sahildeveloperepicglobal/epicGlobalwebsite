import React from "react";
import Image from "next/image";
import css from "../styles/marketing.module.scss";

const OnlineMarketing = () => {
  return (
    <div className={`${css["marketing-parent"]}`}>
      <Image
        src={"/31958.jpg"}
        alt={"marketing-image"}
        width={1500}
        height={900}
      ></Image>
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
        <Image
          src={"/digital2.jpg"}
          alt={"digital marketing"}
          width={1000}
          height={500}
        ></Image>
        <div className={`${css["marketing-section"]}`}>
          <h2>
            &quot; Boost Your Business with Effective Online Marketing
            Strategies &quot;
          </h2>
          <div className={css["marketing-text"]}>
            <div className={css["marketing-leftText"]}>
              <h3>Effective Digital Marketing Solutions by Epic Global</h3>
              <p>
                Epic Global has the expertise and resources to help you create
                an effective digital marketing strategy that will increase brand
                visibility, generate leads, and drive sales. We use the latest
                tools and techniques to ensure your campaigns are successful.
                Our team of experts will provide you with personalized guidance
                and support to ensure your online marketing goals are achieved.
              </p>
            </div>
            <div className={css["marketing-rightText"]}>
              <h3>A Range of Services for Your Unique Needs</h3>
              <p>
                We understand that online marketing can be a complex process,
                and that’s why we offer a range of services to make it simpler.
                We’ll work with you to create an effective online marketing plan
                that meets your needs and budget. Whether you’re just starting
                out or want to enhance your existing campaigns, we’ll help you
                take your online presence to the next level
              </p>
            </div>
          </div>
          <div className={css["bottom-text"]}>
            <h2>
              Maximizing ROI with Top-Notch Online Marketing Services - Epic
              Global
            </h2>
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
        <Faq />
      </div>
    </div>
  );
};

export default OnlineMarketing;
export function Faq() {
  return (
    <div className={css["Faq-section"]}>
      <h2>Frequently Asked Questions (FAQ's)</h2>
      <h4>Q: What services does Epic Global offer?</h4>
      <p>
        Epic Global offers a variety of project management services, including
        project planning, project management consulting, project support,
        project administration, and project control.
      </p>
      <h4>
        Q: What makes Epic Global's project management services stand out?
      </h4>
      <p>
        Epic Global stands out in the project management industry by offering
        experienced and knowledgeable project management consultants and the
        most comprehensive project management tools and techniques.
      </p>
      <h4>Q: What experience does Epic Global have with project management?</h4>
      <p>
        Epic Global has over 10 years of experience in providing project
        management services to its clients.
      </p>
      <h4>Q: How does Epic Global ensure successful project management?</h4>
      <p>
        Epic Global utilizes best practices and its consultants are certified in
        project management to ensure successful project management.
      </p>
      <h4>
        Q: What types of project management services does Epic Global offer?
      </h4>
      <p>
        Epic Global offers services such as project scheduling and budgeting,
        risk management, requirements gathering, change management, and
        stakeholder management.
      </p>
    </div>
  );
}