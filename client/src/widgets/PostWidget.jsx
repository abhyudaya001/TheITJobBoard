import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import "./index.css";
const PostWidget = ({
  companyName,
  experienceRequired,
  eligibilityCriteria,
  jobDescription,
  jobUrl,
  jobType,
  logoUrl,
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [animation, inView]);
  return (
    <div ref={ref} className="parent">
      <motion.div
        className="container"
        animate={animation}
        onClick={() => (window.location.href = jobUrl)}
      >
        <div className="l-container">
          <div className="c-name">
            <span className="c-title">Company Name : </span>
            {companyName}
          </div>
          <div className="c-exp">
            <span className="c-title">Experience Required : </span>
            {experienceRequired}
          </div>
          {/* <div className="c-elig">
          <p className="c-title">Eligibility Criteria :</p>
          {eligibilityCriteria}
        </div>
        <div className="c-jd">
          <p className="c-title">Job Description</p>
          {jobDescription}
        </div> */}
        </div>
        <div className="r-container">
          <img
            className="c-logo"
            src={"https://logo.clearbit.com/" + logoUrl}
            alt="logo"
          />
        </div>
      </motion.div>
    </div>
  );
};
export default PostWidget;
