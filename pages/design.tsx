import React from "react";
import css from "../styles/design.module.scss";
import Image from "next/image";
import AddIcon from "icons/add";

const DesignAndDevelopement = () => {
  return (
    <div className={`${css["design-ui"]}`}>
      <div className={`${css["design-banner"]}`}>
        <div className={`${css["inside-banner"]} container2 mcenter`}>
          <div className={`${css["left-part"]}`}>
            <h1>Design and Development</h1>
            <p>
              We specialize in creating beautiful, effective, and user-friendly
              websites, applications, and other digital products. Our team of
              experienced professionals is equipped with the latest technologies
              and works collaboratively with our clients to ensure their
              satisfaction.
            </p>
          </div>
          <div className={`${css["right-part"]}`}></div>
        </div>
      </div>

      <div className={`${css["below-bannner"]} container2 mcenter`}>
        <div className={css["needs-section"]}>
          <h2>How We Meet Your Needs?</h2>
          <p>
            We understand that every business has its own unique needs and
            requirements, which is why we strive to provide custom solutions to
            meet those needs. Our specialized design and development services
            include web and mobile development, custom applications, website
            design and development, content management systems, e-commerce
            solutions, and search engine optimization. We are also experienced
            in the creation of digital media such as videos, animations, and
            graphics.
          </p>
        </div>
        <EpicCards />
        <Clients />
        <RowCard />

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
    question: `How does Epic Global Agency provide the best services for Design & Development?`,
    answer: ` Epic Global Agency utilizes a combination of experienced designers, developers, and strategists to provide high-quality designs and development services. Our team works closely with clients to create custom solutions that meet their unique needs and goals. We use industry-leading technologies and methodologies to create modern, responsive websites, applications, and digital products.`,
  },
  {
    question:
      "What types of Design & Development services does Epic Global Agency offer?",
    get answer() {
      return "Epic Global Agency offers a wide range of services related to Design & Development, including web design, front end development, back end development, mobile app development, ecommerce development, and more. We can create custom designs, develop cutting-edge applications, and provide ongoing maintenance and optimization services to ensure that your project is successful.";
    },
  },
  {
    question:
      "What kind of technologies and tools does Epic Global Agency use for Design & Development?",
    get answer() {
      return "Epic Global Agency uses advanced technologies and tools, such as HTML, CSS, JavaScript, Node, Mongo DB, MySQL and many more, to create custom solutions for our clients. We also utilize industry-leading frameworks, such as Angular, React, Next and Vue, as well as content management systems, such as Drupal, WordPress, and Magento, to ensure the best results for our clients.";
    },
  },
  {
    question:
      "What kind of experience does Epic Global Agency have in Design & Development?",
    get answer() {
      return "Epic Global Agency has years of experience in the Design & Development industry. Our team has worked with clients from a variety of industries, such as finance, healthcare, entertainment, and retail. We have created successful products and services for companies of all sizes, from small startups to large enterprises.";
    },
  },
  {
    question:
      "How much does it cost to work with Epic Global Agency for Design & Development?",
    get answer() {
      return "The cost of working with Epic Global Agency for Design & Development varies depending on the scope and complexity of the project. We offer competitive pricing and can provide a detailed quote for your project after understanding your specific requirements.";
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
export default DesignAndDevelopement;
export function EpicCards() {
  return (
    <div className={`${css["epic-cards"]}`}>
      <div className={`${css["epic-card1"]}`}>
        <Image
          src={"/mission-dummy.jpg"}
          alt={"cards"}
          width={400}
          height={400}
        ></Image>
        <p>
          At Epic Global, we take great pride in our work, and always strive to
          deliver the highest quality results. We aim to provide our clients
          with an efficient, effective, and cost-efficient solution that meets
          and exceeds their expectations. We believe in working closely with our
          customers and providing them with timely feedback and updates
          throughout the entire process.
        </p>
      </div>
      <div className={`${css["epic-card2"]}`}>
        <Image
          src={"/mission-dummy.jpg"}
          alt={"cards"}
          width={400}
          height={400}
        ></Image>
        <p>
          Our experienced team of professionals is committed to providing the
          best possible service and results. We use the latest technologies to
          create beautiful and effective designs that are tailored to the
          specific needs and goals of our clients. We also offer a wide range of
          other services such as SEO, online marketing, web hosting, and more.
        </p>
      </div>
    </div>
  );
}
export function Clients() {
  return (
    <div className={`${css["client-section"]}`}>
      <h2>Customer Service & Support</h2>
      <p>
        At Epic Global, we take great care in creating a successful, long-term
        relationship with our clients. We offer personalized customer service
        and support, and are always available to answer any questions or
        concerns. We strive to provide our customers with the best possible
        experience and results.
      </p>
    </div>
  );
}
export function RowCard() {
  return (
    <div className={css["row-cards"]}>
      <div className={`${css["RowCard1Parent"]}`}>
        <div className={`${css["row-left-part"]}`}>
          <Image
            src={"/Affordable.jpg"}
            alt={"image"}
            width={400}
            height={400}
          ></Image>
        </div>
        <div className={`${css["row-right-part"]}`}>
          <p>
            If you are looking for a reliable and experienced design and
            development team to create an effective and user-friendly website,
            application, or other digital product, then look no further than
            Epic Global. We are committed to providing our clients with the best
            possible service and results. Contact us today to learn more about
            our services and how we can help you achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
}
