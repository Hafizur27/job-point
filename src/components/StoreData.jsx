import React from "react";
import { Link } from "react-router-dom";
import { CurrencyBangladeshiIcon, MapPinIcon } from "@heroicons/react/24/solid";

const StoreData = ({ storeData, handelRemoteBtn }) => {
  const { logo, title, owner, job, location, workTime, salary, quantity, id } =
    storeData;

  return (
    <div>
      
      <div className="md:flex items-center justify-between mt-11 mb-4">
        <img className="w-1/4 h-1/4 rounded-md" src={logo} alt="" />
        <div>
          <h3 className="font-semibold text-xl ">{title}</h3>
          <h5 className="text-slate-400 font-semibold my-3">{owner}</h5>
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
          <p>
            <span className="text-sm font-bold">Applied :</span>{" "}
            <span className="text-slate-500">{quantity} Times</span>{" "}
          </p>
        </div>
        <div>
          <Link to={`/details/${id}`}>
            <button className="btn-primary ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreData;
