import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import LinkednIcon from "icons/LinkednIcon";
import GoogleIcon from "icons/GoogleIcon";
import TwitterIcon from "icons/TwitterIcon";
import InstagramIcon from "icons/InstagramIcon";
import FacebookIcon from "icons/FacebookIcon";
import styles from "../styles/footer.module.scss";

const NewFooter: NextPage = () => {
  return (
    <>
      <section className={styles.mainfooter}>
        <div className={`${styles.footercontainer} container`}>
          <div className="row">
            <div className="col-12">
              <div className={styles.mainfooter1}>
                <ul>
                  <li>
                    <h2>MARKETING</h2>
                    <ul className={styles.subfooter}>
                      <li>
                        <Link href={"#"}>
                          <a>SEO Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>Global SEO Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>Local SEO Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>PPC Managment</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>MOBILITY</h2>
                    <ul className={styles.subfooter}>
                      <li>
                        <Link href={"#"}>
                          <a>Android App Devlopment</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>iPhone/iPad App Devlopment</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>Hybrid App Devlopment</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>App Design</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>DEVLOPMENT SERVICES</h2>
                    <ul className={styles.subfooter}>
                      <li>
                        <Link href={"#"}>
                          <a>Custom Application Devlopments</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>WordPress Devloment</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>App Designing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>CRM Integration</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>CONTACT</h2>
                    <ul className={styles.subfooter}>
                      <li>
                        <Link href={"#"}>
                          <a>info@epicglobal.com</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>Global SEO Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>Local SEO Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
                          <a>PPC Managment</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer2section}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.footer2}>
                <ul>
                  <li>
                    <FacebookIcon fill="#fff" />
                  </li>
                  <li>
                    <InstagramIcon fill="#fff" />
                  </li>
                  <li>
                    <TwitterIcon fill="#fff" />
                  </li>
                  <li>
                    <GoogleIcon fill="#fff" />
                  </li>
                  <li>
                    <LinkednIcon fill="#fff" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lastfooter3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Copyright @2022 Epicglobal. All Rights Reserved.</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewFooter;
