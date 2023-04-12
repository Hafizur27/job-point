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
  const handelRemoteBtn = () =>{
    if(data.length > 0){
      const filterRemoteData = data.filter(fd => fd.job=="remote");
      console.log(filterRemoteData)
    }
  }
  return (
    <div className="w-5/6 mx-auto">
      <div className="mt-11 md:flex md:justify-end">
        <button onClick={()=>handelRemoteBtn()} className="ms-3 text-cyan-400 border-cyan-400 border rounded px-2 py-1">
          Remote
        </button>
        <button className="ms-3 text-cyan-400 border-cyan-400 border rounded px-2 py-1">
          Onsite
        </button>
      </div>
      
      <div>
        {data.length
          ? data.map((storeData) => <StoreData key={storeData.id} storeData={storeData} handelRemoteBtn={handelRemoteBtn}></StoreData>)
          : "No one has applied for job "}
      </div>
    </div>
  );
};

export default AppliedJobs;
