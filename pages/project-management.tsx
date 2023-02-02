import React from "react";
import css from "../styles/project.module.scss";
import Image from "next/image";

const ProjectManagement = () => {
  return (
    <div className={css["project-parent"]}>
      <Image
        src={"/project.jpg"}
        alt={"project management"}
        width={1200}
        height={700}
      ></Image>
      <div className={`${css["project-management"]} container2 mcenter`}>
        <div className={`${css["first-block"]} `}>
          <h1>Project Management </h1>
          <p>
            Epic Global is an international consulting and project management
            firm that offers a wide range of services designed to help clients
            achieve their project goals. With offices in the Canada, UAE, India
            and the United Kingdom, Epic Global is a full-service firm that
            specializes in project management, program management, change
            management, and organizational development. Our team of experienced
            professionals provides the industry’s most comprehensive and
            effective project management services.
          </p>
        </div>
        <div className={css["second-block"]}>
          <h2>
            Building Successful Projects Through Effective Communication,
            Collaboration, and Trust.
          </h2>
          <p>
            At Epic Global, we believe that successful project management is
            built on a foundation of effective communication, collaboration, and
            trust. Our project managers are adept at facilitating conversations
            and negotiating agreements that ensure everyone is on the same page.
            We strive to foster a positive working environment and a culture of
            success to ensure projects are completed on time and on budget.
          </p>
        </div>
        <div className={css["management-image"]}>
          <Image
            src={"/management.jpg"}
            alt={"management image"}
            width={1000}
            height={700}
          ></Image>
        </div>
        <div className={css["paragraph-partition"]}>
          <div className={css["left-partition"]}>
            <h2>How We Works?</h2>
            <p>
              We understand that every project is unique and requires
              specialized attention. That’s why our project managers are highly
              flexible and agile, able to quickly address any potential issues
              and pivot when needed. We also use the latest technologies and
              tools to ensure our clients have access to the most up-to-date
              information and progress.
            </p>
          </div>
          <div className={css["right-partition"]}>
            <h2>Commitment Is Everything!</h2>
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
        <div className={css["bottom-paragraph"]}>
          <h2>Integrated Project Management Approach at Epic Global.</h2>
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

        <Faq />
      </div>
    </div>
  );
};

export default ProjectManagement;
export function Faq() {
  return (
    <div className={css["Faq-section"]}>
      <h2>Frequently Asked Questions (FAQ's)</h2>
      <h4>Q: What services does Epic Global offer?</h4>
      <p>
        Epic Global offers a variety of project management services, including
        project planning, project management consulting, project support,
        project administration, and project control.
      </p>
      <h4>
        Q: What makes Epic Global's project management services stand out?
      </h4>
      <p>
        Epic Global stands out in the project management industry by offering
        experienced and knowledgeable project management consultants and the
        most comprehensive project management tools and techniques.
      </p>
      <h4>Q: What experience does Epic Global have with project management?</h4>
      <p>
        Epic Global has over 10 years of experience in providing project
        management services to its clients.
      </p>
      <h4>Q: How does Epic Global ensure successful project management?</h4>
      <p>
        Epic Global utilizes best practices and its consultants are certified in
        project management to ensure successful project management.
      </p>
      <h4>
        Q: What types of project management services does Epic Global offer?
      </h4>
      <p>
        Epic Global offers services such as project scheduling and budgeting,
        risk management, requirements gathering, change management, and
        stakeholder management.
      </p>
    </div>
  );
}
