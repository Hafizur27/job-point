import React from "react";
import { CurrencyBangladeshiIcon, MapPinIcon } from "@heroicons/react/24/solid";

const SingleJob = ({ singleJob }) => {
  const { id, logo, title, owner, job, location, workTime, salary } = singleJob;

  return (
    <div className="border-2 rounded-lg p-2 border-zinc-400 h-fit">
      <img className="w-1/3 h-1/3 rounded-md mb-4" src={logo} alt="" />
      <h3 className="font-semibold text-xl">{title}</h3>
      <h5 className="text-slate-400 font-semibold mb-2">{owner}</h5>
      <button className="text-cyan-400 border-cyan-400 border rounded px-2 py-1">
        {job}
      </button>
      <button className="ms-3 text-cyan-400 border-cyan-400 border rounded px-2 py-1">
        {workTime}
      </button>
      <div className="flex gap-2 my-2">
        <MapPinIcon className="h-6 w-6 text-slate-400" />
        <p className="text-slate-400"> {location}</p>
      </div>
      <div className="flex gap-3 mb-2">
        <CurrencyBangladeshiIcon className="h-6 w-6 text-slate-400" />
        <p className="text-slate-400">{salary}</p>
      </div>
      <button className="bg-cyan-400 rounded text-white py-1 px-2 ">
        View Details
      </button>
    </div>
  );
};

export default SingleJob;
