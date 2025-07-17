import React from "react";
import { useState } from "react";

const GenerateBarcode = () => {
  const [list, setList] = useState([
    {
      send_date: "11/07/2025",
      DNID: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0257"],
    },
    {
      send_date: "11/07/2025",
      DNID: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0257"],
    },
  ]);

  const listContentComp = list.map((v) => {
    const { send_date, DNID } = v;
    const dnComp = DNID.map((v) => {
      return (
        <div className="flex flex-row justify-between">
          <div className="bg-yellow-500 w-9/12 flex justify-center content-center">{v}</div>
          <div className="flex flex-row">
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      );
    });

    return (
      <>
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          {send_date}
        </li>

        <li className="list-col">{dnComp}</li>
      </>
    );
  });

  return (
    <>
      <label className="input">
        <span className="label">Delivery Date</span>
        <input type="date" />
      </label>

      <label className="floating-label">
        <span>SJ ID</span>
        <input
          type="text"
          placeholder="YYYY/MM/NNNN"
          className="input input-md"
        />
      </label>

      <ul className="list bg-base-100 rounded-box shadow-md overflow-auto max-h-9/12 min-h-9/12">
        {listContentComp}
      </ul>
    </>
  );
};

export default GenerateBarcode;
