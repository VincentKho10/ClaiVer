import React, { useEffect } from "react";
import { useState } from "react";

const GenerateBarcode = (props) => {
  const { SelectState, DelivHistState } = props;
  const [selectstate, setSelectState] = SelectState;
  const [delivhist, setDelivHist] = DelivHistState;
  const [isUpdate, setIsUpdate] = useState(-1);
  const [list, setList] = useState({
    // "2025-07-11": {
    //   "Delivery Date": "2025-07-11",
    //   "DN Count": 4,
    //   data: ["2025/07/0255", "2025/07/0253", "2025/07/0256", "2025/07/0257"],
    // },
  });
  const [delivr, setDelivr] = useState({ send_date: "", DNID: "" });

  useEffect(() => {
    setList({ ...selectstate });
  }, [selectstate]);

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

  const handleQueueChange = () => {
    let { send_date, DNID } = delivr;
    if (isUpdate >= 0) {
      setList({...selectstate})
      let n_arr = selectstate[send_date].data;
      const isFound = n_arr.find((v) => DNID == v);
      if (!isFound) {
        n_arr[isUpdate] = DNID;
        n_arr = Array.from(new Set(n_arr));
        //reseting after update
        setIsUpdate(-1);
      } else {
        return;
      }
    } else {
      setSelectState({})
      let n_arr = list[send_date];
      let nvalue = {}
      console.log(n_arr)
      if(n_arr){
        nvalue = {
          ...list,
          [send_date]: {
            count: n_arr.data.length,
            data: Array.from(new Set([...n_arr.data, DNID])),
          },
        };
      }else{
        nvalue = {
          [send_date]: {
            count: 1,
            data: [DNID],
          },
        };
      }
      setList({ ...list, ...nvalue });
    }
    setDelivr({ send_date: "", DNID: "" });
  };

  const handleUpdate = (send_date, id) => {
    setDelivr({ send_date, DNID: list[send_date].data[id] });
    setIsUpdate(id);
    // handleDelete(send_date, id);
  };

  const handleDelete = (send_date, idx) => {
    if (!list[send_date]) {
      // setList({...list})
      console.log(selectstate);
      // setDelivHist({ ...delivhist});
      return;
    }
    const isLast = list[send_date].data.length <= 1;
    let nList = { ...list };
    if (isLast) {
      const { [send_date]: deleted, ...nDelivHist } = delivhist;
      setDelivHist({ ...nDelivHist });
      console.log(selectstate);
      delete selectstate[send_date];
      setSelectState({ ...selectstate });
    } else {
      nList[send_date].data.splice(idx, 1);
      nList[send_date].count = nList[send_date].data.length;
      setList({ ...nList });
      //reset selected and deliv then list follow selected
      setSelectState({ ...selectstate });
      setDelivHist({ ...delivhist });
    }
    console.log(list);
  };

  const listContentComp = () => {
    const res = [];
    for (let key in isUpdate==-1?list:selectstate) {
      const DNID = isUpdate==-1?list[key].data:selectstate[key].data;
      const send_date = key;
      const dnComp = DNID.map((v, i) => {
        return (
          <div className="flex flex-row justify-between">
            <div className="w-9/12 flex justify-center pt-2">{v}</div>
            <div className="flex flex-row">
              <button
                className="btn btn-square btn-ghost"
                name="updateDN"
                onClick={() => handleUpdate(send_date, i)}
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
                onClick={() => handleDelete(send_date, i)}
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
    let nList = delivhist;

    // console.log(Object.entries(list))
    // for (let [key, value] of Object.entries(list)) {
    //   // const isFound =
    //   nList[value.id] = {
    //     "Delivery Date": key,
    //     "DN Count": value.dnid.length,
    //     data: value.dnid,
    //   };
    // }

    // mergeDict(list, nList);
    console.log(nList);

    // const res = [...nList]
    // setDelivHist([...nList]);
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
          disabled={isUpdate==-1?false:true}
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
          onClick={() => handleQueueChange()}
        >
          {isUpdate > -1 ? "Update" : "Add"}
        </button>
      </div>

      <div className="flex flex-col max-h-9/12 min-h-9/12 pb-1">
        Upload Queue
        <ul className="list bg-base-100 rounded-box shadow-md overflow-auto">
          {listContentComp()}
        </ul>
      </div>
      {isUpdate == -1 ? (
        <div className="flex flex-row justify-end h-1/12">
          <button
            className="btn btn-primary mr-4 h-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button className="btn btn-secondary h-full">Clear</button>
        </div>
      ) : (
        []
      )}
    </>
  );
};

export default GenerateBarcode;
