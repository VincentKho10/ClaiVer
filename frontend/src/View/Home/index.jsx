import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import GenerateBarcode from "./GenerateBarcode";
import ShowBarcode from "./ShowBarcode";

let isSelectAll = false;
const Home = () => {
  const [delivhist, setDelivHist] = useState({
    "2025-07-11": {
      "Delivery Date": "2025-07-11",
      "DN Count": 4,
      data: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0257"],
    },
    "2025-07-12": {
      "Delivery Date": "2025-07-12",
      "DN Count": 4,
      data: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0277"],
    },
  });

  const [selectState, setSelectState] = useState({});

  const selectHandle = (id) => {
    const dd = delivhist[id];

    //dd avail remove
    const ssdd = selectState[id];
    console.log(ssdd)
    if (ssdd) {
      delete selectState[id];
      setSelectState({ ...selectState });
      return;
    }
    // //dd not avail add
    setSelectState({ ...selectState, [id]: dd });
  };

  const tbStateHeader = () => {
    return (
      <thead>
        <tr>
          <th></th>
          {Object.keys(Object.entries(delivhist)[1][1]).map((v) => {
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

    const delivhistarr = () => {
      const delivhistmap = Object.entries(delivhist);
      const res = [];
      for (const [key, value] of delivhistmap) {
        const dhdd = delivhist[key]["Delivery Date"];
        console.log(dhdd);
        // console.log(selectState)
        res.push(
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox"
                checked={selectState[dhdd]}
                onClick={() => {
                  selectHandle(key);
                }}
              />
            </th>
            {(() => {
              let res1 = [];
              for (const key1 in value) {
                if (key1 == "data") continue;
                res1.push(<td>{value[key1]}</td>);
              }
              return res1;
            })()}
          </tr>
        );
      }
      return res;
    };

    return <tbody>{delivhistarr()}</tbody>;
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
                  element={
                    <GenerateBarcode
                      data={selectState}
                      DelivHistState={[delivhist, setDelivHist]}
                    />
                  }
                />
                <Route
                  path="show"
                  element={
                    <ShowBarcode
                      data={selectState}
                      DelivHistState={[delivhist, setDelivHist]}
                    />
                  }
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
