import React from "react";
import Footer from "./footer";
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
    </React.Fragment>
  );
};

export default GlobalLayout;
