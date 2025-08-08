import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import GenerateBarcode from "./GenerateBarcode";
import ShowBarcode from "./ShowBarcode";
import DrawerComponent from "../Components/DrawerComponent";
import NavBarComponent from "../Components/NavBarComponent";
import TableComponent from "../Components/TableComponent";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-full">
      <div className={"w-auto flex"}>
        <DrawerComponent isOpen={isOpen}/>
      </div>
      <div className="flex flex-col w-full h-full bg-red-500">
        <div className="h-1/12">
          <NavBarComponent
            title={"Claiver"}
            menuCallb={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className={" p-8 justify-center items-center h-11/12"}>
          <div
            className={
              "flex flex-row h-1/12 w-full items-center justify-between"
            }
          >
            <div className="pl-2">
              <div className="btn btn-success mr-2">Create</div>
            </div>
            <div className="">
              <div className="btn btn-success mr-2">Submit</div>
              <div className="btn btn-error mr-2">Delete</div>
            </div>
          </div>
          <div className="flex flex-col h-10/12 w-full">
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
