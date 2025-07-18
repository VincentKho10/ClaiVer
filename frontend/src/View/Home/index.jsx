import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import GenerateBarcode from "./GenerateBarcode";
import ShowBarcode from "./ShowBarcode";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-base-300">
      <div className="flex flex-col h-7/12 min-w-80 w-7/12 card shadow-sm p-4 bg-base-100">
        <div className="flex flex-row text-center font-semibold h-1/12">
          <Link
            to={""}
            className="flex-1/2 pt-2.5 pb-3 hover:animate-pulse shadow-md card bg-primary-200 text-base-content"
          >
            Generate
          </Link>
          <div className="divider-horizontal divider"></div>
          <Link
            to={"show"}
            className="flex-1/2 pt-2.5 pb-3 hover:animate-pulse shadow-accent-content card bg-primary-200 text-base-content"
          >
            Show
          </Link>
        </div>
        <div className="flex flex-row h-11/12">
          <div className="flex-1/2 flex flex-col justify-between p-4">
            <div className="h-11/12 flex flex-col justify-between pb-3">
              <Routes>
                <Route index element={<GenerateBarcode />} />
                <Route path="show" element={<ShowBarcode />} />
              </Routes>
            </div>
            <div className="flex flex-row justify-end h-1/12">
              <button className="btn btn-primary mr-4 h-full">Submit</button>
              <button className="btn btn-secondary h-full">Clear</button>
            </div>
          </div>
          <div className="flex-1/2">test</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
