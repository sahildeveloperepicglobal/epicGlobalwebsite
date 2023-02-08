import Head from "next/head";
import React from "react";
import css from "../styles/home.module.scss";
import Image from "next/image";
import Slider from "components/slider";
import Grid from "components/grid";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("components/blog"), {
  ssr: false,
});

interface Home {
  BlogData: any;
}

export default function Home({ BlogData }: Home) {
  console.log(BlogData);
  return (
    <React.Fragment>
      <Head>
        <title>Epic Global</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
        <a
          href="https://www.google.com/partners/agency?id=6296859055"
          target="_blank"
        >
          <img src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg" />
        </a>
        {/* Add the code snippet above to the sites listed to display your badge:
    https://epicglobal.co.in/  */}
      </Head>
      {/* Banner Animation Start */}

      <div className={`${css["banner"]}`}>
        <Image
          src={"/banner.jpeg"}
          alt={"banner_image"}
          width={1400}
          height={700}
        ></Image>
      </div>

      {/* Banner Animation End */}

      {/* Discover Section Start */}

      <div className={`${css["Discover-section"]}`}>
        <div className={`${css["wavy"]}`}>
          <div style={{ ["--i" as any]: "1" }}></div>
          <span style={{ ["--i" as any]: "2" }}>D</span>
          <span style={{ ["--i" as any]: "3" }}>i</span>
          <span style={{ ["--i" as any]: "4" }}>s</span>
          <span style={{ ["--i" as any]: "5" }}>c</span>
          <span style={{ ["--i" as any]: "6" }}>o</span>
          <span style={{ ["--i" as any]: "7" }}>v</span>
          <span style={{ ["--i" as any]: "8" }}>e</span>
          <span style={{ ["--i" as any]: "9" }}>r</span>
          <span style={{ ["--i" as any]: "10" }}>&nbsp; E</span>
          <span style={{ ["--i" as any]: "11" }}>p</span>
          <span style={{ ["--i" as any]: "12" }}>i</span>
          <span style={{ ["--i" as any]: "13" }}>c</span>
          <span style={{ ["--i" as any]: "14" }}>&nbsp; G</span>
          <span style={{ ["--i" as any]: "15" }}>l</span>
          <span style={{ ["--i" as any]: "16" }}>o</span>
          <span style={{ ["--i" as any]: "17" }}>b</span>
          <span style={{ ["--i" as any]: "18" }}>a</span>
          <span style={{ ["--i" as any]: "19" }}>l</span>
        </div>
        <div className={`${css["below-discover"]}`}>
          <span>
            We are obsessed with quality. We have an amazing team that is ready
            to conquer any task.
          </span>
        </div>
        <div className={`${css["container"]} container2 mcenter`}>
          <div className={`${css["sections-devide"]}`}>
            <div className={css["first-section"]}>
              <Image
                src={"/quality.jpg"}
                alt={"quality-services"}
                width={400}
                height={400}
              ></Image>
              <h2>Quality & Agile Services</h2>
              <p>
                Epic global is a team of passionate, enthusiastic and
                perfectionist people, who are always on the go to provide the
                best possible solutions, products and services. Our projects are
                backed by an effective and efficient development agile
                methodology that employs sustainable processes designed for long
              </p>
            </div>

            <div className={css["second-section"]}>
              <Image
                src={"/Affordable.jpg"}
                alt={"quality-services"}
                width={400}
                height={400}
              ></Image>

              <h2>Affordability</h2>
              <p>
                In a cutting-edge environment we focus on ROI based solutions.
                We believe in offering solutions at right cost that is
                Customized and Tailored, through the process of Analysis,
                Design, Development, Implement and Support. We trust in offering
                affordable solutions for your business.
              </p>
            </div>
            <div className={css["third-section"]}>
              <Image
                src={"/support.jpg"}
                alt={"quality-services"}
                width={400}
                height={400}
              ></Image>
              <h2>Support System</h2>
              <p>
                Epic Global is a global organization providing cost effective
                solutions in Analytics and other domain areas. We have a team of
                experienced professionals who seamlessly blend with your
                business needs to deliver optimal technologies and processes,
                which considerably caters to the detailed requirements of
                organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Section End */}

      <Slider />

      {/* Join Mission Section Start */}

      {/* Join Mission Section End */}
      <Grid />
      <Mission />
      <Blog data={BlogData} />
    </React.Fragment>
  );
}

export function Mission() {
  return (
    <div className={` ${css["join-mission"]} container2 mcenter`}>
      <div className={`${css["mission-text"]}`}>
        <strong>CAREERS</strong>
        <h2>
          Join a team with a <span>mission.</span>{" "}
        </h2>
        <p>
          At Epic Global, we seek talented professionals who are passionate
          about technology and want to make a difference in the world. We
          promote a culture of collaboration, growth, and development, and value
          our employees as our most important asset. We offer competitive
          salaries, benefits, and a variety of career paths to fit your
          individual goals. From entry-level positions to executive roles, we
          have a place for you at Epic Global. We are always looking for
          individuals who share our passion for technology and want to work in
          an environment of collaboration, innovation, and growth. If you are
          interested in joining our team, please contact us and we will be happy
          to discuss potential opportunities.
        </p>
      </div>
      <div className={css["mission-image"]}>
        <Image
          src={"/mission-dummy.jpg"}
          alt="mission"
          height={400}
          width={400}
        ></Image>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://blog.epicglobal.co.in/wp-json/wp/v2/posts`
  );
  const BlogData = await response.json();
  return {
    props: {
      BlogData,
    },
  };
};
