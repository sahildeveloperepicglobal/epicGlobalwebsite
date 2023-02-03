import React, { useState } from "react";
import css from "../styles/contact.module.scss";
import Image from "next/image";
import Link from "next/link";

type Country = typeof AddressData[0];

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(
    AddressData[0]
  );

  const onSelectCountry = React.useCallback((data: Country) => {
    setSelectedCountry(data);
  }, []);

  console.log(selectedCountry);
  return (
    <div className={` ${css["contact-us"]} container2 mcenter`}>
      <div className={`${css["heading"]}`}>
        <h1>Contact Us</h1>
      </div>
      <div className={`${css["contact-address"]}`}>
        <div className={`${css["address_top-list"]}`}>
          <ul className={`${css["flex-country"]}`}>
            {AddressData.map((item, index) => (
              <li key={index} onClick={() => onSelectCountry(item)}>
                <a>{item.country}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${css["address-section"]}`}>
          <div className={`${css["left-address"]}`}>
            <h2>{selectedCountry.country}</h2>
            <ul>
              {/* <li>B05, H140</li>
              <li>Sector 63</li>
              <li>Noida (201301)</li>
              <li>Uttar Pradesh</li> */}
              <li>
                {selectedCountry.address} <br></br>
                <br></br>
                {selectedCountry.address2}
              </li>
            </ul>
            <span>Phone:</span>
            <a href={`tel:${selectedCountry.phone[0]}`}>
              {selectedCountry.phone[0]}
            </a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${css["right-map"]}`}>
            <iframe
              src={selectedCountry.mapLink}
              // width="70%"
              // height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Signup />
    </div>
  );
};

export default ContactUs;

const AddressData = [
  {
    country: "India",
    address: ["B05, H-140, Sector 63, Noida, 201301"],
    address2: [
      "Block-C Sree Lakshmi Estates Block-F, NH65, Madinaguda, Miyapur, Telangana 500050, Miyapur, Hyderabad, Telangana - 500050",
    ],
    phone: [" +91 2104176500"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1337802519674!2d77.37461772557941!3d28.62575232619224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef387aa571c5%3A0x3a20601e5ef21ab7!2sEpic%20Global!5e0!3m2!1sen!2sin!4v1674069002352!5m2!1sen!2sin",
  },
  {
    country: "United Kingdom",
    address:
      "Unit 8a Stag Industrial Estate Oxford Street Bilston Wolverhampton WV14 7HZ",
    phone: [" +91 2104176500"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1337802519674!2d77.37461772557941!3d28.62575232619224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef387aa571c5%3A0x3a20601e5ef21ab7!2sEpic%20Global!5e0!3m2!1sen!2sin!4v1674069002352!5m2!1sen!2sin",
  },
  {
    country: "UAE",
    address: "Suit 205 Palacio towers, Dubai Silicon Oasis",
    phone: [" +91 2104176500"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.694600273895!2d55.382951014707096!3d25.112197383935797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6468a0313efd%3A0xd0433db4a8ddaf9c!2sEpic%20Global%20-%20Dubai%20Epic%20Global%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1674557103459!5m2!1sen!2sin",
  },
  {
    country: "North America",
    address: "1 Yonge St Suite #1801, Toronto, ON M5E 1W7",
    phone: [" +91 2104176500"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41289548.80927969!2d-130.11782872211322!3d50.82905111995382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1674069056768!5m2!1sen!2sin",
  },
];
export function Signup() {
  return (
    <div className={css["form-container"]}>
      <h2>Submit Your Details</h2>
      <form>
        <label htmlFor={"name"}>Name*</label>
        <input
          type={"text"}
          required
          minLength={2}
          maxLength={20}
          id={"name"}
        ></input>
        <label htmlFor={"email"}>Email*</label>
        <input type={"email"} id={"email"} required></input>
        <label htmlFor={"number"}>Number*</label>
        <input type={"number"} id={"number"} required></input>
        <label htmlFor={"message"}>Message</label>
        <textarea rows={8} id={"message"}></textarea>
        <div className={css["submit-button"]}>
          <input type={"submit"}></input>
        </div>
      </form>
    </div>
  );
}
