import { Link, useLoaderData, useParams } from "react-router-dom";
import { CurrencyBangladeshiIcon, MapPinIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakeData";

const JobDetails = () => {
  const { detailsId } = useParams();
  const allDetails = useLoaderData();

  const singleData = allDetails.find((fd) => fd.id == detailsId);
  const {
    description,
    responsibility,
    education,
    experiences,
    salary,
    title,
    contact,
    location,
    id
  } = singleData;

  const handelAppliedJob = (id) =>{
    addToDb(id)
  }

  return (
    <div className="w-5/6 mx-auto mt-14 md:flex gap-4">
      <div className="basis-2/3">
        <h3 className="text-zinc-600 mb-3">
          <span className="text-black font-bold text-lg">
            Job Description :{" "}
          </span>
          {description}
        </h3>
        <h3 className="text-zinc-600 mb-3">
          <span className="text-black font-bold text-lg">
            Job Responsibility :{" "}
          </span>
          {responsibility}
        </h3>
        <h3 className="font-bold text-lg mb-3">Educational Requirements :</h3>
        <p className="mb-3 text-zinc-600">{education}</p>
        <h3 className="font-bold text-lg mb-3">Experience :</h3>
        <p className="text-zinc-600">{experiences}</p>
      </div>
      <div className="basis-1/4 bg-cyan-50 p-4 rounded-md mt-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">Job Details</h3>
          <div className="flex gap-3 items-center">
            <CurrencyBangladeshiIcon className="h-6 w-6 text-cyan-400" />
            <h4 className="text-lg font-semibold mb-2">
              salary: <span className="text-zinc-700 text-sm">{salary}</span>
            </h4>
          </div>
          <div className="flex gap-3 items-center">
            <CalendarDaysIcon className="h-6 w-6 text-cyan-400" />
            <h4 className="text-lg font-semibold">
              {" "}
              Job-Title: <span className="text-zinc-700 text-sm">{title}</span>
            </h4>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-4">Contact Information</h3>
          <div className="flex gap-3 items-center">
            <PhoneIcon className="h-6 w-6 text-cyan-400" />
            <h4 className="text-lg font-semibold">
              Phone:{" "}
              <span className="text-zinc-700 text-sm">{contact.phone}</span>
            </h4>
          </div>
          <div className="flex gap-3 items-center">
            <EnvelopeIcon className="h-6 w-6 text-cyan-400" />
            <h4 className="text-lg font-semibold my-2">
              Email:{" "}
              <span className="text-zinc-700 text-sm">{contact.email}</span>
            </h4>
          </div>
          <div className="flex gap-3 items-center">
            <MapPinIcon className="h-6 w-6 text-cyan-400" />
            <h4 className="text-lg font-semibold mb-2">
              Address: <span className="text-zinc-700 text-sm">{location}</span>
            </h4>
          </div>
        </div>
        <Link to='/appliedJob'><button onClick={()=>handelAppliedJob(id)} className="bg-cyan-400 text-white rounded-lg px-4 py-2 font-semibold text-xl w-full h-fit mt-2">
          Apply Now
        </button></Link>
      </div>
    </div>
  );
};

export default JobDetails;
