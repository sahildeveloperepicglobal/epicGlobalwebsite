/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "./footer";
import LeftIcon from "icons/LeftArrow";
import Header from "./header";
import Image from "next/image";
import styles from "styles/otherstyle/home.module.scss";
const GlobalLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      <section className={styles.mydiv1}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.mainbanner}>
                <h1>
                  WE ARE <strong>CREATIVE</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={`${styles.productSpecs} container`}>
          <div className="row">
            <div className={`${styles.productSpec} col-8`}></div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={`${styles.productSpecs} container`}>
          <div className="row">
            <div className="col-6">
              <div className={styles.whowearesection}>
                <h2>WHO WE ARE</h2>
                <p>
                  Epic Global is a specialized tech venture that offers complete
                  website design, development and digital marketing solutions to
                  the business. The company uses best in class technology to
                  help their client’s business get recognized across the world
                  using specialized digital channels like SEO, CRM, Paid
                  campaigns, ecommerce integration and a lot more.
                </p>
                <p>
                  Our prime purpose is to create web applications and processes
                  that can further enhance the engagement and traffic of your
                  website despite the tough market competition. Out digital
                  marketing initiatives are backed by the team of professionals
                  who can assist in bringing organic and paid traffic to your
                  web application and make your business grow at faster rate. We
                  have strengthened our hold not only in India, but boosts off
                  satisfied clientele spread across the globe.
                </p>
              </div>
            </div>
            <div className={`${styles.productSpec} col-6`}>
              <div className={styles.section3image}>
                <img src="/epic_global/coverImage.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.digitalmarketing}>
                <h2>DIGITAL MARKETING SERVICES</h2>
                <p>
                  We boost your organization through our quality services so
                  that you are able to reach your <br></br>business goals and
                  thus get the success you had always wanted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.socialreachsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="socialimage">
                <img src="/epic_global/Group17.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.growingbusinesssection}>
        <div className={`${styles.productSpecs} container`}>
          <div className="row">
            <div className="col-8">
              <div className={styles.businesssection}>
                <p>
                  We put together successful digital marketing campaigns for
                  organizations of all sizes. We can do the same for you.
                  Request a free quote now and you would get to know why Epic
                  web techno is the best SEO organization among all.
                </p>
                <form action="">
                  <input type="text" placeholder="Enter Your Website" />
                  <button>submit</button>
                </form>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.businesssection1}>
                <p>
                  ARE YOU READY TO <span>GROW</span>?
                </p>
                <p className={styles.businesspara1}>
                  IF, YES, THEN GET YOUR FREE QUOTE <span>TODAY</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.emailsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Kick start your strategic campaign today! <br></br>or mail
                hello@epicglobal.com
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whoweworksection}>
        <div className={`${styles.productspe} container`}>
          <div className="row">
            <div className="col-6">
              <div className={styles.whowework1}>
                <h2>Who We Work With</h2>
                <p>
                  In a competitive world driven by technology, we strive to
                  provide much more than just plain satisfaction. Our motto is –
                  To assist and associate as partners with our clients. This is
                  the reason we believe that utilization of the web should not
                  be a struggle; in fact, it should be a worry-free journey.
                </p>
                <p>
                  {" "}
                  And, thus at Epic Global we are committed to add value to your
                  business through intelligent use of the digital channels.
                </p>
                <p>
                  By serving huge numbers of diverse clients worldwide, we have
                  managed to establish our unique recognition among our valued
                  customers within a short span of 3 years.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.startupsection}>
                <ul>
                  <div className={styles.box1}>
                    <li>
                      <img src="/epic_global/employee.png" alt="icon" />
                    </li>
                    <h3>Startup Business</h3>
                  </div>
                  <div className={styles.box1}>
                    <li>
                      <img src="/epic_global/minimize.png" alt="icon" />
                    </li>
                    <h3>
                      Small and Medium <br></br>Business
                    </h3>
                  </div>
                  <div className={styles.box1}>
                    <li>
                      <img src="/epic_global/office-building.png" alt="icon" />
                    </li>
                    <h3>Agencies</h3>
                  </div>
                  <div className={styles.box1}>
                    <li>
                      <img src="/epic_global/briefcase.png" alt="icon" />
                    </li>
                    <h3>Enterprise</h3>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.workingsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.workingsection1}>
                <h2>The Working Process</h2>
                <p>
                  Epic will help in continuous improvement of any project. Our
                  working process policy is based on research, strategy,
                  development and optimization of your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.workingsection2}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="/epic_global/Group1.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.betterinformationsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                The better information about the <br></br>virtual world.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.beauticianslider}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.beauticianslider1}>
                <h2>Book Beautician</h2>
                <p>
                  Book Beautician is a nail art studio with a team of talented,
                  passionate and creative people with years of experience
                  dedicated to doing great nails.
                </p>
                <button>know more</button>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.beauticianslider2}>
                <img src="/epic_global/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lastsectionheading}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>We Different From Others</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lastsection}>
        <div className={`${styles.lastsectionontainer} container`}>
          <div className="row">
            <div className="col-8">
              <div className={styles.lastsection1}>
                <ul>
                  <li>
                    <h2>Industry Experts</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </li>
                  <li>
                    <img src="/epic_global/news.jpg" alt="img" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.industrylastsection}>
                <ul>
                  <li>
                    <LeftIcon />
                  </li>
                  <li>Industry Experts</li>
                </ul>
                <ul>
                  <li>
                    <LeftIcon />
                  </li>
                  <li>Industry Experts</li>
                </ul>
                <ul>
                  <li>
                    <LeftIcon />
                  </li>
                  <li>Industry Experts</li>
                </ul>
                <ul>
                  <li>
                    <LeftIcon />
                  </li>
                  <li>Industry Experts</li>
                </ul>
                <ul>
                  <li>
                    <LeftIcon />
                  </li>
                  <li>Industry Experts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GlobalLayout;
