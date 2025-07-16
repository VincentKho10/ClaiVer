import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col h-80 min-w-80 w-4/12 card bg-blue-300 shadow-sm">
        <div className="flex flex-row h-8 text-center font-semibold card-title">
          <Link to={"generate"} className="flex-1/2 pt-0.5 hover:animate-pulse">
            Generate
          </Link>
          <div className="divider divider-horizontal"></div>
          <Link to={"show"} className="flex-1/2 pt-0.5 hover:animate-pulse">
            Show
          </Link>
        </div>
        <div className="divider divider-vertical"></div>
        <div className="card-body">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
