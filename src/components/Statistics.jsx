import React from "react";
import { ComposedChart,Line,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A-1",
      mark: 60,
      result: 57,
    },
    {
      name: "A-2",
      mark: 60,
      result: 59,
    },
    {
      name: "A-3",
      mark: 60,
      result: 60,
    },
    {
      name: "A-4",
      mark: 60,
      result: 58,
    },
    {
      name: "A-5",
      mark: 60,
      result: 53,
    },
    {
      name: "A-6",
      mark: 60,
      result: 42,
    },
    {
      name: "A-7",
      mark: 60,
      result: 60,
    },
    {
      name: "A-8",
      mark: 60,
      result: 60,
    },
  ];
  return (
    <>
    <div className="mt-8 flex justify-center">
      <div style={{ minWidth: "350px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="mark" barSize={20} fill="#1b72e3" />
            <Line type="monotone" dataKey="result" stroke="#09e014" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
    <h2 className=" mt-2 text-3xl font-bold text-center">
      Assignment <span className="text-red-500">Analytics</span>
    </h2>
  </>
  );
};

export default Statistics;
