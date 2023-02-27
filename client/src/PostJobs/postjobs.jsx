import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./postjobs.css";
const JobSchema = yup.object().shape({
  companyName: yup.string().required("required"),
  experienceRequired: yup.string().required("required"),
  eligibilityCriteria: yup.string().required("required"),
  jobDescription: yup.string().required("required"),
  jobUrl: yup.string().required("required"),
  jobType: yup.string().required("required"),
  logoUrl: yup.string().required("required"),
});
const initialValueJob = {
  companyName: "",
  experienceRequired: "",
  eligibilityCriteria: "",
  jobDescription: "",
  jobUrl: "",
  jobType: "",
  logoUrl: "",
};
const PostJobs = () => {
  const [pageType, setPageType] = useState("post");
  const formwindow = pageType === "post";
  const formsubmitwindow = pageType === "post-done";
  const postjobs = async (values, onSubmitProps) => {
    const savedPostResponse = await fetch("http://localhost:3001/postjob", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const posted = await savedPostResponse.json();
    onSubmitProps.resetForm();
    if (posted) {
      setPageType("post-done");
    }
  };
  // const handleFormSubmit = async (values, onSubmitProps) => {
  //   await postjobs(values, onSubmitProps);
  // };
  return (
    <div className="post-cont">
      <div className="form-cont">
        {/* {formwindow && ( */}
        <Formik
          onSubmit={postjobs}
          initialValues={initialValueJob}
          validationSchema={JobSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="a-field">
                <label className="label">Company Name</label>
                <input
                  className="input-form"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.companyName}
                  name="companyName"
                  placeholder="ex- Amazon , Google"
                  error={
                    Boolean(touched.companyName) && Boolean(errors.companyName)
                  }
                  helperText={touched.companyName && errors.companyName}
                />
              </div>
              <div className="a-field">
                <label className="label">Job Type</label>
                <select
                  className="input-form"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.jobType}
                  name="jobType"
                  error={Boolean(touched.jobType) && Boolean(errors.jobType)}
                  helperText={touched.jobType && errors.jobType}
                >
                  <option value="" label="Select Job Type" />
                  <option value="Internship" label="Internship" />
                  <option value="Full time" label="Full time" />
                </select>
              </div>
              <div className="a-field">
                <label className="label">Experience Require</label>
                <select
                  className="input-form"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.experienceRequired}
                  name="experienceRequired"
                  error={
                    Boolean(touched.experienceRequired) &&
                    Boolean(errors.experienceRequired)
                  }
                  helperText={
                    touched.experienceRequired && errors.experienceRequired
                  }
                >
                  <option value="" label="Select Experience Require" />
                  <option value="Freshers" label="Freshers" />
                  <option value="Experienced" label="Experienced" />
                </select>
              </div>
              <div className="a-field">
                <label className="label">Eligibility Criteria</label>
                <input
                  className="input-form"
                  type="text"
                  label="Eligibility Criteria"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.eligibilityCriteria}
                  name="eligibilityCriteria"
                  placeholder="ex- BE/B.Tech, BCA"
                  error={
                    Boolean(touched.eligibilityCriteria) &&
                    Boolean(errors.eligibilityCriteria)
                  }
                  helperText={
                    touched.eligibilityCriteria && errors.eligibilityCriteria
                  }
                />
              </div>
              <div className="a-field">
                <label className="label">Job Description </label>
                <textarea
                  className="input-form"
                  rows="4"
                  cols="7"
                  type="text"
                  label="Company Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.jobDescription}
                  name="jobDescription"
                  placeholder="Job Responsibility"
                  error={
                    Boolean(touched.jobDescription) &&
                    Boolean(errors.jobDescription)
                  }
                  helperText={touched.jobDescription && errors.jobDescription}
                />
              </div>
              <div className="a-field">
                <label className="label">Job/Form Url</label>
                <input
                  className="input-form"
                  type="text"
                  label="Job/Form Url"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.jobUrl}
                  name="jobUrl"
                  // placeholder="ex- Amazon , Google"
                  error={Boolean(touched.jobUrl) && Boolean(errors.jobUrl)}
                  helperText={touched.jobUrl && errors.jobUrl}
                />
              </div>
              <div className="a-field">
                <label className="label">Website Url</label>
                <input
                  className="input-form"
                  type="text"
                  label="Website Url"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.logoUrl}
                  name="logoUrl"
                  // placeholder="ex- Amazon , Google"
                  error={Boolean(touched.logoUrl) && Boolean(errors.logoUrl)}
                  helperText={touched.logoUrl && errors.logoUrl}
                />
              </div>
              <button className="btn" type="submit">
                POST
              </button>
            </form>
          )}
        </Formik>
        {/* )} */}
      </div>
    </div>
  );
};

export default PostJobs;
