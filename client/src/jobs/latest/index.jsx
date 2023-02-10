import React, { useState, useEffect } from "react";
import PostWidget from "../../widgets/PostWidget";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs/latestjobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {jobs.map(
        ({
          companyName,
          experienceRequired,
          eligibilityCriteria,
          jobDescription,
          jobUrl,
          jobType,
          logoUrl,
        }) => (
          <PostWidget
            companyName={companyName}
            experienceRequired={experienceRequired}
            eligibilityCriteria={eligibilityCriteria}
            jobDescription={jobDescription}
            jobUrl={jobUrl}
            jobType={jobType}
            logoUrl={logoUrl}
          />
        )
      )}
    </div>
  );
};

export default LatestJobs;
