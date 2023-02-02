import CloseIcon from "icons/CloseIcon";
import MenuIcon from "icons/MenuIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import css from "../styles/header.module.scss";

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = React.useState(false);

  const onToggle = () => {
    // if (toggleNavbar === false) {
    //   setToggleNavbar(true);
    // } else {
    //   setToggleNavbar(false);
    // }

    setToggleNavbar(!toggleNavbar);
  };

  console.log(toggleNavbar);
  return (
    <div className={css["Header-parent"]}>
      <div className={css["header"]}>
        <div className={css["header-left"]}>
          <ul>
            <li>
              <Link href={"/"} className={css["a"]}>
                <Image
                  src={"/epic-logo.png"}
                  height={50}
                  width={250}
                  alt="logo"
                ></Image>
              </Link>
            </li>
          </ul>
        </div>

        <div className={css["header-right"]}>
          <ul className={css["nav-bar"]} onClick={onToggle}>
            {toggleNavbar ? <CloseIcon /> : <MenuIcon />}
            {/* <a className={css["nav-anchor"]}>
              <li></li>
              <li></li>
              <li></li>
            </a> */}
          </ul>
          <ul
            className={`${css["mobile-view"]} ${
              toggleNavbar ? css["show"] : css["hide"]
            }`}
          >
            <Link href="business" className={css["a"]}>
              <li>Business Process Services</li>
            </Link>

            <Link href="project-management" className={css["a"]}>
              <li>Project Management</li>
            </Link>

            <Link href="design" className={css["a"]}>
              <li>Design & Development</li>
            </Link>

            <Link href="marketing" className={css["a"]}>
              <li>Online Marketing</li>
            </Link>

            <Link href="contact-us" className={css["a"]}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
