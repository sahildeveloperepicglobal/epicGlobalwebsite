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
          <a href="tel:+911204176500" className={css["shaky-btn"]}>
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
            <p>
              DXC Technology (NYSE: DXC) helps global companies run their
              mission-critical systems and operations while modernizing IT,
              optimizing data architectures, and ensuring security and
              scalability across public, private and hybrid clouds. The world's
              largest companies and public sector organizations trust DXC to
              deploy services to drive new levels of performance,
              competitiveness, and customer experience across their IT estates.
              Learn more about how we deliver excellence for our customers and
              colleagues at DXC.com.
            </p>
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
