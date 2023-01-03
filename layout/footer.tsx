import React from "react";
import css from "../styles/footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={css["footer"]}>
        <h1>How can we help you?</h1>
        {/* <h2>Get in touch</h2> */}
        <span>
          <a href="tel:+911204176500" className={css["neon-button"]}>
            Contact Us
          </a>
        </span>
        <div className={`${css["bottom-parent"]} container2 mcenter`}>
          <div className={css["bottom-left"]}>
            <ul>
              <li>
                <a href="#">Business Process Services</a>
              </li>
              <li>
                <a href="#">Project Management</a>
              </li>
              <li>
                <a href="#">Design & Development</a>
              </li>
              <li>
                <a href="#">Online Marketing</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={css["bottom-right"]}>
            <Image
              src="/epic-logo.png"
              alt="logo"
              height={45}
              width={250}
            ></Image>
            <ul>
              <li>
                We at Epic Global interminably strive for the betterment of IT
                services as an industry altogether. Keeping up with cutting-edge
                technology and delivering reliable and secure services to
                clients is the predominant theme of our company. In 2015 when we
                started getting underway with staffing servers and web
                Development, our story started, later on, in 2019 we positioned
                ourselves more towards customized applications including
                business support (BOP and KPO). By dint of a professional and
                experienced team, we are able to develop customized IT services
                for clients. We provide IT services to all types of
                organizations including government and non-government
                organizations. To ensure the quality of work along with its
                betterment day by day, we believe in taking feedback from all
                our stakeholders.{" "}
              </li>
              <li>
                {" "}
                Working on any creative idea has always been a priority in our
                organizations. A few core values that surely make us stand out
                in the crowd are :{" "}
              </li>
              <li> - Customer-first</li>
              <li> - Quality Focused </li>
              <li>- The right of a person to be valued</li>
              <li>
                {" "}
                Currently, we are serving in +28 countries all across the world
                with quite a long list of happy and satisfied clients.
              </li>{" "}
              <li>
                {" "}
                Nevertheless, we continuously strive to strengthen our
                relationship with our clients by proving the best services and
                solutions offered in the town.
              </li>
            </ul>
          </div>
        </div>
        <div className={css["copyright"]}>
          <span>© Copyright by Epic Global 2022 – All rights reserved.</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
