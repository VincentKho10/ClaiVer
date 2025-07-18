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

  const [delivr, setDelivr] = useState({ send_date: "", DNID: "" });

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    if (name == "send_date") {
      const send_date = value;
      setDelivr({ ...delivr, send_date });
    } else if (name == "DNID") {
      const DNID = value;
      setDelivr({ ...delivr, DNID });
    }
  };

  const handleSubmit = () => {
    let { send_date, DNID } = delivr;
    if (send_date && DNID) {
      const found_deliv = list.findIndex((v) => v.send_date == send_date);
      //if the delivery found on list
      if (found_deliv > -1) {
        const cDNID = list[found_deliv].DNID.find((v) => v == DNID);
        if (!cDNID) {
          const nDNID = [...list[found_deliv].DNID, DNID];
          list[found_deliv] = { send_date, DNID: nDNID };
          setList([...list]);
        }
        //init if not found
      } else {
        setList([...list, { send_date, DNID: [DNID] }]);
      }
      console.log(list);
    } else {
      console.log("send date or dnid should be filled");
    }
  };

  const handleUpdate = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  const listContentComp = list.map((v) => {
    const { send_date, DNID } = v;
    const dnComp = DNID.map((v,i) => {
      return (
        <div className="flex flex-row justify-between">
          <div className="w-9/12 flex justify-center pt-2">{v}</div>
          <div className="flex flex-row">
            <button
              className="btn btn-square btn-ghost"
              name="updateDN"
              onClick={()=>handleUpdate(i)}
            >
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
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z"></path>
                </g>
              </svg>
            </button>
            <button
              className="btn btn-square btn-ghost"
              name="deleteDN"
              onClick={()=>handleDelete(i)}
            >
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
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
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
      <label className="input w-full">
        <span className="label">Delivery Date</span>
        <input
          type="date"
          value={delivr.send_date}
          name="send_date"
          onChange={handleChangeField}
        />
      </label>

      <div className="flex flex-row justify-between">
        <label className="floating-label w-full pr-4">
          <span>SJ ID</span>
          <input
            type="text"
            placeholder="YYYY/MM/NNNN"
            className="input input-md w-full"
            name="DNID"
            value={delivr.DNID}
            onChange={handleChangeField}
          />
        </label>

        <button
          className="btn btn-primary"
          name="submit_delivr"
          onClick={()=>handleSubmit()}
        >
          Submit
        </button>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md overflow-auto max-h-9/12 min-h-9/12">
        {listContentComp}
      </ul>
    </>
  );
};

export default GenerateBarcode;
