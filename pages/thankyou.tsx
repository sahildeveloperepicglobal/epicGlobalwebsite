import Link from "next/link";
import React from "react";
import css from "../styles/thanks.module.scss";
const thankyou = () => {
  return (
    <div className={'${css["container"] mcenter'}>
      <div className={css["thankyou"]}>
        <h2>
          Thank You For Contact Us
          <br />
          We Will Connect You Withing 24 Hours..!!
        </h2>
        <Link href={"/"} className={css["a"]}>
          Back To HomePage
        </Link>
      </div>
    </div>
  );
};

export default thankyou;
