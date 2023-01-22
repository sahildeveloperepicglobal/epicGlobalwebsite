import React from "react";
import css from "../styles/footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={css["footer"]}>
        <div className={css["button-parent"]}>
          <h1>How can we help you?</h1>

          <div className={css["contact-button"]}>
            <a href="tel:+911204176500" className={css["neon-button"]}>
              <span>Contact Us </span>
            </a>
          </div>
        </div>
        <div className={`${css["bottom-parent"]} container2 mcenter`}>
          <div className={css["bottom-left"]}>
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
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
                <a href="contact_us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={css["bottom-right"]}>
            <Image
              className={css["epic"]}
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
                business support (BPO and KPO).
              </li>
              <li>
                {" "}
                Currently, we are serving in 28+ countries all across the world
                with quite a long list of happy and satisfied clients.
              </li>{" "}
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
