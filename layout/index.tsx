import React from "react";
import Footer from "./footer";
import Header from "./header";
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
                  <li>+911204176500</li>
                  <li>info@epicglobal.com</li>
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
