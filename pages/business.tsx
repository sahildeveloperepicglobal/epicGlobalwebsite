import React from "react";
import css from "../styles/business.module.scss";
import Image from "next/image";
import AddIcon from "icons/add";

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
        {/* faq start  */}
        <div className="faq">
          <div className="col-md-12">
            {FAQArray.map((data, index) => (
              <FAQList key={index} index={index} {...data} />
            ))}
          </div>
        </div>
        {/* faq end  */}
      </div>
    </div>
  );
};
const FAQArray = [
  {
    question: `Q: What is business process services?`,
    answer: ` Business process services (BPS) is a form of business outsourcing that focuses on improving the efficiency and effectiveness of a company’s internal processes. BPS providers offer a range of services that help companies to streamline and automate processes, improve customer service and reduce costs. These services may include process analysis, process design, process implementation, process monitoring and process optimization.`,
  },
  {
    question: "Q: What are the benefits of business process services?",
    get answer() {
      return "Business process services help companies to improve efficiency and reduce costs. They can also help to improve customer service and satisfaction by streamlining processes and automating manual tasks. By outsourcing process-related activities, companies can focus on their core business, freeing up resources and increasing productivity.";
    },
  },
  {
    question: "Q: How does business process services work?",
    get answer() {
      return "Business process services involve a range of activities that help companies to improve their internal processes. This may include process analysis, process design, process implementation, process monitoring and process optimization. BPS providers use the latest technology and tools to analyze and optimize processes, helping companies to increase efficiency and reduce costs";
    },
  },
  {
    question: "Q: What types of business process services are available?",
    get answer() {
      return "Business process services can include a range of activities, such as process analysis, process design, process implementation, process monitoring and process optimization. BPS providers offer a variety of services to help companies optimize their internal processes, such as automation, cloud computing, analytics and data mining.";
    },
  },
  {
    question: "Q: How much do business process services cost?",
    get answer() {
      return "The cost of business process services depends on the type of service and the complexity of the process. BPS providers typically charge a fee for their services, which may range from a few hundred to several thousand dollars.";
    },
  },
  {
    question:
      "Q: Are there any risks associated with business process services?",
    get answer() {
      return "As with any outsourced service, there are risks associated with business process services. These include the risk of data loss, the risk of inadequate process analysis or design, and the risk of inadequate process implementation or monitoring. It is important to carefully evaluate the risks and benefits of any BPS provider before engaging them.";
    },
  },
  {
    question: "Q: What qualifications do BPS providers need to have?",
    get answer() {
      return "Business process services providers should have experience in the field and be knowledgeable about the latest processes and technologies. They should also be certified in relevant areas and have the necessary skills and qualifications to carry out the required tasks effectively and efficiently.";
    },
  },
  {
    question: "Q: How can I find a reputable BPS provider?",
    get answer() {
      return ": It is important to do your research when choosing a BPS provider. You can read customer reviews or ask for recommendations from colleagues or other professionals. It is also a good idea to request a sample of their work to ensure that they are experienced and knowledgeable in the areas you need.";
    },
  },
  {
    question: "Q: What should I look for in a BPS provider?",
    get answer() {
      return "When choosing a BPS provider, it is important to ensure that they have the necessary skills and experience to carry out the required tasks effectively and efficiently. You should also ensure that they can provide the latest processes and technologies and that they are certified in relevant areas.";
    },
  },
  {
    question:
      "Q: How long does it take to implement business process services?",
    get answer() {
      return "The length of time it takes to implement business process services depends on the complexity of the process and the experience and skills of the provider. Generally, it can take anywhere from a few weeks to several months. It is important to discuss your timeline with the BPS provider before engaging them to ensure that they can meet your expectations.";
    },
  },
];

const FAQList = ({ question, answer, index }: any) => {
  const [isOpen, setOpen] = React.useState(index === 0 || false);
  const onClickButton = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <ul onClick={onClickButton}>
        <li className="heading">
          {" "}
          <div className="icon">
            <AddIcon
              style={{
                transform: `rotate(${isOpen ? "45deg" : "90deg"})`,
                transition: "all 150ms ease",
                fill: "#000000",
              }}
            />
          </div>
          <h4>{question}</h4>
        </li>
        <li
          className="contanttext"
          style={{
            maxHeight: isOpen ? "200px" : "0px",
            overflow: "hidden",
            transition: "all 150ms ease",
            padding: 0,
            marginTop: "15px",
            color: "#838383",
          }}
        >
          <p>{answer}</p>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default BusinessProcess;
