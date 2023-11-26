"use client";
import React, { useState } from "react";
import Check from "./logos/Check";

const Page = () => {
  //   Compony link optional

  // Bond optional

  // job rsposibility optional

  // conformation link optional

  const [jobType, setJobType] = useState("Internship");
  const [companyName, setCompanyName] = useState("XYZ");
  const [jobRole, setJobRole] = useState("Job Role");
  const [jobLocation, setJobLocation] = useState("Job Location");
  const [jobDescription, setJobDescription] = useState("Job Description");
  const [jobResponsibilities, setJobResponsibilities] = useState(
    "Job Responsibilities"
  );
  const [jobSkills, setJobSkills] = useState("Job Skills");
  const [jobCTC, setJobCTC] = useState("Job CTC");
  const [jobBond, setJobBond] = useState("Job Bond");
  const [jobSelectionProcess, setJobSelectionProcess] = useState(
    "Job Selection Process"
  );
  const [jobEligibility, setJobEligibility] = useState("Job Eligibility");

  const [jobConfirmationLink, setJobConfirmationLink] = useState(
    "Job Confirmation Link"
  );
  const [jobRegistrationLink, setJobRegistrationLink] = useState(
    "Job Registration Link"
  );
  const [jobCompanyLink, setJobCompanyLink] = useState("Job Company Link");

  const [jobBranches, setJobBranches] = useState("Job Branches");

  const [jobNote, setJobNote] = useState("Job Note");

  const [branchYear, setBranchYear] = useState("Branch Year");

  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    setCopySuccess("Copied");
    setTimeout(() => {
      setCopySuccess("");
    }, 3000); // Reset the message after 2 seconds
  };

  const messageParts = [
    `*NOTICE FOR ${companyName.toUpperCase()} ${jobType.toUpperCase()} DRIVE FOR BATCH ${branchYear}*`,
    `This message is to inform students regarding ${companyName} ${jobType} drive.${jobDescription}`,
    jobCompanyLink && `*Company link:* ${jobCompanyLink}`,
    `*Branches:* ${jobBranches}`,
    `*Eligibility:*\n${jobEligibility}`,
    `*Job Role:* ${jobRole}`,
    `*Job Location:* ${jobLocation}`,
    `*CTC*: ${jobCTC}`,
    jobBond && `*Bond:* ${jobBond}`,
    jobResponsibilities && `*Job Responsibilities:* ${jobResponsibilities}`,
    `*Required Skills:* ${jobSkills}`,
    `*Selection Process:* ${jobSelectionProcess}`,
    `*Registration Link:* ${jobRegistrationLink}`,
    jobConfirmationLink && `*Confirmation Link:* ${jobConfirmationLink}`,
    `*Note:*\n${jobNote}`,

    `Regards,`,
    `TPC-RAIT`,
  ];

  const message = messageParts
    .filter(Boolean)
    .join("\n\n")
    .replace(/^-/gm, "•");
  const renderedMessage = message
    .replace(/\*(.*?)\*/g, "<b>$1</b>")
    .replace(/\n/g, "<br />");
  return (
    <div className="w-full h-full md:flex-row flex flex-col">
      <div className="left md:w-2/3 w-full h-fit p-4 overflow-y flex flex-col border-solid border-r-2 border-[#292929]">
        {/* company name */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Company Name:</span>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="px-2 py-1 text-white bg-primary mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0 "
            />
          </label>
          {/* job type */}
        </form>
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Type:</span>
            <input
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* batch */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Branch Year:</span>
            <input
              type="text"
              value={branchYear}
              onChange={(e) => setBranchYear(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* desc */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Description:</span>
            <textarea
              type="text"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
              rows="3"
            />
          </label>
        </form>
        {/* comp link */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Company Link:</span>
            <input
              type="text"
              value={jobCompanyLink}
              onChange={(e) => setJobCompanyLink(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* branches */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Branches:</span>
            <input
              type="text"
              value={jobBranches}
              onChange={(e) => setJobBranches(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* eligibility */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Eligibility:</span>
            <input
              type="text"
              value={jobEligibility}
              onChange={(e) => setJobEligibility(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* Role */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Role:</span>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* location */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Location:</span>
            <input
              type="text"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* CTC */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job CTC:</span>
            <input
              type="text"
              value={jobCTC}
              onChange={(e) => setJobCTC(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* Bond */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Bond:</span>
            <input
              type="text"
              value={jobBond}
              onChange={(e) => setJobBond(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* responsibility */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Responsibilities:</span>
            <textarea
              type="text"
              value={jobResponsibilities}
              onChange={(e) => setJobResponsibilities(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
              rows="3"
            />
          </label>
        </form>
        {/* skills */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Skills:</span>
            <input
              type="text"
              value={jobSkills}
              onChange={(e) => setJobSkills(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* selection */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Selection Process:</span>
            <input
              type="text"
              value={jobSelectionProcess}
              onChange={(e) => setJobSelectionProcess(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* reg link */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Registration Link:</span>
            <input
              type="text"
              value={jobRegistrationLink}
              onChange={(e) => setJobRegistrationLink(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* confirm link */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Confirmation Link:</span>
            <input
              type="text"
              value={jobConfirmationLink}
              onChange={(e) => setJobConfirmationLink(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
            />
          </label>
        </form>
        {/* note */}
        <form>
          <label className="block mt-4">
            <span className="text-gray-700">Job Note:</span>
            <textarea
              type="text"
              value={jobNote}
              onChange={(e) => setJobNote(e.target.value)}
              className=" px-2 py-1 text-white bg-primary  mt-1 block w-full rounded-sm bg-gray-100 border-transparent focus:border-[#292929] focus:bg-[#203646] focus:ring-0"
              rows="3"
            />
          </label>
        </form>
      </div>
      <div
        className="right md:w-1/3 w-full h-full p-4 flex flex-col gap-4"
        style={{
          minWidth: "300px",
        }}
      >
        <span className="text-xl font-semibold text-white">Preview</span>
        <div
          className="bg-[#005c4b] p-4 rounded shadow text-white text-sm"
          dangerouslySetInnerHTML={{ __html: renderedMessage }}
        />
        <button
          onClick={copyToClipboard}
          className={`mt-4 px-4 py-2 text-white rounded hover:scale-105 transition-all ease-in-out active:scale-95  ${
            copySuccess ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {copySuccess ? <Check /> : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Page;
