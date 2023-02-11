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
  return (
    <div className="parent">
      <div
        className="container"
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
      </div>
    </div>
  );
};
export default PostWidget;
