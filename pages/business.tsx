import React from "react";
import css from "../styles/business.module.scss";
import Image from "next/image";
const BusinessProcess = () => {
  return (
    <div className={css["cover-page"]}>
      <div className={`${css["top-section"]}`}>
        <div className={`${css["top-parent"]} mcenter container2`}>
          <div className={`${css["top-left"]}`}>
            <h1>Business Process Services</h1>
            <p>
              Epic Global is a leading provider of Business Process Services
              (BPS). Our comprehensive suite of services covers the entire range
              of business needs, from process engineering and automation to
              delivery assurance, optimization and analytics. We provide our
              clients with end-to-end solutions that help them to run more
              efficiently and maximize their profitability.
            </p>
          </div>

          <div className={`${css["top-right"]}`}></div>
        </div>
      </div>
      <div className={`${css["business-parent"]} container2 mcenter`}>
        <div className={`${css["first-card"]}`}>
          <div className={`${css["first-left"]}`}>
            <p>
              At Epic Global, we understand the complexities of business
              processes and the challenges that companies face when trying to
              manage them. That’s why we offer a comprehensive suite of services
              that are tailored to meet our clients’ unique needs and
              objectives. Our team of experienced professionals have the
              expertise to create custom solutions that are tailored to the
              specific requirements of each client.
            </p>
          </div>
          <div className={`${css["first-right"]}`}>
            <div className={`${css["FirstCard-image"]}`}>
              <Image
                src={"/support.jpg"}
                alt={"card-image"}
                width={1200}
                height={1200}
              ></Image>
            </div>
          </div>
        </div>
        <div className={`${css["second-card"]}`}>
          <div className={`${css["second-left"]}`}>
            <div className={`${css["SecondCard-image"]}`}>
              <Image
                src={"/support.jpg"}
                alt={"card-image"}
                width={1200}
                height={1200}
              ></Image>
            </div>
          </div>
          <div className={`${css["second-right"]}`}>
            <p>
              We have extensive experience in process engineering, automation,
              and delivery assurance. Our process engineering services involve
              the design, implementation and optimization of business processes.
              We use our expertise to identify areas for improvement, create
              efficient processes, and develop strategies for greater
              efficiency. Our automation services include the use of robotic
              process automation (RPA) to automate repetitive processes and
              tasks. This allows organizations to eliminate manual labour and
              reduce operational costs.
            </p>
          </div>
        </div>
        <div className={`${css["third-card"]}`}>
          <div className={`${css["third-left"]}`}>
            <p>
              For delivery assurance, we use data-driven analytics to monitor
              and measure the performance of business processes. Our analytics
              team can provide invaluable insights into the effectiveness of
              processes and help to identify areas for improvement. We also
              provide optimization services to help clients maximize the
              efficiency of their processes.
            </p>
          </div>
          <div className={`${css["third-right"]}`}>
            <div className={`${css["ThirdCard-image"]}`}>
              <Image
                src={"/support.jpg"}
                alt={"card-image"}
                width={1200}
                height={1200}
              ></Image>
            </div>
          </div>
        </div>
        <div className={`${css["fourth-card"]}`}>
          <div className={`${css["fourth-left"]}`}>
            <div className={`${css["FourthCard-image"]}`}>
              <Image
                src={"/support.jpg"}
                alt={"card-image"}
                width={1200}
                height={1200}
              ></Image>
            </div>
          </div>
          <div className={`${css["fourth-right"]}`}>
            <p>
              At Epic Global, we are committed to providing the best services
              for business process services. We strive to provide our clients
              with innovative solutions that are tailored to their specific
              needs. Our team of experienced professionals are dedicated to
              delivering top-notch solutions that help our clients run more
              efficiently and maximize their profitability. With our
              comprehensive suite of services, we can help you create a more
              efficient and profitable business.
            </p>
          </div>
        </div>
        <div className={`${css["process-list"]}`}>
          <h1>Why Business Process Services?</h1>
          <p>
            Business process services can be used to manage a variety of
            processes, including:
          </p>
          <div className={`${css["list-item"]}`}>
            <div className={`${css["left-list"]}`}>
              <ul>
                <li> -Back office services</li>
                <li> -Sales process</li>
                <li> -Order Processing</li>
                <li> -Supply chain management</li>
                <li> -Document Management</li>
                <li> -E-Commerce Support Services</li>
                <li> -Underwriting processes</li>
              </ul>
            </div>
            <div className={`${css["right-list"]}`}>
              <ul>
                <li> -Inside sales processes</li>
                <li> -Verification processes</li>
                <li> -Lead generation processes</li>
                <li> -Mobile entertainment content delivery</li>
                <li> -Platform Development –IT development</li>
                <li> -The Benefits of Business Process Services</li>
              </ul>
            </div>
          </div>
          <div className={`${css["single-list"]}`}>
            <h2>
              Business process services offer a number of benefits to the
              organizations, including:
            </h2>
            <ul>
              <li>
                <strong>Improved efficiency:</strong> BPS helps organizations
                reduce the time and effort required to complete routine tasks,
                allowing them to focus on more strategic initiatives.
              </li>
              <li>
                <strong>Reduced costs:</strong> By outsourcing mundane,
                repetitive tasks, organizations can reduce staffing costs and
                free up resources to focus on other areas.
              </li>
              <li>
                <strong>Improved cash flow:</strong> By streamlining processes
                and automating manual tasks, organizations can increase cash
                flow and improve their financial performance.
              </li>
              <li>
                <strong>Improved compliance:</strong> BPS helps organizations
                stay compliant with regulations and industry standards.
              </li>
              <li>
                <strong>Increased scalability:</strong> BPS helps organizations
                quickly and easily scale up or down in response to changing
                customer needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcess;
