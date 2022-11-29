/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "styles/otherstyle/home.module.scss";
import PhoneIcon from "icons/PhoneIcon";
import Link from "next/link";

const Header = () => {
  const [textChange, setTextChange] = React.useState("CREATIVE");

  return (
    <React.Fragment>
      <section className={styles.topheader}>
        <div className={`${styles.productSpecs} container`}>
          <div className="row">
            <div className={`${styles.productSpec} col-8`}></div>
            <div className="col-4">
              <div className={styles.rightsideheader}>
                <ul>
                  <li>
                    <PhoneIcon />
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>+911204176500</a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <PhoneIcon />
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>info@epicglobal.com</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainheader}>
        <div className={`${styles.productSpec} container`}>
          <div className="row">
            <div className="col-4">
              <div className={styles.mainlogo}>
                <img src="/epic logo.png" alt="logo" />
              </div>
            </div>
            <div className="col-8">
              <div className={styles.mainmenu}>
                <ul>
                  <li>
                    <Link href={"#"}>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>Company</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <a>Seo Analysis</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;

// const Test = () => {
//   return (
//     <React.Fragment>
//     <div>header</div>
//     <div>header</div>
//     </React.Fragment>
//   )
// }
