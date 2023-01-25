import React from "react";
import Image from "next/image";
import css from "../styles/marketing.module.scss";
import AddIcon from "icons/add";

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

        {/* faq start  */}
        <div className="faq">
          <div className="col-md-12">
            {FAQArray.map((data, index) => (
              <FAQList key={index} index={index} {...data} />
            ))}
          </div>
        </div>
        {/* faq end  */}
      </div>
    </div>
  );
};
const FAQArray = [
  {
    question: `What services does Epic Global Agency offer for online marketing?`,
    answer: ` Epic Global Agency offers a wide range of online marketing services, including SEO, PPC, social media marketing, content marketing, email marketing, web design, and more.`,
  },
  {
    question:
      "How long does it typically take for online marketing campaigns to start seeing results?",
    get answer() {
      return "The timeline for seeing results from an online marketing campaign can vary based on the scope of the project, the industry, and the competition. However, it is typically safe to expect to see results within three to six months.";
    },
  },
  {
    question:
      "What kind of budget do I need to start an online marketing campaign?",
    get answer() {
      return "The budget for an online marketing campaign can vary depending on the scope of the project and the services you are looking to use. However, most campaigns require a minimum budget of $500.";
    },
  },
  {
    question:
      "What types of reports will I receive when working with Epic Global Agency?",
    get answer() {
      return "Epic Global Agency provides comprehensive monthly reports that include detailed analytics and insights about the performance of your online marketing campaigns.";
    },
  },
  {
    question:
      "Does Epic Global Agency offer any guarantees for online marketing services?",
    get answer() {
      return "Epic Global Agency does not provide any guarantees for online marketing services. However, our team of experienced professionals is dedicated to delivering the best possible results for our clients.";
    },
  },
];
const FAQList = ({ question, answer, index }: any) => {
  const [isOpen, setOpen] = React.useState(index === 0 || false);
  const onClickButton = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <ul onClick={onClickButton}>
        <li className="heading">
          {" "}
          <div className="icon">
            <AddIcon
              style={{
                transform: `rotate(${isOpen ? "45deg" : "90deg"})`,
                transition: "all 150ms ease",
                fill: "#000000",
              }}
            />
          </div>
          <h4>{question}</h4>
        </li>
        <li
          className="contanttext"
          style={{
            maxHeight: isOpen ? "200px" : "0px",
            overflow: "hidden",
            transition: "all 150ms ease",
            padding: 0,
            marginTop: "15px",
            color: "#838383",
          }}
        >
          <p>{answer}</p>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default OnlineMarketing;
