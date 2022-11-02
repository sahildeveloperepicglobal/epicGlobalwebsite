import React from "react";

import type { NextPage } from "next";
import Image from "next/image";
// import Link from "next/link";

import styles from "../styles/footer.module.scss";

const NewFooter: NextPage = () => {
  return (
    <div className={styles.Container}>
      <section className={styles.sectionFooter}>
        <div className="containerr3">
          <div className="row">
            <div className={styles.mainfooter}>
              <div className={styles.footer1}>
                <h3>MARKETING</h3>
                <ul>
                  <li>SEO Services</li>
                  <li>Global SEO Services</li>
                  <li>Local SEO Services</li>
                  <li>PPC Managment</li>
                </ul>
              </div>
              <div className={styles.footer1}>
                <h3>MOBILITY</h3>
                <ul>
                  <li>Android App Devlopment </li>
                  <li>iPhone/iPad App Devlopment</li>
                  <li>Hybrid App Devlopment</li>
                  <li>App Design</li>
                </ul>
              </div>
              <div className={styles.footer1}>
                <h3>DEVLOPMENT SERVICES</h3>
                <ul>
                  <li>Custom Application Devlopment</li>
                  <li>WordPress Devloment</li>
                  <li>App Designing</li>
                  <li>CRM Integration</li>
                </ul>
              </div>
              <div className={styles.footer1}>
                <h3>CONTACT</h3>
                <ul>
                  <li>info@epicglobal.com</li>
                  <li>Global SEO Services</li>
                  <li>Local SEO Services</li>
                  <li>PPC Managment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.MarktingFooter}>
            <ul>
              <li>
                <Image
                  src="/epic global/facebook-app-symbol.png"
                  height={30}
                  width={30}
                />
              </li>

              <li>
                <Image
                  src="/epic global/instagram-image.png"
                  height={30}
                  width={30}
                />
              </li>

              <li>
                <Image src="/epic global/twitter.png" height={30} width={30} />
              </li>

              <li>
                <Image
                  src="/epic global/google-image1.png"
                  height={30}
                  width={30}
                />
              </li>

              <li>
                <Image src="/epic global/linkedin.png" height={30} width={30} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.lastfooter}>
            <h5>Copyright@ 2022 Epicglobal All Right Reserved</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFooter;
