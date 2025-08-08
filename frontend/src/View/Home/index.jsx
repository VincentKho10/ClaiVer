import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import GenerateBarcode from "./GenerateBarcode";
import ShowBarcode from "./ShowBarcode";
import DrawerComponent from "../Components/DrawerComponent";
import NavBarComponent from "../Components/NavBarComponent";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-row">
      <DrawerComponent isOpen={isOpen} />
      <div className="w-full">
        <NavBarComponent title={"Claiver"} menuCallb={()=>setIsOpen(!isOpen)}/>
      </div>
    </div>
  );
};

export default Home;
