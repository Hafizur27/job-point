import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import banner from "../../public/banner.json";
import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";
import SingleJob from "./SingleJob";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("categoryData.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handelShowAll = () => {
    setShowAll(true);
  };

  const allJobsData = useLoaderData();

  return (
    <div className="w-5/6 mx-auto">
      <div className="md:flex justify-between mt-11 gap-4">
        <div>
          <h1 className="text-5xl font-bold mb-6 w-5/6">
            One Step Closer To Your{" "}
            <span className="text-cyan-400">Dream Job</span>
          </h1>
          <p className="text-lg mb-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div>
          <Lottie className="w-fit h-fit" animationData={banner} loop={true} />
        </div>
      </div>
      <div className="my-11 text-center">
        <h3 className="font-bold text-4xl mb-6">Job Category List</h3>
        <p className="font-thin">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-3">
        {category.map((singleData, index) => (
          <SingleData key={index} singleData={singleData}></SingleData>
        ))}
      </div>
      <div className="my-11 text-center">
        <h3 className="font-bold text-4xl mb-6">Featured Jobs</h3>
        <p className="font-thin">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {allJobsData.slice(0, showAll ? 6 : 4).map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>

      <div className="flex justify-center my-6">
        {!showAll && (
          <button onClick={handelShowAll} className="btn-primary">
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
