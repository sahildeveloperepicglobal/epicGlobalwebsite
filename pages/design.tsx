import React from "react";
import css from "../styles/design.module.scss";
import Image from "next/image";

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
        <Faq />
      </div>
    </div>
  );
};

export default DesignAndDevelopement;
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

export function EpicCards() {
  return (
    <div className={`${css["epic-cards"]}`}>
      <div className={`${css["epic-card1"]}`}>
        <Image
          src={"/customer-card01.jpg"}
          alt={"cards"}
          width={400}
          height={400}
        ></Image>
        <h4>Committed to Excellence</h4>
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
          src={"/wp1997572.jpg"}
          alt={"cards"}
          width={400}
          height={400}
        ></Image>
        <h4>Expert Team, Tailored Designs</h4>
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
      <Image
        src={"/customer-service.jpg"}
        alt={"customer services"}
        width={1000}
        height={600}
      ></Image>

      <p>
        If you are looking for a reliable and experienced design and development
        team to create an effective and user-friendly website, application, or
        other digital product, then look no further than Epic Global. We are
        committed to providing our clients with the best possible service and
        results. Contact us today to learn more about our services and how we
        can help you achieve your business goals.
      </p>
    </div>
  );
}