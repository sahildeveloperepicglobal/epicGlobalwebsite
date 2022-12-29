import Image from "next/image";
import useSticky from "hooks/use-sticky";
import css from "../styles/header.module.scss";

const Header = () => {
  const [sticky, ref] = useSticky<HTMLDivElement>();

  console.log(sticky);
  return (
    <div ref={ref} className={css["Header-parent"]}>
      <div className={css["header"]}>
        <div className={css["header-left"]}>
          <ul>
            {sticky ? (
              <p>Simple</p>
            ) : (
              <li>
                <Image
                  src={"/epic-logo.png"}
                  height={50}
                  width={250}
                  alt="logo"
                ></Image>
              </li>
            )}
          </ul>
        </div>

        <div className={css["header-right"]}>
          <ul>
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
