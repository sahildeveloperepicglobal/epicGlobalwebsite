import React from "react";
import Footer from "./footer";
import Header from "./header";
import Image from "next/image";
import styles from "styles/otherstyle/home.module.scss";
const GlobalLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <section className={styles.topheader}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className={styles.topheader2}></div>
            </div>
            <div className="col-md-4">
              <div className={styles.topcontact}>
                <ul>
                  <li>
                    <Image
                      src="/epic global/phone.png"
                      height={20}
                      width={20}
                    />

                    <span>+911204176500</span>
                  </li>
                  <li>
                    <Image
                      src="/epic global/email.png"
                      height={20}
                      width={20}
                    />
                    <span>info@epicglobal.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default GlobalLayout;
