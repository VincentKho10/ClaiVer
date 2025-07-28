import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import GenerateBarcode from "./GenerateBarcode";
import ShowBarcode from "./ShowBarcode";

let isSelectAll = false;
const Home = () => {
  const [delivhist, setDelivHist] = useState([
    {
      "Delivery Date": "2025-07-11",
      "DN Count": 4,
      data: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0257"],
    },
    {
      "Delivery Date": "2025-07-12",
      "DN Count": 4,
      data: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0277"],
    },
  ]);

  const [selectState, setSelectState] = useState({});

  const selectHandle = (id) => {
    const dd = delivhist[id]["Delivery Date"];
    const dnid = delivhist[id].data;

    //dd avail remove
    const ssdd = selectState[id];
    if (ssdd) {
      delete selectState[id];
      setSelectState({ ...selectState });
      return;
    }
    //dd not avail add
    setSelectState({ ...selectState, [id]:{[dd]: dnid} });
  };

  const tbStateHeader = () => {
    return (
      <thead>
        <tr>
          <th></th>
          {Object.keys(delivhist[0]).map((v) => {
            return (
              <>
                <td>{v == "data" ? "" : v}</td>
              </>
            );
          })}
        </tr>
      </thead>
    );
  };

  const tbStateContent = () => {
    return (
      <tbody>
        {delivhist.map((v, i) => {
          const dhdd = delivhist[i]["Delivery Date"];
          // console.log(selectState[dhdd]&true)
          // console.log(selectState)
          return (
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectState[dhdd]}
                  onClick={() => {
                    selectHandle(i);
                  }}
                />
              </th>
              {(() => {
                let res = [];
                for (const key in v) {
                  if (key == "data") continue;
                  res.push(<td>{v[key]}</td>);
                }
                return res;
              })()}
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary-300">
      <div className="flex flex-col h-7/12 min-w-80 w-7/12 card border-2 box-border p-4 bg-secondary-100">
        <div className="flex flex-row text-center font-semibold h-1/12">
          <Link
            to={""}
            className="flex-1/2 pt-2.5 pb-3 hover:animate-pulse shadow-md box-border border-2 card bg-primary-300 text-base-content"
          >
            Generate
          </Link>
          <div className="divider-horizontal divider"></div>
          <Link
            to={"show"}
            className="flex-1/2 pt-2.5 pb-3 hover:animate-pulse shadow-md box-border border-2 card bg-primary-300 text-base-content"
          >
            Show
          </Link>
        </div>
        <div className="flex flex-row h-11/12 pt-2">
          <div className="flex-1/2 flex flex-col justify-between p-2 mr-1 card box-border border-2">
            <div className="h-full flex flex-col justify-between">
              <Routes>
                <Route
                  index
                  element={<GenerateBarcode data={selectState} DelivHistState={[delivhist, setDelivHist]} />}
                />
                <Route
                  path="show"
                  element={<ShowBarcode data={selectState} DelivHistState={[delivhist, setDelivHist]} />}
                />
              </Routes>
            </div>
          </div>
          <div className="flex flex-col flex-1/2 h-full w-full">
            <div className="overflow-auto flex-1/2 ml-1 h-full w-full">
              <table className="table table-xs table-pin-rows table-pin-cols table-auto">
                {tbStateHeader()}
                {tbStateContent()}
              </table>
            </div>
            <button className="btn btn-primary w-fit self-end">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
