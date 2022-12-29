import React from "react";
import css from "../styles/contact.module.scss";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className={` ${css["contact-us"]}`}>
      <div className={`${css["contact-background"]}`}>
        <Image
          src={"/Capgemini_Contact-us.jpg"}
          alt={"contact-us-banner"}
          height={700}
          width={1400}
        ></Image>
      </div>
      <div className={`${css["contact-box"]}`}>
        <h1>Contact Us</h1>
      </div>
      <div className={`${css["thanks_section"]} container2 mcenter`}>
        <h2>
          Thank you for your interest in Epic Global. Whether you’re a client,
          job seeker, journalist, analyst or investor, you can find the best way
          to contact us below.
        </h2>
        <h3>Global contacts details</h3>
        <h4>Head Office</h4>
        <p>→ 1 Yonge St Suite #1801, Toronto, ON M5E 1W7, Canada</p>
        <p>→ Suit 205 Palacio towers, Dubai Silicon Oasis</p>
        <p>
          → Unit 8a Stag Industrial Estate Oxford Street Bilston Wolverhampton
          WV14 7HZ
        </p>
        <p>→ B05, H-140, Sector 63, Noida</p>
        <h4>Job seekers</h4>
        <p>
          Our global website provides an overview of careers at Capgemini. Our
          country websites provide a more localised view on career
          opportunities.
        </p>
        <h4>Clients</h4>
        <p>
          Find out more on how we can help you to get the future you want in
          through our industry expertise, services, and technology partners.
        </p>
        <h4>Investors</h4>
        <p>
          Our Investor Relations site provides investor information, regulated
          news, and contact details in a dedicated site.
        </p>
        <h4>Media</h4>
        <p>
          Our Global Press Office is available for all media enquiries. For
          local enquiries please contact the local press team.{" "}
        </p>
        <h4>Market analysts</h4>
        <p>
          Our Market Analyst Relations team&nbsp;provides a single point of
          contact for market analysts. If you are an analyst and need
          information on Capgemini’s services and industry experience, or would
          like to schedule a briefing with one of our experts, the Analyst
          Relations team is here to help.
        </p>
      </div>
      <div className={`${css["enquiry"]} `}>
        {" "}
        <div className={`${css["parent_enquiry"]} container2 mcenter`}>
          <div className={`${css["left_enquiry"]}`}>
            <h3>Other enquiries</h3>
            <p>
              For all other enquiries, please complete this form and one of the
              team will be in touch.
            </p>
          </div>
          <div className={`${css["right_enquiry"]}`}>
            <a href={"#"}> Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
