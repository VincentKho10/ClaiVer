import React, { useState } from "react";
import TableComponent from "../Components/TableComponent";

let isSelected = [];
const datasarr = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    status: "Submitted",
    company: "Tech Solutions Inc.",
    position: "Software Engineer",
    startDate: "2020-05-15",
    salary: 95000,
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@example.com",
    age: 34,
    status: "Submitted",
    company: "Innovate LLC",
    position: "Project Manager",
    startDate: "2018-09-01",
    salary: 110000,
    skills: ["Agile", "Scrum", "JIRA"],
  },
  {
    id: 3,
    name: "Emily White",
    email: "emily.white@example.com",
    age: 45,
    status: "Submitted",
    company: "Global Connect",
    position: "Marketing Director",
    startDate: "2015-03-22",
    salary: 150000,
    skills: ["SEO", "Content Strategy", "Analytics"],
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    age: 22,
    status: "Submitted",
    company: "Data Insights Co.",
    position: "Data Analyst",
    startDate: "2022-11-10",
    salary: 75000,
    skills: ["Python", "SQL", "Tableau"],
  },
  {
    id: 5,
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    age: 31,
    status: "Submitted",
    company: "Design Hub",
    position: "UX/UI Designer",
    startDate: "2019-07-30",
    salary: 85000,
    skills: ["Figma", "Sketch", "User Research"],
  },
  {
    id: 6,
    name: "David Garcia",
    email: "david.garcia@example.com",
    age: 50,
    status: "Submitted",
    company: "Future Systems Inc.",
    position: "CTO",
    startDate: "2010-01-05",
    salary: 250000,
    skills: ["Cloud Computing", "Architecture", "Cybersecurity"],
  },
  {
    id: 7,
    name: "Laura Wilson",
    email: "laura.wilson@example.com",
    age: 29,
    status: "Submitted",
    company: "Green Energy Solutions",
    position: "Environmental Engineer",
    startDate: "2021-02-14",
    salary: 90000,
    skills: ["AutoCAD", "Sustainability", "GIS"],
  },
  {
    id: 8,
    name: "James Taylor",
    email: "james.taylor@example.com",
    age: 38,
    status: "Submitted",
    company: "Financial Pros",
    position: "Accountant",
    startDate: "2017-06-20",
    salary: 105000,
    skills: ["QuickBooks", "SAP", "Tax Law"],
  },
  {
    id: 9,
    name: "Jessica Moore",
    email: "jessica.moore@example.com",
    age: 26,
    status: "Submitted",
    company: "Healthcare Innovations",
    position: "Nurse",
    startDate: "2023-01-10",
    salary: 70000,
    skills: ["Patient Care", "EMR", "First Aid"],
  },
  {
    id: 10,
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    age: 41,
    status: "Submitted",
    company: "Retail Dynamics",
    position: "Operations Manager",
    startDate: "2016-08-08",
    salary: 120000,
    skills: ["Supply Chain", "Logistics", "Lean Six Sigma"],
  },
];
let createlastid = datasarr.length;

const HomeContentSection = () => {
  const [datas, setDatas] = useState(() => {
    const res = new Map();

    datasarr.forEach((v, i) => {
      console.log((i + 1).toString());
      res.set((i + 1).toString(), v);
    });

    return res;
  });

  const keys = datas.size > 0 ? Object.keys(datasarr[0]) : false;

  const handleInit = () => {
    const res = [];
    const checkbox = document.querySelectorAll(
      'input[name="isSelected"]:checked'
    );
    checkbox.forEach((v) => {
      console.log(v.value);
      res.push(v.value);
    });
    isSelected = res;
    console.log(isSelected);
    return checkbox;
  };

  const handleCreate = () => {
    datas.set(createlastid.toString(), {
      id: createlastid,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      age: 28,
      status: "Created",
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      startDate: "2020-05-15",
      salary: 95000,
      skills: ["JavaScript", "React", "Node.js"],
    });
    setDatas(new Map(datas));
    createlastid++;
  };

  const handleSubmit = () => {
    const checked = handleInit();
    checked.forEach((v,i) => {
        datas.get(v.value).status = "Submitted"
    })
    setDatas(new Map(datas))
  };

  const handleDelete = () => {
    const checked = handleInit();
    // console.log(checked);
    checked.forEach((v) => {
      datas.delete(v.value);
    });
    setDatas(new Map(datas));
    if (datas.size == 0) {
      createlastid = 0;
    }
    document.querySelector('[name="isSelectedAll"]').checked = false;
  };

  return (
    <div className={"flex flex-col justify-start p-8 h-11/12"}>
      <div
        className={"flex flex-row h-1/12 w-full items-center justify-between"}
      >
        <div className="pl-2">
          <div className="btn btn-success mr-2" onClick={handleCreate}>
            Create
          </div>
        </div>
        <div>
          <div className="btn btn-success mr-2" onClick={handleSubmit}>
            Submit
          </div>
          <div className="btn btn-error mr-2" onClick={handleDelete}>
            Delete
          </div>
        </div>
      </div>
      <div className="flex h-11/12 justify-start overflow-x-auto">
        {!keys ? (
          <h1 className="align-middle">No Data ToBe Shown</h1>
        ) : (
          <TableComponent datas={datas} keys={keys} />
        )}
      </div>
    </div>
  );
};

export default HomeContentSection;
