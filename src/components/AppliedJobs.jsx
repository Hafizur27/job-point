import React from "react";
import { getStoredJob } from "../utilities/fakeData";
import { useLoaderData } from "react-router-dom";
import StoreData from "./StoreData";

const AppliedJobs = () => {
  const allData = useLoaderData();
  let data = [];
  const appliedJob = getStoredJob();

  for (const id in appliedJob) {
    const findJob = allData.find((fj) => fj.id == id);
    if (findJob) {
      findJob.quantity = appliedJob[id];
      data.push(findJob);
    }
  }
  return (
    <div className="w-5/6 mx-auto">
      <div>
        {data.length
          ? data.map((storeData) => <StoreData key={storeData.id} storeData={storeData}></StoreData>)
          : "No one has applied for job "}
      </div>
    </div>
  );
};

export default AppliedJobs;
