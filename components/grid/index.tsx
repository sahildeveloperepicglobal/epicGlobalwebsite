import React from "react";
import css from "../../styles/grid.module.scss";
import Image from "next/image";

const Grid = () => {
  return (
    <div className={`${css["grid-container"]} container2 mcenter`}>
      <h2>New At Epic Global Blog</h2>
      <div className={`${css["grid-template"]} `}>
        <div className={css["left-grid"]}>
          <Image
            src={"/Affordable.jpg"}
            alt="latest updates"
            height={1200}
            width={1200}
          ></Image>
        </div>
        <div className={css["right-grid"]}>
          <div className={css["right-parent"]}>
            <div className={css["right-image"]}>
              <Image
                src={"/Affordable.jpg"}
                alt="latest updates"
                height={300}
                width={300}
              ></Image>
            </div>
            <div className={css["right-text"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus vitae totam voluptates numquam itaque,
              </p>
            </div>
          </div>
          <div className={css["right-bottom"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              vitae totam voluptates numquam itaque, rem accusamus dolore,
              distinctio enim possimus, explicabo esse culpa quod vero maxime?
              Molestiae aliquam exercitationem facilis dolorum animi, provident
              atque odio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
