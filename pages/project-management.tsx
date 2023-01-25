import React from "react";
import css from "../styles/project.module.scss";
import Image from "next/image";
import AddIcon from "icons/add";

const ProjectManagement = () => {
  return (
    <div className={`${css["project-management"]} container2 mcenter`}>
      <div className={`${css["first-block"]} `}>
        <h1>Project Management </h1>
        <p>
          Epic Global is an international consulting and project management firm
          that offers a wide range of services designed to help clients achieve
          their project goals. With offices in the Canada, UAE, India and the
          United Kingdom, Epic Global is a full-service firm that specializes in
          project management, program management, change management, and
          organizational development. Our team of experienced professionals
          provides the industry’s most comprehensive and effective project
          management services.
        </p>
      </div>
      <SecondBlock />
      <ThirdBlock />
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
  );
};
const FAQArray = [
  {
    question: `Q: What services does Epic Global offer?`,
    answer: ` Epic Global offers a variety of project management services, including project planning, project management consulting, project support, project administration, and project control.`,
  },
  {
    question:
      "Q: What makes Epic Global's project management services stand out?",
    get answer() {
      return "Epic Global stands out in the project management industry by offering experienced and knowledgeable project management consultants and the most comprehensive project management tools and techniques. ";
    },
  },
  {
    question:
      "Q: What experience does Epic Global have with project management?",
    get answer() {
      return "Epic Global has over 10 years of experience in providing project management services to its clients.";
    },
  },
  {
    question: "Q: How does Epic Global ensure successful project management?",
    get answer() {
      return "Epic Global utilizes best practices and its consultants are certified in project management to ensure successful project management. ";
    },
  },
  {
    question:
      "Q: What types of project management services does Epic Global offer?",
    get answer() {
      return "Epic Global offers services such as project scheduling and budgeting, risk management, requirements gathering, change management, and stakeholder management.";
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
export default ProjectManagement;
export function SecondBlock() {
  return (
    <div className={`${css["second-block"]}`}>
      <div className={`${css["cards"]}`}>
        <div className={`${css["first-card"]}`}>
          <Image
            src={"/future.jpg"}
            alt={"card image"}
            width={400}
            height={400}
          ></Image>
          <p>
            At Epic Global, we believe that successful project management is
            built on a foundation of effective communication, collaboration, and
            trust. Our project managers are adept at facilitating conversations
            and negotiating agreements that ensure everyone is on the same page.
            We strive to foster a positive working environment and a culture of
            success to ensure projects are completed on time and on budget.
          </p>
        </div>
        <div className={`${css["second-card"]}`}>
          <Image
            src={"/future.jpg"}
            alt={"card image"}
            width={400}
            height={400}
          ></Image>
          <p>
            We understand that every project is unique and requires specialized
            attention. That’s why our project managers are highly flexible and
            agile, able to quickly address any potential issues and pivot when
            needed. We also use the latest technologies and tools to ensure our
            clients have access to the most up-to-date information and progress.
          </p>
        </div>
        <div className={`${css["third-card"]}`}>
          <Image
            src={"/future.jpg"}
            alt={"card image"}
            width={400}
            height={400}
          ></Image>
          <p>
            At Epic Global, we are committed to helping our clients achieve
            success. Our team of experienced professionals is dedicated to
            delivering the highest quality project management services in the
            industry. With our comprehensive approach, we provide the best
            project management services available. Contact us today to learn
            more about how Epic Global can help you reach your project goals.
          </p>
        </div>
      </div>
    </div>
  );
}
export function ThirdBlock() {
  return (
    <div className={`${css["third-block"]}`}>
      <div className={`${css["bottom-parent"]}`}>
        <div className={css["left-image"]}>
          <Image
            src={"/Affordable.jpg"}
            alt={"image"}
            width={500}
            height={500}
          ></Image>
        </div>
        <div className={css["right-paragraph"]}>
          <p>
            Epic Global takes an integrated approach to project management to
            ensure our clients get the best results. Our team of certified
            project managers is highly experienced in the full range of project
            management disciplines, from requirements gathering to project
            planning and execution. We employ a comprehensive suite of project
            management methodologies and tools to ensure our clients get maximum
            value from their projects.
          </p>
        </div>
      </div>
    </div>
  );
}
