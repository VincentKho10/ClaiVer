import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import GenerateBarcode from "./GenerateBarcode";
import ShowBarcode from "./ShowBarcode";
import DrawerComponent from "../Components/DrawerComponent";
import NavBarComponent from "../Components/NavBarComponent";
import TableComponent from "../Components/TableComponent";
import HomeContentSection from "./HomeContentSection";
import MenuComponent from "../Components/MenuComponent";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-full">
      <div className={"w-auto flex"}>
        <DrawerComponent isOpen={isOpen} menus={()=><MenuComponent />}/>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="h-1/12">
          <NavBarComponent
            title={"Claiver"}
            menuCallb={() => setIsOpen(!isOpen)}
          />
        </div>

        <HomeContentSection />
      </div>
    </div>
  );
};

export default Home;
