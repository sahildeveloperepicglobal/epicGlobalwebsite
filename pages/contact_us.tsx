import React from "react";
import css from "../styles/contact.module.scss";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className={` ${css["contact-us"]} container2 mcenter`}>
      <div className={`${css["heading"]}`}>
        <h1>Contact Us</h1>
      </div>
      <div className={`${css["contact-address"]}`}>
        <div className={`${css["address_top-list"]}`}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={`${css["address-section"]}`}>
          <div className={`${css["left-address"]}`}></div>
          <div className={`${css["right-map"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
