import CloseIcon from "icons/CloseIcon";
import MenuIcon from "icons/MenuIcon";
import Image from "next/image";
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
              <Image
                src={"/epic-logo.png"}
                height={50}
                width={250}
                alt="logo"
              ></Image>
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
            <a href="">
              <li>Business Process Services</li>
            </a>

            <a href="">
              <li>Project Management</li>
            </a>

            <a href="">
              <li>Design & Development</li>
            </a>

            <a href="">
              <li>Online Marketing</li>
            </a>

            <a href="">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
