import React, { useEffect } from "react";
import { useState } from "react";

const GenerateBarcode = (props) => {
  const { data, DelivHistState, selectedid } = props;
  const [delivhist, setDelivHist] = DelivHistState;
  const [list, setList] = useState({});
  const [delivr, setDelivr] = useState({ listkey:-1, idx:-1, send_date: "", DNID: "" });

  useEffect(() => {
    console.log("rerender");
    setList({...data})
  }, [data]);

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

  const handleAddQueue = () => {
    let { listkey, idx, send_date, DNID } = delivr;
    let isSet = false;
    console.log(listkey && idx)
    if((listkey && idx)==-1){
      console.log("create")
      return
    }
    else if (send_date && DNID) {
      //if found it return list
      const found_deliv = list[listkey][send_date];
      //date registered already?
      if (found_deliv) {
        // does dnid registered?
        let cDNID = found_deliv[idx];
        // if not register
        if (!cDNID) {
          setList({
            ...list,
            [listkey]: {[send_date]: [...found_deliv, DNID]},
          });
        }else{
          console.log(idx)
          const temp = list
          temp[listkey][send_date][idx] = DNID
          // console.log(temp)
          setList({...temp})
        }
        isSet = !isSet;
        // if date not found initialize it
      } else {
        setList({ ...list, [listkey]:{[send_date]: [DNID] }});
        isSet = !isSet;
      }
      if (isSet) setDelivr({ ...delivr, idx:-1, send_date: "", DNID: "" });
    } else {
      console.log("send date or dnid should be filled");
    }
  };

  const handleUpdate = (key, id) => {
    const send_date = Object.entries(list[key])[0][0]
    const DNID = Object.entries(list[key])[0][1]
    console.log(send_date)
    setDelivr({ listkey:key, idx: id, send_date, DNID: DNID[id] });
  };

  const handleDelete = (key, idx) => {
    const send_date = Object.entries(list[key])[0][0]
    // console.log(send_date)
    const isLast = list[key][send_date].length == 1;
    if (isLast) {
      delete delivhist[delivr.listkey]
      // delete delivhist[key]
      console.log(delivr.listkey)
      // setDelivHist({...delivhist})
    } else {
      const nList = { ...list };
      nList[key][send_date].splice(idx, 1);
      setList({ ...nList });
    }
    console.log(delivhist[key])
  };

  const listContentComp = () => {
    const res = [];
    for (let key in list) {
      const send_date = Object.entries(list[key])[0][0];
      const DNID = Object.entries(list[key])[0][1];
      const dnComp = DNID.map((v, i) => {
        return (
          <div className="flex flex-row justify-between">
            <div className="w-9/12 flex justify-center pt-2">{v}</div>
            <div className="flex flex-row">
              <button
                className="btn btn-square btn-ghost"
                name="updateDN"
                onClick={() => handleUpdate(key, i)}
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
                onClick={() => handleDelete(key, i)}
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

      res.push(
        <>
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            {send_date}
          </li>

          <li className="list-col">{dnComp}</li>
        </>
      );
    }
    return res;
  };

  const handleSubmit = () => {
    let nList = [];
    // console.log(Object.entries(list))
    for (let [key, value] of Object.entries(list)) {
      const [k,v] = Object.entries(value)[0]
      
      nList = [
        ...nList,
        { "Delivery Date": k, "DN Count": v.length, data: v },
      ];
    }
    console.log(nList)

    // const res = [...delivhist, ...nList]
    setDelivHist(nList);
  };

  return (
    <>
      <label className="input w-full mb-1">
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
          onClick={() => handleAddQueue()}
        >
          Add
        </button>
      </div>

      <div className="flex flex-col max-h-9/12 min-h-9/12 pb-1">
        Upload Queue
        <ul className="list bg-base-100 rounded-box shadow-md overflow-auto">
          {listContentComp()}
        </ul>
      </div>

      <div className="flex flex-row justify-end h-1/12">
        <button className="btn btn-primary mr-4 h-full" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary h-full">Clear</button>
      </div>
    </>
  );
};

export default GenerateBarcode;
