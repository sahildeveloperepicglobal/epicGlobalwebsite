import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/otherstyle/home.module.scss";

const Header = () => {
  const [textChange, setTextChange] = React.useState("CREATIVE");

  return (
    <React.Fragment>
      <div className={styles.mydivs}>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={styles.EpicHader}>
                  <div className={styles.logos}>
                    <Image
                      src="/epic global/WhatsApp Image 2022-10-04 at 1.22.31 PM.png"
                      height={45}
                      width={215}
                    />
                  </div>
                  <div className={styles.mydiv1}>
                    <ul>
                      <Link href={"/home-hader"}>
                        <li>Home</li>
                      </Link>
                      <Link href={"/marketing"}>
                        <li>Marketing</li>
                      </Link>
                      <Link href={"/devlepment"}>
                        <li>Development</li>
                      </Link>
                      <Link href={"/case-studio"}>
                        <li>Case Studies</li>
                      </Link>
                      <Link href={"/case-studio"}>
                        <li>Company</li>
                      </Link>
                      <Link href={"/seo-analysis"}>
                        <li>Seo Analysis</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className={styles.bannerheading}>
                  <ul>
                    <li>
                      <Image
                        src="/epic global/facebook-app-symbol.png"
                        height={28}
                        width={15}
                      />
                    </li>
                    <li>
                      <Image
                        src="/epic global/twitter.png"
                        height={28}
                        width={15}
                      />
                    </li>
                    <li>
                      <Image
                        src="/epic global/linkedin.png"
                        height={28}
                        width={15}
                      />
                    </li>
                  </ul>

                  <h1>
                    WE ARE{" "}
                    <strong
                      onMouseLeave={() => setTextChange("CREATIVE")}
                      onMouseEnter={() => setTextChange("INNOVATIVE")}
                    >
                      {textChange}
                    </strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
