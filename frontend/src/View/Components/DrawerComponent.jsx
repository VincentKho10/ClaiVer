import React, { useEffect, useState } from "react";

const DrawerComponent = (props) => {
  const {isOpen} = props
  console.log(isOpen)

  return (
    <div className={"drawer "+(isOpen?"lg:drawer-open w-2/12 mr-2":"lg:drawer-close w-0")}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Generate Barcode</a>
          </li>
          <li>
            <a>Show Barcode</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerComponent;
