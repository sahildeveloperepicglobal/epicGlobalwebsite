import React from "react";
import css from "../styles/about.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={`${css["about-us"]} container2 mcenter`}>
      <div className={`${css["first-section"]}`}>
        <div className={`${css["left-first"]}`}>
          <h1>Who we are</h1>
          <p>
            We at Epic Global interminably strive for the betterment of IT
            services as an industry altogether. Keeping up with cutting-edge
            technology and delivering reliable and secure services to clients is
            the predominant theme of our company. In 2015 when we started
            getting underway with staffing servers and web Development, our
            story started, later on, in 2019 we positioned ourselves more
            towards customized applications including business support (BPO and
            KPO). By dint of a professional and experienced team, we are able to
            develop customized IT services for clients. We provide IT services
            to all types of organizations including government and
            non-government organizations. To ensure the quality of work along
            with its betterment day by day, we believe in taking feedback from
            all our stakeholders.
          </p>
        </div>
        <div className={`${css["right-first"]}`}>
          <Image
            src={"/who.jpg"}
            alt={"who-we-are"}
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
      <div className={`${css["second-section"]}`}>
        <div className={`${css["left-second"]}`}>
          <Image
            src={"/core_values.png"}
            alt={"core-values"}
            width={600}
            height={600}
          ></Image>
        </div>
        <div className={`${css["right-second"]}`}>
          <h1>Our core values</h1>
          <p className={`${css["paragraph"]}`}>
            Working on any creative idea has always been a priority in our
            organizations. A few core values that surely make us stand out in
            the crowd are :<br></br>&rarr; Customer-first <br></br>&rarr;
            Quality Focused <br></br>&rarr; The right of a person to be valued.
            <br></br>
            Currently, we are serving in +28 countries all across the world with
            quite a long list of happy and satisfied clients.
            <br></br>
            Nevertheless, we continuously strive to strengthen our relationship
            with our clients by proving the best services and solutions offered
            in the town.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;