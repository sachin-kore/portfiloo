import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import sachin from "../../assets/images/sachin-bio-pic.jpeg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={sachin}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi Myself Sachin having Experienced in Frontend Web
                Development with over 3+ years of
                hands-on experse in designing,
                developing, and maintaining
                responsive web applicaons.
                Proficient in HTML5, CSS3,
                JavaScript, and modern JS
                libraries/frameworks like React.js.
                Strong understanding of UI/UX
                principles, cross-browser
                compability, and mobile-first
                design. Familiar with backend
                technologies including Node.js and
                MongoDB, enabling
                comprehensive full-stack
                development capabilies. Proven
                ability to collaborate effecvely in
                teams to deliver high-quality
                soware soluons. Having basic
                knowledge of Cloud like Amazon
                Web Services. Basic Knowledge of
                Data Structures like Linked List,
                Stacks, Queues, Trees.


              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
